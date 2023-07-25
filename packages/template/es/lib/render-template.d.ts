import { APIHelper } from '@api-helper/core/es/lib/types';
import { Template, DocumentConfig } from './interface';
export declare type RenderApiTemplateParams = {
    apiList: Array<APIHelper.API>;
};
export declare type RenderModelTemplateParams = {
    api: APIHelper.API;
    requestDataSchemaList: APIHelper.SchemaList;
    responseDataSchemaList: APIHelper.SchemaList;
};
export default function renderTemplate(templateMap: Template, params: RenderApiTemplateParams | RenderModelTemplateParams, config?: DocumentConfig): Promise<Array<APIHelper.TemplateContent>>;
