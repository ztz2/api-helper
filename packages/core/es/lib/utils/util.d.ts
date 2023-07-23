import { JSONSchema4 } from 'json-schema';
import { APIHelper } from '../types';
export declare function checkType<T>(value: T, type: string): boolean;
export declare function isHttp<T>(value: T): boolean;
export declare function filterEmpty(value: any): any;
export declare function Try<T>(fn: () => T, err: (e: Error) => any): T;
export declare function arrayUniquePush(array: Array<any>, item: any): number;
export declare function uuid(): string;
export declare function randomId(): string;
export declare function mergeUrl(...args: string[]): string;
export declare function filterDesc(value?: string): string;
export declare function filterSchemaRoot(schemaList: Array<APIHelper.Schema>): ({
    params: never[];
    type: "string";
    rules: {
        required: boolean;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        pattern?: string | undefined;
    };
    id: string;
    keyName: string;
    title: string;
    description: string;
    label: string;
    examples: string[];
    enum: (string | number)[];
} | {
    params: never[];
    type: "number";
    rules: {
        required: boolean;
        multipleOf?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        exclusiveMinimum?: number | boolean | undefined;
        exclusiveMaximum?: number | boolean | undefined;
    };
    id: string;
    keyName: string;
    title: string;
    description: string;
    label: string;
    examples: string[];
    enum: (string | number)[];
} | {
    params: never[];
    type: "object";
    id: string;
    keyName: string;
    title: string;
    description: string;
    label: string;
    rules: {
        required: boolean;
    };
    examples: string[];
    enum: (string | number)[];
} | {
    params: never[];
    type: "array";
    rules: {
        required: boolean;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        uniqueItems?: boolean | undefined;
    };
    id: string;
    keyName: string;
    title: string;
    description: string;
    label: string;
    examples: string[];
    enum: (string | number)[];
} | {
    params: never[];
    type: "boolean";
    id: string;
    keyName: string;
    title: string;
    description: string;
    label: string;
    rules: {
        required: boolean;
    };
    examples: string[];
    enum: (string | number)[];
} | {
    params: never[];
    type: "file";
    id: string;
    keyName: string;
    title: string;
    description: string;
    label: string;
    rules: {
        required: boolean;
    };
    examples: string[];
    enum: (string | number)[];
} | {
    params: never[];
    type: "null";
    id: string;
    keyName: string;
    title: string;
    description: string;
    label: string;
    rules: {
        required: boolean;
    };
    examples: string[];
    enum: (string | number)[];
} | {
    params: never[];
    type: "any";
    id: string;
    keyName: string;
    title: string;
    description: string;
    label: string;
    rules: {
        required: boolean;
    };
    examples: string[];
    enum: (string | number)[];
} | {
    params: never[];
    type: "unknown";
    id: string;
    keyName: string;
    title: string;
    description: string;
    label: string;
    rules: {
        required: boolean;
    };
    examples: string[];
    enum: (string | number)[];
})[];
export declare function filterSchemaRequired(schemaList: Array<APIHelper.Schema>): (APIHelper.IStringSchema | APIHelper.INumberSchema | APIHelper.IObjectSchema | APIHelper.IArraySchema | APIHelper.IBooleanSchema | APIHelper.IFileSchema | APIHelper.INullSchema | APIHelper.IAnySchema | APIHelper.IUnknownSchema)[];
export declare function filterKeyName(value?: string): string;
export declare function parserSchema(schema: JSONSchema4, parentSchema?: JSONSchema4, keyName?: string, memo?: Map<JSONSchema4, null>, options?: {
    autoGenerateId: boolean;
}): APIHelper.Schema | null;
export declare function processRequestSchema(requestDataSchema: APIHelper.Schema, requestSchemaRecord: Array<JSONSchema4>, requestJSONSchemaSource: JSONSchema4, keyNameMemo?: string[], options?: {
    autoGenerateId: boolean;
    callback?(parsedSchema: APIHelper.Schema): void;
}): APIHelper.IStringSchema | APIHelper.INumberSchema | APIHelper.IObjectSchema | APIHelper.IArraySchema | APIHelper.IBooleanSchema | APIHelper.IFileSchema | APIHelper.INullSchema | APIHelper.IAnySchema | APIHelper.IUnknownSchema | null;
export declare function uniqueRequestDataRootSchema(api: APIHelper.API): APIHelper.API;
export declare function deepAddSchemaRules(schema: null | APIHelper.Schema | APIHelper.SchemaList, rules?: Recordable): undefined;
export declare function processRequestSchemaPipeline(api: APIHelper.API, requestDataSchema: APIHelper.Schema, requestExtraDataSchema: APIHelper.Schema | null, options: Recordable): APIHelper.API;
export declare function processResponseSchemaPipeline(api: APIHelper.API, options: Recordable): void;
export declare function isSchemaObject(schema: APIHelper.Schema | null): boolean;
export declare function isSchemaPrimitiveValue(schema: APIHelper.Schema | null): boolean;
/**
 * @description 过滤原始值的Schema。保留纯粹的类型对象。原始值Schema用于TS类型申明有用，在生成JS对象，Class实体类时候，这些原始值类型则无用，需要过滤掉。
 * @example 例子说明：
    源数据：[
            { keyName: '', type: 'string' },
            { keyName: 'username', type: 'string' }
          ]
    过滤后：[
            { keyName: 'username', type: 'string' }
          ]
 * @param schema { schema: APIHelper.Schema | APIHelper.SchemaList | null } schema对象
 * @return APIHelper.Schema | APIHelper.SchemaList | null
 */
export declare function filterSchemaPrimitiveValue<T>(schema: APIHelper.Schema | APIHelper.SchemaList | null): T;
export declare function getErrorMessage<T extends string | Error & {
    msg?: string;
}>(error: T, prefix?: string, postfix?: string): string;
