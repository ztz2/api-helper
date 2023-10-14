import { FormatCodeConfig } from '@api-helper/core/lib/interface';

import {
  Config,
  AbstractParserPlugin,
  ParserPluginRunResult,
} from '@/lib/types';
import Service from '@/lib/service/Service';
import formatCode from '@/lib/tools/format-code';

export type { RequestMethod } from './helpers';

export { checkIsInterface } from '@api-helper/template/lib/utils/util';

export function defineConfig(config: Config | Config[]): Config[] {
  return Array.isArray(config) ? config : [config];
}

export async function run(cmd: 'init' | null = null, configFilePath?: string, isTestEnv = false) {
  switch (cmd) {
    case 'init':
      Service.init();
      break;
    default:
      await new Service(configFilePath, isTestEnv).run();
  }
}

export {
  formatCode
};

export type {
  Config,
  FormatCodeConfig,
  AbstractParserPlugin,
  ParserPluginRunResult,
};
