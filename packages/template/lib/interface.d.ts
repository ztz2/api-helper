import PrettierrcOptions from '@api-helper/cli/lib/tools/prettierrc-options';
export declare class DocumentConfig {
    id: string;
    title: string;
    url: string;
    type: string;
    auth: {
        username: string;
        password: string;
    };
    authToken: string;
    dataKey: string;
    /** 以下属性是基于项目级别的通用配置项 - 开始 * */
    exportFileId: string;
    exportFilePath: string;
    apiTplId: string;
    modelTplId: string;
    headCodeText: string;
    onlyApiFunc: boolean;
    maxlength: number;
    placeholder: boolean;
    grid: boolean;
    generateLabel: boolean;
    prettierrcOptions: PrettierrcOptions;
    /** 以下属性是基于项目级别的通用配置项 - 结束 * */
    constructor(id?: string | Partial<DocumentConfig>);
}
export declare class Template {
    label: string;
    value: string;
    content: string;
    builtIn: boolean;
    formatCodeExtension: "" | ".ts" | ".tsx" | ".js" | ".jsx" | ".vue" | ".html" | ".scss" | ".less" | ".css" | ".json" | ".java";
    constructor(options?: Partial<Template>);
}
export declare class FileDirectory {
    label: string;
    value: string;
    isFolder: boolean;
    apiId: string;
    modelTplId: string;
    modelTplIndex: number;
    templateContent: string;
    children: FileDirectory[];
    constructor(options?: Partial<FileDirectory>);
}
export declare class ExportFile {
    label: string;
    value: string;
    builtIn: boolean;
    formatCodeExtension: "" | ".ts" | ".tsx" | ".js" | ".jsx" | ".vue" | ".html" | ".scss" | ".less" | ".css" | ".json" | ".java";
    fileDirectory: FileDirectory[];
    exportFilePath: string;
    constructor(options?: Partial<FileDirectory>);
}
export declare function createTemplate(id?: string | Partial<DocumentConfig>): DocumentConfig;
export declare function createProjectConfig(id?: string | Partial<DocumentConfig>): DocumentConfig;
export declare function createFileDirectory(options?: Partial<FileDirectory>): FileDirectory;
export declare function createExportFile(options?: Partial<FileDirectory>): ExportFile;
export interface ChangeCase {
    /**
     * @example
     * changeCase.camelCase('test string') // => 'testString'
     */
    camelCase: (value: string) => string;
    /**
     * @example
     * changeCase.constantCase('test string') // => 'TEST_STRING'
     */
    constantCase: (value: string) => string;
    /**
     * @example
     * changeCase.dotCase('test string') // => 'test.string'
     */
    dotCase: (value: string) => string;
    /**
     * @example
     * changeCase.headerCase('test string') // => 'Test-String'
     */
    headerCase: (value: string) => string;
    /**
     * @example
     * changeCase.lowerCase('TEST STRING') // => 'test string'
     */
    lowerCase: (value: string) => string;
    /**
     * @example
     * changeCase.lowerCaseFirst('TEST') // => 'tEST'
     */
    lowerCaseFirst: (value: string) => string;
    /**
     * @example
     * changeCase.paramCase('test string') // => 'test-string'
     */
    paramCase: (value: string) => string;
    /**
     * @example
     * changeCase.pascalCase('test string') // => 'TestString'
     */
    pascalCase: (value: string) => string;
    /**
     * @example
     * changeCase.pathCase('test string') // => 'test/string'
     */
    pathCase: (value: string) => string;
    /**
     * @example
     * changeCase.sentenceCase('testString') // => 'Test string'
     */
    sentenceCase: (value: string) => string;
    /**
     * @example
     * changeCase.snakeCase('test string') // => 'test_string'
     */
    snakeCase: (value: string) => string;
    /**
     * @example
     * changeCase.swapCase('Test String') // => 'tEST sTRING'
     */
    swapCase: (value: string) => string;
    /**
     * @example
     * changeCase.titleCase('a simple test') // => 'A Simple Test'
     */
    titleCase: (value: string) => string;
    /**
     * @example
     * changeCase.upperCase('test string') // => 'TEST STRING'
     */
    upperCase: (value: string) => string;
    /**
     * @example
     * changeCase.upperCaseFirst('test') // => 'Test'
     */
    upperCaseFirst: (value: string) => string;
}
