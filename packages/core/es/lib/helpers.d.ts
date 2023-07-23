import { APIHelper } from './types';
declare class AbstractSchema implements APIHelper.IAbstractSchema {
    id: string;
    type: string;
    keyName: string;
    title: string;
    description: string;
    label: string;
    rules: {
        required: boolean;
    };
    examples: string[];
    params: APIHelper.Schema[];
    enum: (string | number)[];
}
export declare function createSchema(type: APIHelper.SchemaType | 'enum', options?: Partial<AbstractSchema & Recordable>): APIHelper.Schema;
export declare function createDocument(options?: Partial<APIHelper.Document & Recordable>): APIHelper.Document;
export declare function createCategory(options?: Partial<APIHelper.Category & Recordable>): APIHelper.Category;
export declare function createApi(options?: Partial<APIHelper.API & Recordable>): APIHelper.API;
export declare function transformType(type: string, format?: string | 'int32' | 'int64' | 'float' | 'double' | 'byte' | 'binary' | 'date' | 'date-time' | 'password', emptyType?: APIHelper.SchemaType): APIHelper.SchemaType;
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
export {};
