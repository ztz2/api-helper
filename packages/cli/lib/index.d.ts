import { FormatCodeConfig } from '@api-helper/core/lib/interface';
import { Config, AbstractParserPlugin, ParserPluginRunResult } from '../lib/types';
import formatCode from '../lib/tools/format-code';
export type { RequestMethod } from './helpers';
export { checkIsInterface } from '@api-helper/template/lib/utils/util';
export declare function defineConfig(config: Config | Config[]): Config[];
export declare function run(cmd?: 'init' | null, configFilePath?: string, isTestEnv?: boolean): Promise<void>;
export { formatCode };
export type { Config, FormatCodeConfig, AbstractParserPlugin, ParserPluginRunResult, };
