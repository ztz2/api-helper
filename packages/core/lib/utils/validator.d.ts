import { OpenAPI } from 'openapi-types';
import { JSONSchema4 } from 'json-schema';
export declare function validateOpenAPIDocument(document: OpenAPI.Document): boolean;
export declare function validateSchema(schema?: JSONSchema4): boolean;
