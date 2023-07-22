import * as _ from 'lodash';
import { Message } from '@arco-design/web-vue';
import { APIHelper } from '@api-helper/core/es/lib/types';
import { checkType, getErrorMessage } from '@api-helper/core/lib/utils/util';

import _apih from './render-template-apih';
import formatCode from '@/utils/format-code';
import { Project } from '@/store/project/interface';
import { Template } from '@/store/template/interface';

export type RenderApiTemplateParams = {
  apiList: Array<APIHelper.API>
}

export type RenderModelTemplateParams = {
  api: APIHelper.API
  requestDataSchemaList: APIHelper.SchemaList
  responseDataSchemaList: APIHelper.SchemaList
}

export default async function _renderTemplate(
  // 模板对象
  templateMap: Template,
  // 渲染数据
  params: RenderApiTemplateParams | RenderModelTemplateParams,
  // 渲染配置
  config?: Project,
): Promise<Array<APIHelper.TemplateContent>> {
  templateMap = _.cloneDeep(templateMap);
  params = _.cloneDeep(params);
  config = _.cloneDeep(config ?? {} as Project);

  let result: Array<APIHelper.TemplateContent> = [];
  const { formatCodeExtension } = templateMap;

  try {
    const lodash = _;
    const apih = _apih;
    // eslint-disable-next-line prefer-destructuring
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
    const formattedCodeList = (await formatCode(filterCodeList.map((c) => ({
      sourceCode: c,
      formatCodeExtension,
      prettierrcOptions: config?.prettierrcOptions,
    })) as any)) as [];
    for (let i = 0; i < formattedCodeList.length; i++) {
      result[filterCodeListIdxMap[i]].content = formattedCodeList[i] ?? '';
    }
  } catch (e: any) {
    const errorText = getErrorMessage(e);
    result = [{
      title: '异常模版',
      content: errorText,
    }];
    Message.error(errorText);
  }
  return result;
}
