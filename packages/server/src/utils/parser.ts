import { OpenAPI } from 'openapi-types';
import SwaggerParser from '@apidevtools/swagger-parser';

export interface IAPIDocument {

}

export async function parserSwaggerProject(data: OpenAPI.Document) {
  const api = await new SwaggerParser().dereference(data);
}
