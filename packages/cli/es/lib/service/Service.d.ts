import './worker-thread';
declare class Service {
    static init: () => void;
    private startDate;
    private parserPlugins;
    private configFilePath?;
    private isTestEnv;
    private tempFolder;
    constructor(configFilePath?: string, isTestEnv?: boolean);
    run(): Promise<void>;
    clear(): Promise<void>;
    private injectParserPlugins;
    private getParserPluginMap;
    private getConfigFile;
    private parserDocument;
    private chooseDocument;
    private genCode;
    private output;
}
export default Service;
