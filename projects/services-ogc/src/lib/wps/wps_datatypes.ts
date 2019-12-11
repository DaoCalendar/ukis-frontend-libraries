export type WpsVerion = '1.0.0' | '2.0.0';
export type WpsDataFormat = 'application/vnd.geo+json' | 'application/json' | 'application/WMS' |
                            'application/xml' | 'text/xml' | 'application/text' | 'image/geotiff' |
                            'text/plain';


export type ProcessId = string;
export type ProductId = string;

export interface WpsDataDescription {
    id: ProductId;
    type: 'literal' | 'complex' | 'bbox' | 'status' | 'error';
    reference: boolean;
    format?: WpsDataFormat;
    description?: string;
    defaultValue?: any;
}
export type WpsInputDescription = WpsDataDescription;
export type WpsOutputDescription = WpsDataDescription;


export interface WpsData {
    description: WpsDataDescription;
    value: any;
}
export type WpsInput = WpsData;
export type WpsResult = WpsData;

export interface WpsBboxDescription {
    id: ProductId;
    type: 'bbox';
    reference: boolean;
    format?: WpsDataFormat;
    description?: string;
    defaultValue?: any;
}

export interface WpsBboxValue {
    crs: string;
    lllon: number;
    lllat: number;
    urlon: number;
    urlat: number;
}

export const isBbox = (obj: object): obj is WpsBboxValue => {
    return (
        obj.hasOwnProperty('crs') &&
        obj.hasOwnProperty('lllon') &&
        obj.hasOwnProperty('lllat') &&
        obj.hasOwnProperty('urlon') &&
        obj.hasOwnProperty('urlat')
    );
};


export interface WpsState {
    status: 'Succeeded' | 'Failed' | 'Accepted' | 'Running' | 'Dismissed';
    percentCompleted?: number;
    /** WPS 2.0 only */
    jobID?: string;
    /** WPS 1.0 only */
    statusLocation?: string;
}

export function isWpsState(obj: object): obj is WpsState {
    return obj && obj.hasOwnProperty('status') && (obj.hasOwnProperty('jobID') || obj.hasOwnProperty('statusLocation'));
}


export interface WpsBboxData {
    description: WpsBboxDescription;
    value: WpsBboxValue;
}

export interface WpsCapability {
    id: string;
}


export interface WpsMarshaller {

    executeUrl(url: string, processId: string): string;
    dismissUrl(serverUrl: string, processId: string, jobId: string): string;
    getCapabilitiesUrl(baseurl: string): string;

    unmarshalCapabilities(capabilitiesJson: any): WpsCapability[];
    unmarshalExecuteResponse(responseJson: any, url: string, processId: string, inputs: WpsInput[], outputDescriptions: WpsOutputDescription[]): WpsResult[];
    unmarshalGetStateResponse(jsonResponse: any, serverUrl: string, processId: string, inputs: WpsInput[], outputDescriptions: WpsOutputDescription[]): WpsData[] | WpsState;
    unmarshalDismissResponse(jsonResponse: any, serverUrl: string, processId: string): WpsState;

    marshalExecBody(processId: string, inputs: WpsInput[], outputs: WpsOutputDescription[], async: boolean): any;
    marshallGetStatusBody(serverUrl: string, processId: string, statusId: string): any;
    marshallGetResultBody(serverUrl: string, processId: string, jobID: string): any;
    marshalDismissBody(jobId: string): any;
}
