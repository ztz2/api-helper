import { APIHelper } from './types';
export declare class FormDataItem<T> {
    private value;
    constructor(value?: T);
    get(): T | undefined;
    set(value: T): void;
}
export declare function getSchema(schema: APIHelper.Schema | null, path?: string, clearKeyName?: boolean): APIHelper.Schema | null;
export declare type RequestFunctionRestArgsType<T> = T extends (params: any, ...args: infer K) => any ? K : any;
export declare type RequestFunctionConfig = {
    path: string;
    method: string;
    data: Record<string, any> | FormData | undefined;
    hasFormData: boolean;
    rowData: unknown;
    rowExtraData?: unknown;
};
export declare function processRequestFunctionConfig<T extends object, R>(data: T, extraData: R, requestConfig: {
    path: string;
    method: string;
    formDataKeyNameList: APIHelper.API['formDataKeyNameList'];
    pathParamKeyNameList: APIHelper.API['pathParamKeyNameList'];
    queryStringKeyNameList: APIHelper.API['queryStringKeyNameList'];
}): RequestFunctionConfig;
