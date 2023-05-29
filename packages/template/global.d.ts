declare type Recordable<T = any> = Record<string, T>;
declare module 'change-case' {
    /**
     * @example
     * changeCase.camelCase('test string') // => 'testString'
     */
    export const camelCase = (value: string) => string;
    /**
     * @example
     * changeCase.constantCase('test string') // => 'TEST_STRING'
     */
    export const constantCase = (value: string) => string
    /**
     * @example
     * changeCase.dotCase('test string') // => 'test.string'
     */
    export const dotCase = (value: string) => string
    /**
     * @example
     * changeCase.headerCase('test string') // => 'Test-String'
     */
    export const headerCase = (value: string) => string
    /**
     * @example
     * changeCase.lowerCase('TEST STRING') // => 'test string'
     */
    export const lowerCase = (value: string) => string
    /**
     * @example
     * changeCase.lowerCaseFirst('TEST') // => 'tEST'
     */
    export const lowerCaseFirst = (value: string) => string
    /**
     * @example
     * changeCase.paramCase('test string') // => 'test-string'
     */
    export const paramCase = (value: string) => string
    /**
     * @example
     * changeCase.pascalCase('test string') // => 'TestString'
     */
    export const pascalCase = (value: string) => string
    /**
     * @example
     * changeCase.pathCase('test string') // => 'test/string'
     */
    export const pathCase = (value: string) => string
    /**
     * @example
     * changeCase.sentenceCase('testString') // => 'Test string'
     */
    export const sentenceCase = (value: string) => string
    /**
     * @example
     * changeCase.snakeCase('test string') // => 'test_string'
     */
    export const snakeCase = (value: string) => string
    /**
     * @example
     * changeCase.swapCase('Test String') // => 'tEST sTRING'
     */
    export const swapCase = (value: string) => string
    /**
     * @example
     * changeCase.titleCase('a simple test') // => 'A Simple Test'
     */
    export const titleCase = (value: string) => string
    /**
     * @example
     * changeCase.upperCase('test string') // => 'TEST STRING'
     */
    export const upperCase = (value: string) => string
    /**
     * @example
     * changeCase.upperCaseFirst('test') // => 'Test'
     */
    export const upperCaseFirst: (value: string) => string
}
