import * as _ from 'lodash';
import { APIHelper } from '@api-helper/core/es/lib/types';
import { Message } from '@arco-design/web-vue';

// @ts-ignore
import artTemplate from 'art-template/lib/template-web.js';
import { ITemplate } from '@/store/template/interface';
import { RenderAPIConfig as RAC, RenderModelConfig as RMC } from '@/views/generate/interface';

import * as uts from './render-template-utils';

artTemplate.defaults.escape = false;
artTemplate.defaults.minimize = false;
// 新增模板《》语法的界定符规则
artTemplate.defaults.rules[2] = {
  ...artTemplate.defaults.rules[1],
  test: /《([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*》/,
};

type RenderAPIConfigType = RAC;
type RenderModelConfigType = RMC;

export type RenderApiTemplateParams = {
  apiList: Array<APIHelper.API>
}

export type RenderModelTemplateParams = {
  api: APIHelper.API
  requestDataSchemaList: APIHelper.SchemaList
  responseDataSchemaList: APIHelper.SchemaList
}

export default function renderTemplate(
  templateMap: ITemplate,
  params: RenderApiTemplateParams | RenderModelTemplateParams,
  config?: RenderAPIConfigType | RenderModelConfigType,
) {
  let result: Array<string> = [];
  config = config ?? {} as any;
  try {
    const utils = uts;
    const lodash = _;
    const template = artTemplate;
    const exe = { renderTemplate: null };
    const RenderAPIConfig = RAC;
    const RenderModelConfig = RMC;

    eval(
      `${templateMap.content}\n`
      + 'exe.renderTemplate = typeof renderTemplate === \'function\' ? renderTemplate : null',
    );

    if (typeof exe.renderTemplate !== 'function') {
      throw Error('模板中缺少 renderTemplate 函数');
    }

    // @ts-ignore
    result = exe.renderTemplate(params, config) ?? [];
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
