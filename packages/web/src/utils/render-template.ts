import * as _ from 'lodash';
import { Message } from '@arco-design/web-vue';
import { APIHelper } from '@api-helper/core/es/lib/types';
import { getErrorMessage } from '@api-helper/core/lib/utils/util';

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
  let result: Array<APIHelper.TemplateContent> = [];
  config = config ?? {} as any;
  try {
    const lodash = _;
    const apih = _apih;
    // eslint-disable-next-line prefer-destructuring
    const artTemplate = apih.template.artTemplate;
    const exe = { renderTemplate: null };

    eval(
      `${templateMap.content}\n`
      + 'exe.renderTemplate = typeof renderTemplate === \'function\' ? renderTemplate : null',
    );

    if (typeof exe.renderTemplate !== 'function') {
      throw Error('模板中缺少 renderTemplate 函数');
    }

    const { formatCodeExtension } = templateMap; // @ts-ignore
    const codeList = (exe.renderTemplate(params, config) ?? []) as Array<APIHelper.TemplateContent>;
    result = [...codeList];
    if (formatCodeExtension) {
      const filterCodeList: string[] = [];
      const filterCodeListIdxMap: Record<string, number> = {};
      for (let i = 0; i < codeList.length; i++) {
        const { content } = codeList[i];
        if (content && content?.trim() !== '') {
          filterCodeList.push(content);
          filterCodeListIdxMap[filterCodeList.length - 1] = i;
        }
      }
      if (filterCodeList.length > 0) {
        const formattedCodeList = (await formatCode(filterCodeList.map((c) => ({
          sourceCode: c,
          formatCodeExtension,
          prettierrcOptions: config?.prettierrcOptions,
        })) as any)) as [];
        for (let i = 0; i < formattedCodeList.length; i++) {
          result[filterCodeListIdxMap[i]].content = formattedCodeList[i] ?? '';
        }
      }
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
