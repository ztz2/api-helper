import {
  Config,
  ParserPluginRunResult,
  AbstractParserPlugin,
} from './types';
import Service from '@/lib/service/Service';

export type { Config, ParserPluginRunResult, AbstractParserPlugin };

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
