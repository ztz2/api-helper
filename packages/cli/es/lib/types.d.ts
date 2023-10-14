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
export declare type Config = {
    outputFilePath: string;
    requestFunctionFilePath: string;
    onlyTyping?: boolean;
    requiredRequestField?: boolean;
    requiredResponseField?: boolean;
    documentServers: Array<{
        url: string;
        type: 'swagger' | 'yapi' | string;
        dataKey?: string;
        auth?: {
            username: string;
            password: string;
        };
        authToken?: '';
        headers?: AxiosHeaders;
        events?: {
            onRenderInterfaceName?: typeof renderInterfaceName;
            onRenderRequestFunctionName?: typeof renderRequestFunctionName;
        };
    }>;
    parserPlugins?: AbstractParserPlugin[];
};
