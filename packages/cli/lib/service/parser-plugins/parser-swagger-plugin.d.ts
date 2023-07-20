import { DocumentServers, ParserPluginOptions, AbstractParserPlugin, ParserPluginRunResult } from '../../../lib/types';
export default class ParserSwaggerPlugin implements AbstractParserPlugin {
    name: string;
    run(documentServers: DocumentServers, options?: ParserPluginOptions): Promise<ParserPluginRunResult>;
}
