import { OpenAPI } from 'openapi-types';
export declare type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
export declare namespace APIHelper {
    type TemplateContent = {
        title: string;
        content: string;
    };
    type OpenAPIDocument = OpenAPI.Document & {
        documentServerUrl?: string;
    };
    type OpenAPIDocumentList = Array<OpenAPIDocument>;
    type TemplateContentList = Array<TemplateContent>;
    type CategoryList = Array<Category>;
    type APIList = Array<API>;
    type SchemaList = Array<Schema>;
    type SchemaType = 'string' | 'number' | 'object' | 'array' | 'boolean' | 'null' | 'any' | 'File' | 'unknown';
    interface Document {
        id: string;
        title: OpenAPI.Document['info']['title'];
        description: OpenAPI.Document['info']['description'];
        version: OpenAPI.Document['info']['version'];
        documentVersion: string;
        basePath: string;
        documentServerUrl: string;
        categoryList: CategoryList;
    }
    interface Category {
        id: string;
        name: string;
        description: string;
        apiList: APIList;
    }
    interface API {
        id: string;
        title: string;
        description: string;
        label: string;
        docURL?: string;
        path: string;
        method: string;
        formDataKeyNameList: Array<string>;
        pathParamKeyNameList: Array<string>;
        queryStringKeyNameList: Array<string>;
        requestDataSchema: Schema | null;
        requestExtraDataSchema: Schema | null;
        responseDataSchema: Schema | null;
    }
    type Schema = IStringSchema | INumberSchema | IObjectSchema | IArraySchema | IBooleanSchema | IFileSchema | INullSchema | IAnySchema | IUnknownSchema;
    interface IAbstractSchema {
        id: string;
        type: SchemaType | string;
        keyName: string;
        title: string;
        description: string;
        label: string;
        rules: {
            required: boolean;
        };
        examples: string[];
        params: Schema[];
        enum: Array<string | number>;
    }
    interface IStringSchema extends IAbstractSchema {
        type: 'string';
        rules: {
            required: boolean;
            minLength?: number;
            maxLength?: number;
            pattern?: string;
        };
    }
    interface INumberSchema extends IAbstractSchema {
        type: 'number';
        rules: {
            required: boolean;
            multipleOf?: number;
            minimum?: number;
            maximum?: number;
            exclusiveMinimum?: number | boolean;
            exclusiveMaximum?: number | boolean;
        };
    }
    interface IObjectSchema extends IAbstractSchema {
        type: 'object';
    }
    interface IArraySchema extends IAbstractSchema {
        type: 'array';
        rules: {
            required: boolean;
            minLength?: number;
            maxLength?: number;
            uniqueItems?: boolean;
        };
    }
    interface IBooleanSchema extends IAbstractSchema {
        type: 'boolean';
    }
    interface IFileSchema extends IAbstractSchema {
        type: 'File';
    }
    interface INullSchema extends IAbstractSchema {
        type: 'null';
    }
    interface IAnySchema extends IAbstractSchema {
        type: 'any';
    }
    interface IUnknownSchema extends IAbstractSchema {
        type: 'unknown';
    }
}
