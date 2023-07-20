import { Config } from '../../../lib';
import { AbstractParserPlugin, ParserPluginOptions, ParserPluginRunResult } from '../../../lib/types';
declare type DocumentServers = Config['documentServers'];
export default class ParserYapiPlugin implements AbstractParserPlugin {
    name: string;
    run(documentServers: DocumentServers, options?: ParserPluginOptions): Promise<ParserPluginRunResult>;
}
export {};
