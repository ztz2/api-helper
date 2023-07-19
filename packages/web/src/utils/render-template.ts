import * as _ from 'lodash';
import { Message } from '@arco-design/web-vue';
import { APIHelper } from '@api-helper/core/es/lib/types';

// @ts-ignore
import artTemplate from 'art-template/lib/template-web.js';
import { Template } from '@/store/template/interface';

import formatCode from '@/utils/format-code';
import * as uts from './render-template-utils';
import { Project } from '@/store/project/interface';

artTemplate.defaults.escape = false;
artTemplate.defaults.minimize = false;
// 新增模板《》语法的界定符规则
artTemplate.defaults.rules[2] = {
  ...artTemplate.defaults.rules[1],
  test: /《([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*》/,
};

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
) {
  console.log(2);
  let result: Array<string> = [];
  config = config ?? {} as any;
  try {
    const utils = uts;
    const lodash = _;
    const template = artTemplate;
    const exe = { renderTemplate: null };

    eval(
      `${templateMap.content}\n`
      + 'exe.renderTemplate = typeof renderTemplate === \'function\' ? renderTemplate : null',
    );

    if (typeof exe.renderTemplate !== 'function') {
      throw Error('模板中缺少 renderTemplate 函数');
    }

    const { formatCodeExtension } = templateMap; // @ts-ignore
    const codeList = exe.renderTemplate(params, config) ?? [];
    if (formatCodeExtension) {
      const formattedCodeList = (await formatCode(codeList.map((c: string) => ({
        sourceCode: c,
        formatCodeExtension,
      })))) as [];
      [].push.apply(result, formattedCodeList);
    } else {
      [].push.apply(result, codeList);
    }
  } catch (e: any) {
    if (typeof e === 'string') {
      result = [e];
      Message.error(e);
    } else if (typeof e?.message === 'string') {
      result = [e.message];
      Message.error(e.message);
    }
  }
  return result;
}
