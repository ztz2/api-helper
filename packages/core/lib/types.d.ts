import { OpenAPI } from 'openapi-types';
export declare type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
export declare namespace APIHelper {
    type CategoryList = Array<Category>;
    type APIList = Array<API>;
    type SchemaList = Array<Schema>;
    type SchemaType = 'string' | 'number' | 'object' | 'array' | 'boolean' | 'null' | 'any' | 'unknown';
    interface Document {
        id: string;
        title: OpenAPI.Document['info']['title'];
        description: OpenAPI.Document['info']['description'];
        version: OpenAPI.Document['info']['version'];
        openapiVersion: string;
        basePath: string;
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
        summary: string;
        description: string;
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
    type Schema = IString | IEnum | INumber | IObject | IArray | IBoolean | INull | IAny | IUnknown;
    interface AbstractSchema {
        id: string;
        type: SchemaType | undefined | '';
        keyName?: string;
        title: string;
        description: string;
        rules: {
            required: boolean;
        };
        examples: string[];
        params: Schema[];
    }
    interface IString extends AbstractSchema {
        type: 'string';
        rules: {
            required: boolean;
            minLength?: number;
            maxLength?: number;
            pattern?: string;
        };
    }
    interface IEnum extends IString {
        type: 'string';
        enum: Array<string | number>;
    }
    interface INumber extends AbstractSchema {
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
    interface IObject extends AbstractSchema {
        type: 'object';
        params: Schema[];
    }
    interface IArray extends AbstractSchema {
        type: 'array';
        params: Schema[];
        rules: {
            required: boolean;
            minLength?: number;
            maxLength?: number;
            uniqueItems?: boolean;
        };
    }
    interface IBoolean extends AbstractSchema {
        type: 'boolean';
    }
    interface INull extends AbstractSchema {
        type: 'null';
    }
    interface IAny extends AbstractSchema {
        type: 'any';
    }
    interface IUnknown extends AbstractSchema {
        type: 'unknown';
    }
}
