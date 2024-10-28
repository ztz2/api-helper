export declare type ServerOptions = {
    config: string;
    url?: string;
    outputPath?: string;
    target?: string;
    type?: string;
    authToken?: string;
};
declare class Service {
    static init: (options: ServerOptions) => void;
    private startDate;
    private parserPlugins;
    private apiHelperCLIRunningData;
    private selectedDocumentEtagTemp;
    private readonly isTestEnv;
    private configFilePath?;
    private configFileAbsolutePath?;
    private hasApiHelperCLIRunningData;
    private tempFolder;
    private locales;
    private constructorOptions;
    constructor(options?: ServerOptions, isTestEnv?: boolean);
    run(): Promise<void>;
    clear(): Promise<void>;
    private injectParserPlugins;
    private getParserPluginMap;
    private getApiHelperCLIRunningData;
    private setApiHelperCLIRunningData;
    private getConfigFile;
    private parserDocument;
    private chooseDocument;
    private genCode;
    private output;
}
export default Service;
