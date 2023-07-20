import * as _ from 'lodash';
import { Message } from '@arco-design/web-vue';
import { APIHelper } from '@api-helper/core/es/lib/types';

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
) {
  let result: Array<string> = [];
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
    const codeList = exe.renderTemplate(params, config) ?? [];
    [].push.apply(result, codeList);

    if (formatCodeExtension) {
      const filterCodeList: string[] = [];
      const filterCodeListIdxMap: Record<string, number> = {};
      for (let i = 0; i < codeList.length; i++) {
        const itm = codeList[i];
        if (itm && itm?.trim() !== '') {
          filterCodeList.push(itm);
          filterCodeListIdxMap[itm.length - 1] = i;
        }
      }
      if (filterCodeList.length > 0) {
        const formattedCodeList = (await formatCode(codeList.map((c: string) => ({
          sourceCode: c,
          formatCodeExtension,
          prettierrcOptions: config?.prettierrcOptions,
        })))) as [];
        for (let i = 0; i < formattedCodeList.length; i++) {
          result[filterCodeListIdxMap[i]] = formattedCodeList[i] ?? '';
        }
      }
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
