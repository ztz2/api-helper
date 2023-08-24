import { APIHelper } from '@api-helper/core/es/lib/types';
import { PrettierOptions, FormatCodeConfig } from '@api-helper/cli/lib/types';
export declare type RenderApiTemplateParams = {
    apiList: Array<APIHelper.API>;
};
export declare type RenderModelTemplateParams = {
    api: APIHelper.API;
    requestDataSchemaList: APIHelper.SchemaList;
    responseDataSchemaList: APIHelper.SchemaList;
};
declare type Template = {
    title: string;
    id: string;
    content: string;
    builtIn: boolean;
    formatCodeExtension: FormatCodeConfig['formatCodeExtension'] | '';
};
declare type DocumentConfig = {
    id: string;
    title: string;
    url: string;
    type: string;
    auth?: {
        username?: string;
        password?: string;
    };
    authToken: string;
    dataKey: string;
    /** 以下属性是基于项目级别的通用配置项 - 开始 * */
    fileDirectoryId: string;
    fileDirectoryExportPath: string;
    apiTplId: string;
    modelTplId: string;
    headCodeText: string;
    onlyApiFunc: boolean;
    maxlength: number;
    placeholder: number;
    grid: number;
    generateLabel: number;
    prettierOptions: PrettierOptions;
};
declare const _default: (templateMap: Template, params: RenderApiTemplateParams | RenderModelTemplateParams, documentConfig?: DocumentConfig | undefined, formatCodeFunc?: Function | undefined) => Promise<Array<APIHelper.TemplateContent>>;
export default _default;
