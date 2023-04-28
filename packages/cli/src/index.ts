// #!/usr/bin/env node
import yargs from 'yargs';
import { resolve } from 'path';

import { CLI } from './lib/cli';
import {
  Config,
  DocumentResourceList,
  DocumentParsedList,
} from './lib/types';

export type { Config, DocumentResourceList, DocumentParsedList };

export function defineConfig(config: Config | Config[]) {
  return Array.isArray(config) ? config : [config];
}

export async function run(cmd: string, configFilePath?: string) {
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

if (require.main === module) {
  const argv = yargs(process.argv).alias('c', 'config').argv;
  const configFilePath = argv.config ? resolve(process.cwd(), argv.config as string) : undefined;
  run(argv._[2] as string, configFilePath);
}
