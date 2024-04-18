import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import * as _changeCase from 'change-case';
import { ChangeCase } from '@/lib/types';
import { APIHelper } from '@api-helper/core/lib/types';
import { createSchema } from '@api-helper/core/lib/helpers';
import { randomChar, processKeyName } from '@api-helper/core/lib/utils/util';

import {
  postCode,
  isEmptyObject,
  checkIsInterface,
} from '@/lib/utils/util';
import artTemplate from '@/lib/art-template';
import { precessArraySchema } from '@/lib/render-object';

export function renderInterface(
  schema: APIHelper.Schema | Array<APIHelper.Schema> | null,
  api: APIHelper.API,
  options?: {
    // 请求数据还是响应数据
    paramType?: 'request' | 'response';
    // 前缀
    prefix?: string,
    // interface 名称
    name?: string;
    // 删除interface注释
    dropComment?: boolean;
    // 只生成类型部分
    onlyBody?: boolean;
    // 生成接口名称回调
    onRenderInterfaceName?: typeof renderInterfaceName;
    // 是否是额外数据
    isExtraData?: boolean;
    // 当数据为空的body代码
    emptyBodyCode?: string;
  }) {
  options = merge({
    onlyBody: false,
    prefix: 'export ',
    paramType: 'request',
    emptyBodyCode: 'any;',
  }, options);

  schema = cloneDeep(schema);
  schema = precessArraySchema(schema);

  const sourceSchema = schema;

  const {
    prefix,
    onlyBody,
    dropComment,
    isExtraData,
    emptyBodyCode,
    paramType = 'request',
  } = options;

  if (Array.isArray(schema)) {
    schema = createSchema('object', {
      id: randomChar(),
      params: schema,
    }) as APIHelper.Schema;
  }

  const isInterface = checkIsInterface(schema);
  const keyword = isInterface ? `${prefix} interface` : `${prefix}type`;
  const onRenderInterfaceName = options?.onRenderInterfaceName ? options.onRenderInterfaceName : renderInterfaceName;
  let commentCode = onlyBody ? '' : dropComment !== true ? renderInterfaceComment(api, paramType, isExtraData) : '';
  let interfaceName = options?.name ? options.name : onRenderInterfaceName(api, {
    schema,
    paramType,
    isExtraData,
    changeCase: _changeCase,
  });

  /**
   * output ->  export interface interfaceName
   *            export type Type =
   */
  let ki = [`${keyword} ${interfaceName} ${!isInterface ? '=' : ''}`].filter(Boolean).join('\n');

  // 前置处理，渲染数据为空，直接返回 export type xxx = any;
  if ((Array.isArray(sourceSchema) && sourceSchema.length === 0) ||
    !sourceSchema ||
    isEmptyObject(sourceSchema as APIHelper.Schema)) {
    // 不兼容的数据，不显示类型
    if (isExtraData) {
      return '';
    }
    return postCode({
      ki,
      commentCode,
      code: emptyBodyCode
    }, { onlyBody });
  }

  if (paramType === 'response') {
    (schema as APIHelper.Schema).keyName = '';
  }

  return postCode({
    ki,
    commentCode,
    code: renderInterfaceDeepObject(schema as APIHelper.Schema, true)
  }, { onlyBody });
}

export function renderInterfaceName (
  api: APIHelper.API,
  options: {
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
    isExtraData?: boolean;
    // 兼容2.2版本
    schema?: APIHelper.Schema | null,
  }): string {
  let name = api.path;
  if (options.paramType) {
    name += ` ${options.paramType}`;
  }
  if (options.isExtraData) {
    name += 'ExtraData'
  }
  name += `By ${api.method}`;
  return options.changeCase.pascalCase(name);
}

function renderInterfaceComment(
  api: APIHelper.API,
  paramType: 'request' | 'response',
  isExtraData = false,
  updateTime = '',
) {

  let summary =  isExtraData ? 'Incompatible request data' : paramType === 'request' ? 'Request data' : paramType === 'response' ? 'Response data' : '';

  if (summary) {
    summary += ' types';
  }

  return artTemplate.render(
    `/**
 * @description 《description》《if summary》
 * @summary 《summary》《/if》《if docURL》
 * @doc 《docURL》《/if》
 * @url 《url》《if updateTime》
 * @update 《updateTime》《/if》
 */`, {
      description: `${[api.title, api.description].filter(Boolean).join('、')}`,
      docURL: api.docURL,
      url: `[ ${api.method.toUpperCase()} ] ${api.path}`,
      summary,
      updateTime,
    })
}

function requiredChar(schema: APIHelper.Schema) {
  return !schema?.rules?.required ? '?' : '';
}

function renderInterfaceDeepObject(
  schema: APIHelper.Schema,
  isRoot = false,
  memo = new Map<APIHelper.Schema, string>()
): string {
  if (!schema) {
    return '';
  }
  if (memo.has(schema)) {
    return memo.get(schema) as string;
  }
  memo.set(schema, 'null');

  const { type } = schema;
  const bannerComment = [];
  if (schema.label) {
    bannerComment.push(schema.label);
  }
  const bannerCommentText = bannerComment.length > 0 ? `\n// ${  bannerComment.join('')}` : '';

  if (isEmptyObject(schema)) {
    return [
      bannerCommentText,
      schema.keyName ? `${processKeyName(schema.keyName)}${requiredChar(schema)}: ` : '',
      '{',
        '[propName: string]: any',
      '}',
    ].filter(Boolean).join('\n');
  }

  let code = '';
  switch (type) {
    // 对象类型
    case 'object':
      code = [
        bannerCommentText,
        schema.keyName ? `${processKeyName(schema.keyName)}${requiredChar(schema)}: ` : '',
        '{',
          // 类型遍历
          schema.params.filter((item) => !(item.keyName?.trim() === '' && item.type === 'object')).map((item) => renderInterfaceDeepObject(item, false, memo)).join('\n'),
        '}',
      ].filter(Boolean).join('\n');
      break;
    // 数据类型
    case 'array':
      let child = schema.params.map((item) => renderInterfaceDeepObject(item, false, memo)).join(' | ');
      child = child || 'any';
      code = [
        bannerCommentText,
        schema.keyName ? `${processKeyName(schema.keyName)}${requiredChar(schema)}: ` : '',
        // 类型遍历
        `Array<${child}>`,
      ].filter(Boolean).join('\n');
      break;
    // 其他非引用类型
    default:
      // eslint-disable-next-line no-case-declarations
      let typeCode: string = type;
      if (type === 'string' && 'enum' in schema && schema.enum.length) {
        typeCode = schema.enum.map((item) => `'${item}'`).join(' | ');
      }
      if (schema.keyName) {
        code = [bannerCommentText, `${processKeyName(schema.keyName)}${requiredChar(schema)}: ${typeCode}`].filter(Boolean).join('\n');
      } else {
        code = typeCode;
      }
  }

  if (isRoot && schema.type !== 'object' && schema.keyName) {
    code = `{ \n ${code} \n } \n`;
  }

  return code;
}
