import {
  Config,
  ParserPluginRunResult,
  AbstractParserPlugin,
} from './types';
import Service from '@/lib/service/Service';
import formatCode from '@/lib/tools/format-code';
import { FormatCodeConfig } from '@/lib/tools/format-code';

export function defineConfig(config: Config | Config[]): Config[] {
  return Array.isArray(config) ? config : [config];
}

export async function run(cmd: 'init' | null = null, configFilePath?: string) {
  switch (cmd) {
    case 'init':
      Service.init();
      break;
    default:
      await new Service(configFilePath).run();
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
