import * as _ from 'lodash';
import { pascalCase } from 'change-case';
import { Message } from '@arco-design/web-vue';

import * as uts from './renderTemplateUtils'; // @ts-ignore
import artTemplate from 'art-template/lib/index.js';
import { ITemplate } from '@/store/template/interface';
import { RenderAPIConfig as RAC, RenderModelConfig, RenderModelConfig as RMC } from '@/views/generate/interface';
import { AhAPIField } from '@/core/interface';
import { getPureRequestFunctionName } from './renderTemplateUtils';
import { APIHelper } from '@api-helper/core';

artTemplate.defaults.escape = false;
artTemplate.defaults.minimize = false;
// 新增模板《》语法的界定符规则
artTemplate.defaults.rules[2] = {
  ...artTemplate.defaults.rules[1],
  test: /《([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*》/
};
artTemplate.defaults.imports.genGutter = function(gutterNum: number = 0, gap = '  ') {
  return Array.from({ length: gutterNum }).map(() => gap).join('');
}
artTemplate.defaults.imports.getTypeValue = function(fieldMap: AhAPIField, config: { codeType: string, split: false } = {} as any, className = '') {
  const type = fieldMap.type;
  const childrenType = fieldMap.childrenType;

  let text;
  switch (type) {
    case 'array':
      text = 'Array';
      if (childrenType === 'object') {
        if (!config.split || config.codeType === 'es6') {
          text += '<object>';
        } else {
          text += `<${pascalCase(className as string + ` ${fieldMap.field}`)}>`;
        }
        return text;
      }
      return text += `<${childrenType}>`;
    case 'object':
      text = 'object';
      if (!(!config.split || config.codeType === 'es6')) {
        text = `${pascalCase(className as string + ` ${fieldMap.field}`)}`;
      }
      return text;
    case 'boolean':
      return 'boolean';
    case 'integer':
    case 'number':
      return 'number';
    case 'string':
      return 'string';
    case 'null':
      return 'null';
    default:
      return type;
  }
}
artTemplate.defaults.imports.getPureRequestFunctionName = getPureRequestFunctionName;
artTemplate.defaults.imports.generateModel = generateModel;
artTemplate.defaults.imports.getDefaultValue = function(type: string) {
  switch (type) {
    case 'array':
      return '[]';
    case 'boolean':
      return false;
    case 'integer':
    case 'number':
      return 0;
    case 'string':
      return "''";
    case 'null':
      return null;
    default:
      return type;
  }
}

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
  config?: RenderAPIConfigType | RenderModelConfigType
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
      templateMap.content + '\n' +
      `exe.renderTemplate = typeof renderTemplate === 'function' ? renderTemplate : null`,
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

export function generateModel(params: {
  field?: AhAPIField,
  fieldList: Array<AhAPIField>,
  gutterNum: 0,
  renderType: 'map' | 'class' | 'interface'
  root: boolean;
  config: RenderModelConfig
}) {
  if (!params.gutterNum) {
    params.gutterNum = 0;
  }

  params.gutterNum++;

  if (params.fieldList.length === 0) {
    return '';
  }

  const TPL = `《if field && field.type === 'array'》《if renderType === 'interface'》Array<《else》[《/if》《/if》{
《each fieldList fieldMap fieldIndex》《if fieldMap.title || fieldMap.description || (fieldMap.type && renderType !== 'interface')》《gutterNum | genGutter》// 《if renderType !== 'interface' && fieldMap.type》{ 《fieldMap | getTypeValue config》 } 《/if》《if fieldMap.title》《fieldMap.title》《/if》《if fieldMap.description》（《fieldMap.description》）《/if》
《/if》《gutterNum | genGutter》《fieldMap.field》《if renderType === 'class' && root !== false》 = 《else》: 《/if》《if fieldMap.type === 'object' || (fieldMap.type === 'array' && fieldMap.childrenType === 'object')》《{field: fieldMap, fieldList: fieldMap.children, gutterNum, renderType, root: false, config } | generateModel》《else》《if renderType==='interface'》《fieldMap | getTypeValue config》《else》《fieldMap.type | getDefaultValue》《/if》《/if》《if (renderType === 'class' && root !== false) || renderType === 'interface'》;《else》,《/if》《if fieldIndex < fieldList.length - 1》
《/if》《/each》
《gutterNum - 1 | genGutter》}《if field && field.type === 'array'》《if renderType === 'interface'》>《else》]《/if》《/if》`;

  return artTemplate.render(TPL, params);
}
