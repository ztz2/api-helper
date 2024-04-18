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
    private readonly isTestEnv;
    private configFilePath?;
    private tempFolder;
    private constructorOptions;
    private locales;
    constructor(options?: ServerOptions, isTestEnv?: boolean);
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
