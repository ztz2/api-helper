import { CLI } from './cli';
import {
  Config,
  DocumentResourceList,
  DocumentParsedList,
} from './types';

export type { Config, DocumentResourceList, DocumentParsedList };

export function defineConfig(config: Config | Config[]): Config[] {
  return Array.isArray(config) ? config : [config];
}

export async function run(cmd: 'init' | 'help' | null | undefined, configFilePath?: string) {
  switch (cmd) {
    case 'init':
      await CLI.init();
      break;
    case 'help':
      await CLI.help();
      break;
    default:
      await new CLI(configFilePath).run();
  }
}
