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
    rawType: string;
    format: string;
}
export declare function createSchema(type: APIHelper.SchemaType | 'enum' | 'file', options?: Partial<AbstractSchema>): APIHelper.Schema;
export declare function createDocument(options?: Partial<APIHelper.Document & Recordable>): APIHelper.Document;
export declare function createCategory(options?: Partial<APIHelper.Category & Recordable>): APIHelper.Category;
export declare function createApi(options?: Partial<APIHelper.API & Recordable>): APIHelper.API;
export declare function transformType(type: string, format?: string | 'int32' | 'int64' | 'float' | 'double' | 'byte' | 'binary' | 'date' | 'date-time' | 'password', emptyType?: APIHelper.SchemaType): APIHelper.SchemaType;
export declare function getSchema(schema: APIHelper.Schema | null, path?: string, clearKeyName?: boolean): APIHelper.Schema | null;
export {};
