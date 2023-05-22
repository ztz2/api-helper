import {
  Config,
  DocumentResourceList,
  DocumentParsedList,
} from './types';
import Service from '@/lib/service/Service';

export type { Config, DocumentResourceList, DocumentParsedList };

export function defineConfig(config: Config | Config[]): Config[] {
  return Array.isArray(config) ? config : [config];
}

export async function run(cmd: 'init' | 'root', configFilePath?: string) {
  switch (cmd) {
    case 'init':
      await Service.init();
      break;
    default:
      await new Service(configFilePath).run();
  }
}
