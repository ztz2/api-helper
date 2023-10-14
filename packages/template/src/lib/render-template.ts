import * as _ from 'lodash';
import {
  PrettierOptions,
  FormatCodeConfig,
} from '@api-helper/core/lib/interface';
import {
  checkType,
  getErrorMessage,
} from '@api-helper/core/lib/utils/util';
import { APIHelper } from '@api-helper/core/es/lib/types';

import _apih from './render-template-apih';
import formatCodeServer from './utils/format-code-server';

export type RenderApiTemplateParams = {
  apiList: Array<APIHelper.API>
}

export type RenderModelTemplateParams = {
  api: APIHelper.API
  requestDataSchemaList: APIHelper.SchemaList
  responseDataSchemaList: APIHelper.SchemaList
}

type Template = {
  // 模板名称
  title: string;
  // 唯一ID
  id: string;
  // 模板内容
  content: string;
  // 是否为内置模版
  builtIn: boolean;
  // 格式化代码的文件后缀名
  formatCodeExtension: FormatCodeConfig['formatCodeExtension'] | '';
}
type DocumentConfig = {
  id: string;
  // 项目名称
  title: string;
  // 文档地址
  url: string;
  // 文档类型，默认可以解析 swagger
  type: string;
  // 访问文档可能需要认证信息，http auth验证方式
  auth?: {
    username?: string;
    password?: string;
  }
  // 访问文档可能需要认证信息，通过使用token访问
  authToken: string;
  // 获取数据的key，body[dataKey]
  dataKey: string;

  /** 以下属性是基于项目级别的通用配置项 - 开始 * */
  // 选择的文件模块ID
  fileDirectoryId: string;
  // 文件模块导出路径
  fileDirectoryExportPath: string;
  // API选择的模版ID
  apiTplId: string;
  // 模型选择的模版ID
  modelTplId: string;
  // 头部代码
  headCodeText: string;
  // 只生成API函数
  onlyApiFunc: boolean;
  // 输入框属性：maxlength
  maxlength: number;
  // 输入框属性：placeholder
  placeholder: number;
  // 是否使用栅格布局
  grid: number;
  // Form表单项是否生成label
  generateLabel: number;
  // prettier配置对象
  prettierOptions: PrettierOptions;
}

export default async (
  // 模板对象
  templateMap: Template,
  // 渲染数据
  params: RenderApiTemplateParams | RenderModelTemplateParams,
  // 渲染配置，参考：
  documentConfig?: DocumentConfig,
  // axios配置
  formatCodeFunc?: Function,
): Promise<Array<APIHelper.TemplateContent>> => {
  templateMap = _.cloneDeep(templateMap);
  params = _.cloneDeep(params);
  documentConfig = _.cloneDeep(documentConfig ?? {}) as DocumentConfig;
  formatCodeFunc = formatCodeFunc ?? formatCodeServer;

  let result: Array<APIHelper.TemplateContent> = [];
  const { formatCodeExtension } = templateMap;

  try {
    const lodash = _;
    const apih = _apih;
    // 兼容旧版 config 参数
    const config = documentConfig;
    const artTemplate = apih.template.artTemplate;
    const exe = { renderTemplate: null };

    eval(
      `${templateMap.content}\n`
      + 'exe.renderTemplate = renderTemplate',
    );

    if (typeof exe.renderTemplate !== 'function') {
      // 模板中缺少 renderTemplate 函数
      result = [{
        title: '异常模板',
        content: `// 模板渲染错误：模板中缺少 renderTemplate 函数
`,
      }];
      return result;
    }

    // @ts-ignore
    const codeList = exe.renderTemplate(params, config) as Array<string | APIHelper.TemplateContent>;
    // 模版返回值异常
    if (!Array.isArray(codeList)) {
      result = [{
        title: '异常模板',
        content: `// 模板渲染错误：renderTemplate 函数返回值错误，正确的返回值类型应该是：Array<APIHelper.TemplateContent>
// 数组里面每一项都是一个模板。例子数据：[{ title: '模版标题', content: '模版内容' }];
// APIHelper.TemplateContent 类型说明文档: https://github.com/ztz2/api-helper/blob/main/packages/core/lib/types.d.ts
`,
      }];
      return result;
    }
    // 兼容旧版模板的返回值
    for (let i = 0; i < codeList.length; i++) {
      const itm = codeList[i];
      result.push(checkType(itm, 'Object') ? (itm as APIHelper.TemplateContent) : {
        title: `模版${i + 1}`,
        content: itm as string,
      });
    }
    if (!formatCodeExtension) {
      return result;
    }
    // 调用prettier美化代码
    const filterCodeList: string[] = [];
    const filterCodeListIdxMap: Record<string, number> = {};
    for (let i = 0; i < result.length; i++) {
      const { content } = result[i];
      if (content && content?.trim() !== '') {
        filterCodeList.push(content);
        filterCodeListIdxMap[filterCodeList.length - 1] = i;
      }
    }
    if (filterCodeList.length === 0) {
      return result;
    }
    // 美化代码
    const formattedCodeList = (await formatCodeFunc(filterCodeList.map((c) => ({
      sourceCode: c,
      formatCodeExtension,
      prettierOptions: documentConfig?.prettierOptions,
    })))) as [];
    for (let i = 0; i < formattedCodeList.length; i++) {
      result[filterCodeListIdxMap[i]].content = formattedCodeList[i] ?? '';
    }
  } catch (e: any) {
    const errorText = getErrorMessage(e);
    result = [{
      title: '异常模版',
      content: errorText,
    }];
  }
  return result;
}
