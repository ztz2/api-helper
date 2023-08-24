import { AbstractParserPlugin, ParserPluginOptions, ParserPluginRunResult } from '../../../lib/types';
import { Config } from '../../../lib';
declare type DocumentServers = Config['documentServers'];
export default class ParserYapiPlugin implements AbstractParserPlugin {
    name: string;
    run(documentServers: DocumentServers, options?: ParserPluginOptions): Promise<ParserPluginRunResult>;
}
export {};
