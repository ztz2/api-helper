import { Config, DocumentResourceList, DocumentParsedList } from './lib/types';
export type { Config, DocumentResourceList, DocumentParsedList };
export declare function defineConfig(config: Config | Config[]): Config[];
export declare function run(cmd: string, configFilePath?: string): Promise<void>;
