import { JSONSchema4 } from 'json-schema';
import { APIHelper } from '../types';
export declare function checkType<T>(value: T, type: string): boolean;
export declare function isHttp<T>(value: T): boolean;
export declare function filterEmpty(value: any): any;
export declare function Try<T>(fn: () => T, err: (e: Error) => any): T;
export declare function arrayUniquePush(array: Array<any>, item: any): number;
export declare function uuid(): string;
export declare function randomId(): string;
export declare function filterSchema(schemaList: APIHelper.Schema[], deepClone?: boolean): APIHelper.Schema[];
export declare function mergeUrl(...args: string[]): string;
export declare function filterDesc(value?: string): string;
export declare function filterKeyName(value?: string): string;
export declare function transformType(type: string): APIHelper.SchemaType;
export declare function parserSchema(schema: JSONSchema4, parentSchema?: JSONSchema4, keyName?: string, memo?: Map<JSONSchema4, null>, options?: {
    autoGenerateId: boolean;
}): APIHelper.Schema | null;
export declare function processRequestSchema(requestDataSchema: APIHelper.Schema, requestSchemaRecord: Array<JSONSchema4>, requestJSONSchemaSource: JSONSchema4, keyNameMemo?: string[], options?: {
    autoGenerateId: boolean;
    callback?(parsedSchema: APIHelper.Schema): void;
}): APIHelper.IString | APIHelper.INumber | APIHelper.IObject | APIHelper.IArray | APIHelper.IBoolean | APIHelper.INull | APIHelper.IAny | APIHelper.IUnknown | null;
export declare function uniqueRequestDataRootSchema(api: APIHelper.API): APIHelper.API;
export declare function deepAddSchemaRules(schema: null | APIHelper.Schema | APIHelper.Schema[], rules?: Recordable): undefined;
export declare function processRequestSchemaPipeline(api: APIHelper.API, requestDataSchema: APIHelper.Schema, requestExtraDataSchema: APIHelper.Schema | null, options: Recordable): APIHelper.API;
export declare function processResponseSchemaPipeline(api: APIHelper.API, options: Recordable): void;
