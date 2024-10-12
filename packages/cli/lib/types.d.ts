import type { AxiosHeaders } from 'axios';
import type { APIHelper } from '@api-helper/core/lib/types';
import { renderInterfaceName } from '@api-helper/template/lib/render-interface';
import { renderRequestFunctionName } from '@api-helper/template/lib/render-request-function';
export declare type ParserPluginRunResult = Array<{
    documentServer: Config['documentServers'][number];
    parsedDocumentList: Array<APIHelper.Document>;
}>;
export declare type DocumentServers = Config['documentServers'];
export declare type ParserPluginOptions = Pick<Config, 'requiredRequestField' | 'requiredResponseField'>;
export declare abstract class AbstractParserPlugin {
    abstract name: string;
    abstract run(documentServers: DocumentServers, options?: ParserPluginOptions): Promise<ParserPluginRunResult>;
}
export interface CommonConfig {
    genHeaders?: boolean;
    genCookies?: boolean;
    genRequestContentType?: boolean;
    genResponseContentType?: boolean;
    requestFunctionFilePath: string;
    requiredRequestField?: boolean;
    requiredResponseField?: boolean;
    events?: {
        onRenderInterfaceName?: typeof renderInterfaceName;
        onRenderRequestFunctionName?: typeof renderRequestFunctionName;
    };
    type?: 'swagger' | 'yapi' | string;
    name?: string;
    dataKey?: string;
    auth?: {
        username: string;
        password: string;
    };
    authToken?: '';
    headers?: AxiosHeaders;
}
export interface ServerConfig extends CommonConfig {
    url: string;
}
export interface Config extends CommonConfig {
    group?: boolean;
    onlyTyping?: boolean;
    outputPath: string;
    outputFilePath?: string;
    target?: 'javascript' | 'typescript';
    documentServers: Array<ServerConfig>;
    parserPlugins?: AbstractParserPlugin[];
}
