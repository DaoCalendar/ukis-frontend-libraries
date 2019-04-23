export type WpsVerion = "1.0.0" | "2.0.0";

export interface WpsBasicInput {
    id: string;
    data?: any;
    reference?: string
}

export interface WpsLiteralInput extends WpsBasicInput {
    inputtype: "literal", 
    datatype: string;
}

export interface WpsComplexInput extends WpsBasicInput {
    inputtype: "complex",
}

export interface WpsBboxInput extends WpsBasicInput {
    inputtype: "bbox"
}

export type WpsInput = WpsLiteralInput | WpsBboxInput | WpsComplexInput;

export interface WpsOutputDescription {
    type: "literal" | "complex",
    id: string
}

export interface WpsComplexOutputDescription extends WpsOutputDescription {
    type: "complex", 
    outputFormat: string
}

export interface WpsResult {
    id: string, 
    value: any
}


export interface WpsMarshaller {
    unmarshalCapabilities(capabilitiesJson: any): any;
    unmarshalExecuteResponse(responseJson: any): WpsResult[];
    marshalExecBody(processId: string, inputs: WpsInput[], output: WpsOutputDescription): any;
    getCapabilitiesUrl(baseurl: string): string;
    executeUrl(url: string, processId: string): string;
}
