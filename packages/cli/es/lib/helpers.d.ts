import type { APIHelper } from '@api-helper/core/lib/types';
export declare class FormDataItem<T> {
    private value;
    constructor(value?: T);
    get(): T | undefined;
    set(value: T): void;
}
export declare type RequestMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
export declare type RequestFunctionRestArgsType<T> = T extends (params: any, ...args: infer K) => any ? K : any;
export declare type RequestFunctionConfig = {
    path: string;
    method: RequestMethod;
    data: Record<string, any> | FormData | undefined;
    hasFormData: boolean;
    rowData: unknown;
    rowExtraData?: unknown;
};
export declare function isMiniProgramEnv(): boolean;
export declare function processRequestFunctionConfig<T extends object, R>(data: T, extraData: R, requestConfig: {
    path: string;
    method: RequestMethod | string;
    formDataKeyNameList: APIHelper.API['formDataKeyNameList'];
    pathParamKeyNameList: APIHelper.API['pathParamKeyNameList'];
    queryStringKeyNameList: APIHelper.API['queryStringKeyNameList'];
}): RequestFunctionConfig;
