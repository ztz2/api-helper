import { Config, ParserPluginRunResult, AbstractParserPlugin } from './types';
import formatCode from '../lib/tools/format-code';
import { FormatCodeConfig } from '../lib/tools/format-code';
export declare function defineConfig(config: Config | Config[]): Config[];
export declare function run(cmd?: 'init' | null, configFilePath?: string): Promise<void>;
export { formatCode };
export type { Config, FormatCodeConfig, AbstractParserPlugin, ParserPluginRunResult, };
