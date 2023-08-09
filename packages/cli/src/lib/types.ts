import type { Options } from 'prettier';
import type { AxiosHeaders } from 'axios';
import type { APIHelper } from '@api-helper/core/lib/types';
import { renderInterfaceName } from '@api-helper/template/lib/render-interface';
import { renderRequestFunctionName } from '@api-helper/template/lib/render-request-function';

import { FormatCodeExtension } from '@/lib/constants';

export type ParserPluginRunResult = Array<{
  documentServer: Config['documentServers'][number];
  parsedDocumentList: Array<APIHelper.Document>;
}>

export type DocumentServers = Config['documentServers'];

export type ParserPluginOptions = Pick<Config, 'requiredRequestField'|'requiredResponseField'>;
export abstract class AbstractParserPlugin {
  abstract name: string;
  abstract run(documentServers: DocumentServers, options?: ParserPluginOptions): Promise<ParserPluginRunResult>;
}

export type Config = {
  // 代码生成后的输出路径，会根据后缀名(.js|.ts)判断是生成TS还是JS文件
  outputFilePath: string;
  // request请求工具函数文件路径。
  requestFunctionFilePath: string;
  // 是否只生成接口请求数据和返回数据的 TypeScript 类型。是，则请求文件和请求函数都不会生成。
  onlyTyping?: boolean;
  // 请求数据所有字段设置成必有属性，默认: false
  requiredRequestField?: boolean;
  // 响应数据所有字段设置成必有属性，默认：true
  requiredResponseField?: boolean;
  // 接口文档服务配置
  documentServers: Array<{
    // 文档地址【当下面的type为'swagger'类型时，可以读取本地文件，这里就是一个本地文件路径】
    url: string;
    // 文档类型，根据文档类型，调用内置的解析器，默认值: 'swagger'【内置yapi和swagger的解析，其他文档类型，添加parserPlugins自行实现文档解析】
    type: 'swagger' | 'yapi' | string;
    // 获取响应数据的key，body[dataKey]
    dataKey?: string;
    // 访问文档可能需要认证信息，http auth验证方式
    auth?: {
      username: string;
      password: string;
    };
    // 访问文档可能需要认证信息，通过使用token访问
    authToken?: '';
    // 自定义一些请求头
    headers?: AxiosHeaders,
    // 执行过程的回调
    events?: {
      // 当生成interface名称时候事件回调
      onRenderInterfaceName?: typeof renderInterfaceName;
      // 当生成API名称时候事件回调
      onRenderRequestFunctionName?: typeof renderRequestFunctionName;
    };
  }>,
  // 解析扩展插件
  parserPlugins?: AbstractParserPlugin[],
}

export type FormatCodeConfig = {
  sourceCode: string;
  formatCodeExtension: FormatCodeExtension;
  prettierOptions?: Partial<PrettierOptions>;
}

export class PrettierOptions implements Options{
  /**
   * 一行最多多少个字符（超过后会要求换行）
   * @default 80
   */
  printWidth = 140;
  /**
   * 指定每个缩进级别的空格数
   * @default 2
   */
  tabWidth = 2;
  /**
   * 使用制表符而不是空格缩进行
   * @default false
   */
  useTabs = false;

  /**
   * 在语句末尾需要加分号
   * @default true
   */
  semi = true;
  /**
   * 使用单引号
   * @default false
   */
  singleQuote = true;
  /**
   * 在 JSX 中使用单引号而不是双引号
   * @default false
   */
  jsxSingleQuote = false;
  /**
   * 是否在多行逗号分隔语法中，在最后一个元素后面加逗号
   * @default 'es5'
   */
  trailingComma = 'es5' as 'none' | 'es5' | 'all';
  /**
   * 在单行对象中，在左右保留一个空格
   * @default true
   */
  bracketSpacing = true;
  /**
   * Put the `>` of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being
   * alone on the next line (does not apply to self closing elements).
   * @default false
   */
  bracketSameLine = false;
  /**
   * Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
   * @default false
   * @deprecated use bracketSameLine instead
   */
  jsxBracketSameLine = false;
  /**
   * Format only a segment of a file.
   * @default 0
   */
  // rangeStart = 0;
  /**
   * Format only a segment of a file.
   * @default Infinity
   */
  // rangeEnd = Infinity;
  /**
   * Specify which parser to use.
   */
  // parser: LiteralUnion<BuiltInParserName> | CustomParser;
  /**
   * Specify the input filepath. This will be used to do parser inference.
   */
  // filepath: string;
  /**
   * 只格式化文件顶部有特殊注释（pragma）的文件
   * Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file.
   * This is very useful when gradually transitioning large, unformatted codebases to prettier.
   * @default false
   */
  requirePragma = false;
  /**
   * 对通过prettier格式化后的文件顶部添加@format特殊注释
   * Prettier can insert a special @format marker at the top of files specifying that
   * the file has been formatted with prettier. This works well when used in tandem with
   * the --require-pragma option. If there is already a docblock at the top of
   * the file then this option will add a newline to it with the @format marker.
   * @default false
   */
  insertPragma = false;
  /**
   * 对一行字符数超过printWidth的文本换行 （仅对markdown文件有效）
   * By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer.
   * In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out.
   * @default 'preserve'
   */
  proseWrap = 'preserve' as 'always' | 'never' | 'preserve';
  /**
   * 单参数箭头函数是否需要加小括号
   * @default 'always'
   */
  arrowParens = 'always' as 'avoid' | 'always';
  /**
   * Provide ability to support new languages to prettier.
   */
  // plugins: Array<string | Plugin>;
  /**
   * Specify plugin directory paths to search for plugins if not installed in the same `node_modules` where prettier is located.
   */
  // pluginSearchDirs: string[] | false;
  /**
   * 去除html元素中的多余空格
   * How to handle whitespaces in HTML.
   * @default 'css'
   */
  htmlWhitespaceSensitivity = 'css' as 'css' | 'strict' | 'ignore';
  /**
   * 换行符类型
   * @default 'lf'
   */
  endOfLine = 'lf' as 'auto' | 'lf' | 'crlf' | 'cr';
  /**
   * 在何时需要给对象属性名添加引号（相当于JSON对象写法）
   * @default 'as-needed'
   */
  quoteProps = 'as-needed' as 'as-needed' | 'consistent' | 'preserve';
  /**
   * vue文件中<script>和<style>标签内部代码是否缩进
   * @default false
   */
  vueIndentScriptAndStyle = false;
  /**
   * Control whether Prettier formats quoted code embedded in the file.
   * @default 'auto'
   */
  embeddedLanguageFormatting = 'auto' as 'auto' | 'off';
  /**
   * Enforce single attribute per line in HTML, Vue and JSX.
   * @default false
   */
  singleAttributePerLine = false;
}
