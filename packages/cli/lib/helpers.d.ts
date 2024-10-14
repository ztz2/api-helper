import type { APIHelper } from '@api-helper/core/lib/types';
export declare type RequestMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
export declare type RequestFunctionRestArgsType<T> = T extends (params: any, ...args: infer K) => any ? K : any;
export declare class FormDataItem<T> {
    private value;
    constructor(value?: T);
    get(): T | undefined;
    set(value: T): void;
}
interface RequestConfig {
    path: string;
    method: RequestMethod | string;
    formDataKeyNameList: APIHelper.API['formDataKeyNameList'];
    pathParamKeyNameList: APIHelper.API['pathParamKeyNameList'];
    queryStringKeyNameList: APIHelper.API['queryStringKeyNameList'];
    requestContentType?: APIHelper.API['requestContentType'];
    responseContentType?: APIHelper.API['responseContentType'];
    headers?: APIHelper.API['headers'];
    cookies?: APIHelper.API['cookies'];
}
export interface RequestFunctionConfig extends RequestConfig {
    path: string;
    rawPath: string;
    method: RequestMethod;
    data: string | number | boolean | null | undefined | Record<any, any> | FormData;
    hasFormData: boolean;
    rawData: unknown;
    rawExtraData?: unknown;
}
export declare function checkMiniProgramEnv(): boolean;
export declare function processRequestFunctionConfig<T, R>(data: T, extraData: R, requestConfig: RequestConfig): RequestFunctionConfig;
export {};
