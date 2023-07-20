declare class Service {
    static init: () => void;
    private parserPlugins;
    private configFilePath?;
    constructor(configFilePath?: string);
    run(): Promise<void>;
    private injectParserPlugins;
    private getParserPluginMap;
    private getConfigFile;
    private parserDocument;
    private chooseDocument;
    private genCode;
    private output;
}
export default Service;
