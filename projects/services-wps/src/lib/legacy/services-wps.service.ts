import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jsonix } from '@boundlessgeo/jsonix';
import * as W3cFactory from "w3c-schemas/lib/XLink_1_0";
import * as OwsFactory from "ogc-schemas/lib/OWS_1_1_0";
import * as Wps1Factory from "ogc-schemas/lib/WPS_1_0_0";
import * as Wps2Factory from "ogc-schemas/lib/WPS_2_0";
import { IWpsCapabilities, IWpsProcessDescription, IWpsProcessBrief, IWpsDataInputs, IWpsResponseForm, IWpsExecuteResponse, Wps100DataFactory, IWpsProcessDescriptions } from '@ukis/datatypes-ogc';



/**
 * This service exposes an interface to talk to any WPS.
 * It does not contain any state that is specific to any single WPS, so it can be used to talk to more than one WPS. 
 */


@Injectable({
  providedIn: 'root'
})
export class ServicesWps100Service {
  
  unmarshallerXmlToJson: any;
  marshallerJsonToXml: any;

  constructor(private http: HttpClient) {
    let xlinkMapping = W3cFactory["XLink_1_0"];
    let owsMapping = OwsFactory["OWS_1_1_0"];
    let wpsMapping = Wps1Factory["WPS_1_0_0"];
    let jsonixContext = new Jsonix.Context([xlinkMapping, owsMapping, wpsMapping], {namespacePrefixes: []});
    this.unmarshallerXmlToJson = jsonixContext.createUnmarshaller();
    this.marshallerJsonToXml = jsonixContext.createMarshaller();
  }

 
  /**
   * http://geoprocessing.info/wpsdoc/serv?request=HYPERLINKED&schema=wps:Capabilities
   */
  getCapabilities(url: string): Observable<IWpsCapabilities> {

    let wpsQueryParams = {
      service: 'WPS',
      version: '1.0.0',
      request: 'GetCapabilities'
    };

    let wpsUrl = url + this.objectToUriParameters(wpsQueryParams);

    let headers = new HttpHeaders({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');

    return this.http.get(wpsUrl, {headers: headers, responseType: 'text'}).pipe(
      map((response: string): IWpsCapabilities => {
        return this.unmarshallerXmlToJson.unmarshalString(response);
      })
    );
  }

  /**
   * http://geoprocessing.info/wpsdoc/serv?request=HYPERLINKED&schema=wps:ProcessDescription
   */
  describeProcess(url: string, process: IWpsProcessBrief): Observable<IWpsProcessDescriptions> {

    let wpsQueryParams = {
        service: 'WPS',
        version: '1.0.0',
        request: 'DescribeProcess',
        identifier: process.identifier.value  
    };

    let wpsUrl = url + this.objectToUriParameters(wpsQueryParams);

    let headers = new HttpHeaders({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');

    return this.http.get(wpsUrl, {headers: headers, responseType: 'text'}).pipe(
      map((response: string): IWpsProcessDescriptions => {
        return this.unmarshallerXmlToJson.unmarshalString(response);
      })
    );
  }

  /**
   * http://geoprocessing.info/wpsdoc/1x0Execute
   */
  executeProcess(url:string, process: IWpsProcessBrief, processDescription: IWpsProcessDescription, inputs: IWpsDataInputs, responseForm: IWpsResponseForm): Observable<IWpsExecuteResponse> {

    this.ensureInputsSuitProcess(processDescription, inputs);
    this.ensureResponseFormSuitsProcess(processDescription, responseForm);

    let body = Wps100DataFactory.executeProcessBody(processDescription, inputs, responseForm);
    let bodyString = this.marshallerJsonToXml.marshalString(body);

    var wpsQueryParams = {
        service: 'WPS',
        version: '1.0.0',
        request: 'Execute',
        identifier: process.identifier.value
    };
    let wpsUrl = url + this.objectToUriParameters(wpsQueryParams);

    let headers = new HttpHeaders({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
    return this.http.post(wpsUrl, bodyString, {headers: headers, responseType: 'text'}).pipe(
      map((response) => {
        return this.unmarshallerXmlToJson.unmarshalString(response)
      })
    );
  }


  dismissProcess(url:string) {

  }


  requestStatus(url: string) {

  }


  getExecutionResult(url: string) {

  }


  /**
   * This method is not part of the WPS specification.
   * @param processDescription 
   * @param responseForm 
   */
  ensureResponseFormSuitsProcess(processDescription: IWpsProcessDescription, responseForm: IWpsResponseForm) {
    // TODO
  }

  /**
   * This method is not part of the WPS specification.
   * @param processDescription 
   * @param inputs 
   */
  ensureInputsSuitProcess(processDescription: IWpsProcessDescription, inputs: IWpsDataInputs) {
    // TODO
  }

  private objectToUriParameters(obj: Object) : string {
    var query = "?";
    for (var k in obj) {
        query += k + "=" + obj[k] + "&";
    }
    //TODO: uri encode proposed in RFC not working with Django-AS
    query = query.substr(0, query.length - 1);
    return query;
  }

}
