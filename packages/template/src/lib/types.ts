export interface ChangeCase {
  /**
   * @example
   * changeCase.camelCase('test string') // => 'testString'
   */
  camelCase: (value: string) => string
  /**
   * @example
   * changeCase.constantCase('test string') // => 'TEST_STRING'
   */
  constantCase: (value: string) => string
  /**
   * @example
   * changeCase.dotCase('test string') // => 'test.string'
   */
  dotCase: (value: string) => string
  /**
   * @example
   * changeCase.headerCase('test string') // => 'Test-String'
   */
  headerCase: (value: string) => string
  /**
   * @example
   * changeCase.lowerCase('TEST STRING') // => 'test string'
   */
  lowerCase: (value: string) => string
  /**
   * @example
   * changeCase.lowerCaseFirst('TEST') // => 'tEST'
   */
  lowerCaseFirst: (value: string) => string
  /**
   * @example
   * changeCase.paramCase('test string') // => 'test-string'
   */
  paramCase: (value: string) => string
  /**
   * @example
   * changeCase.pascalCase('test string') // => 'TestString'
   */
  pascalCase: (value: string) => string
  /**
   * @example
   * changeCase.pathCase('test string') // => 'test/string'
   */
  pathCase: (value: string) => string
  /**
   * @example
   * changeCase.sentenceCase('testString') // => 'Test string'
   */
  sentenceCase: (value: string) => string
  /**
   * @example
   * changeCase.snakeCase('test string') // => 'test_string'
   */
  snakeCase: (value: string) => string
  /**
   * @example
   * changeCase.swapCase('Test String') // => 'tEST sTRING'
   */
  swapCase: (value: string) => string
  /**
   * @example
   * changeCase.titleCase('a simple test') // => 'A Simple Test'
   */
  titleCase: (value: string) => string
  /**
   * @example
   * changeCase.upperCase('test string') // => 'TEST STRING'
   */
  upperCase: (value: string) => string
  /**
   * @example
   * changeCase.upperCaseFirst('test') // => 'Test'
   */
  upperCaseFirst: (value: string) => string
}
