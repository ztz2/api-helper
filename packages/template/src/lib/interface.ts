import { merge } from 'lodash';
import { checkType } from '@api-helper/core/lib/utils/util';
import { FormatCodeConfig } from '@api-helper/cli/lib/tools/format-code';
import PrettierrcOptions from '@api-helper/cli/lib/tools/prettierrc-options';

import {
  DEFAULT_SELECT_API_TPL_ID,
  DEFAULT_SELECT_MODEL_TPL_ID,
} from './constants';

export class DocumentConfig {
  id = '';
  // 项目名称
  title = '';
  // 文档地址
  url = 'http://localhost:3210/app/swagger/mock';
  // 文档类型，默认可以解析 swagger
  type = 'swagger';
  // 访问文档可能需要认证信息，http auth验证方式
  auth = {
    username: '',
    password: '',
  }
  // 访问文档可能需要认证信息，通过使用token访问
  authToken = '';
  // 获取数据的key，body[dataKey]
  dataKey = '';

  /** 以下属性是基于项目级别的通用配置项 - 开始 * */
  // 选择的文件模块ID
  exportFileId = '';
  // 文件模块导出路径
  exportFilePath = '';
  // API选择的模版ID
  apiTplId = DEFAULT_SELECT_API_TPL_ID;
  // 模型选择的模版ID
  modelTplId = DEFAULT_SELECT_MODEL_TPL_ID;
  // 头部代码
  headCodeText = 'import request from \'@/api/request\';\n';
  // 只生成API函数
  onlyApiFunc = false;
  // 输入框属性：maxlength
  maxlength = 128;
  // 输入框属性：placeholder
  placeholder = true;
  // 是否使用栅格布局
  grid = false;
  // Form表单项是否生成label
  generateLabel = false;
  // prettier配置对象
  prettierrcOptions = new PrettierrcOptions();
  /** 以下属性是基于项目级别的通用配置项 - 结束 * */
  constructor(id?: string | Partial<DocumentConfig>) {
    if (typeof id === 'string') {
      this.id = id;
    }
    if (Object.prototype.toString.call(id) === '[object Object]') {
      merge(this, id);
    }
  }
}

export class Template {
  // 模板名称
  label = '';
  // 唯一ID
  value = '';
  // 模板内容
  content = '';
  // 是否为内置模版
  builtIn = false;
  // 格式化代码的文件后缀名
  formatCodeExtension = '.ts' as FormatCodeConfig['formatCodeExtension'] | '';
  constructor(options?: Partial<Template>) {
    checkType(options, 'Object') && merge(this, options);
  }
}

export class FileDirectory {
  // 文件(夹)名称
  label = '';
  // 文件(夹)Id
  value = '';
  // 是否为文件夹
  isFolder = false;
  // 关联的apiId
  apiId = '';
  // 关联的模板id
  modelTplId = '';
  // 关联的模板内容下标
  modelTplIndex = 0;
  // 模版生成之后的内容
  templateContent = '';
  children = [] as Array<FileDirectory>;
  constructor(options?: Partial<FileDirectory>) {
    if (options && Object.prototype.toString.call(options) === '[object Object]') {
      for (const [k, v] of Object.entries(options)) {
        // @ts-ignore
        this[k] = v;
      }
    }
  }
}

export class ExportFile {
  // 模板名称
  label = '';
  // 唯一ID
  value = '';
  // 是否为内置模版
  builtIn = false;
  // 格式化代码的文件后缀名
  formatCodeExtension = '.ts' as FormatCodeConfig['formatCodeExtension'] | '';
  // 模板内容
  fileDirectory = [] as FileDirectory[];
  // 文件模块导出路径
  exportFilePath = '';
  constructor(options?: Partial<FileDirectory>) {
    if (options && Object.prototype.toString.call(options) === '[object Object]') {
      for (const [k, v] of Object.entries(options)) {
        // @ts-ignore
        this[k] = v;
      }
    }
  }
}

export function createTemplate(id?: string | Partial<DocumentConfig>) {
  return new DocumentConfig(id);
}

export function createProjectConfig(id?: string | Partial<DocumentConfig>) {
  return new DocumentConfig(id);
}

export function createFileDirectory(options?: Partial<FileDirectory>) {
  return new FileDirectory(options);
}

export function createExportFile(options?: Partial<FileDirectory>) {
  return new ExportFile(options);
}

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
