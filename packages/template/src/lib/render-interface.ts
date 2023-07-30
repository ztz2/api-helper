import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import * as _changeCase from 'change-case';
import { ChangeCase } from '@/lib/types';
import { APIHelper } from '@api-helper/core/lib/types';
import { uuid } from '@api-helper/core/lib/utils/util';
import { createSchema } from '@api-helper/core/lib/helpers';

import { checkIsInterface, isEmptyObject, postCode } from '@/lib/utils/util';

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
      id: uuid(),
      params: schema,
    }) as APIHelper.Schema;
  }

  const isInterface = checkIsInterface(schema);
  const keyword = isInterface ? `${prefix} interface` : `${prefix}type`;
  const onRenderInterfaceName = options?.onRenderInterfaceName ? options.onRenderInterfaceName : renderInterfaceName;
  let commentCode = onlyBody ? '' : dropComment !== true ? renderInterfaceComment(schema, api, paramType, isExtraData) : '';
  let interfaceName = options?.name ? options.name : onRenderInterfaceName(schema, api, {
    isExtraData,
    paramType,
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
    code: renderInterfaceDeepObject(schema as APIHelper.Schema)
  }, { onlyBody });
}

export function renderInterfaceName (
  schema: APIHelper.Schema | null,
  api: APIHelper.API,
  options: {
    isExtraData?: boolean;
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
  }): string {
  const changeCase = options.changeCase ?? _changeCase;
  const isInterface = checkIsInterface(schema);

  let name = `${isInterface ? 'I' : ''}${api.path}`;

  if (options.paramType) {
    name += ` ${options.paramType}`;
  }
  if (!isInterface) {
    name += 'Type';
  }
  if (options.isExtraData) {
    name += 'ExtraData'
  }
  name += `By ${api.method}`;
  return changeCase.pascalCase(name);
}

function renderInterfaceComment(
  schema: APIHelper.Schema | null,
  api: APIHelper.API,
  paramType: 'request' | 'response',
  isExtraData = false
) {
  const commentText =
`/**
 * @description ${[api.title, api.description].filter(Boolean).join('、')}【${isExtraData ? '不兼容的请求数据' : paramType === 'request' ? '请求数据' : paramType === 'response' ? '响应数据' : ''}类型定义】${api.docURL ? `\n * @doc ${api.docURL}` : ''}
 * @url [ ${api.method.toUpperCase()} ] ${api.path}
 */`;
  return commentText;
}

function requiredChar(schema: APIHelper.Schema) {
  return !schema?.rules?.required ? '?' : '';
}

function renderInterfaceDeepObject(
  schema: APIHelper.Schema,
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
      schema.keyName ? `${schema.keyName}${requiredChar(schema)}: ` : '',
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
        schema.keyName ? `${schema.keyName}${requiredChar(schema)}: ` : '',
        '{',
          // 类型遍历
          schema.params.map((item) => renderInterfaceDeepObject(item, memo)).join('\n'),
        '}',
      ].filter(Boolean).join('\n');
      break;
    // 数据类型
    case 'array':
      let child = schema.params.map((item) => renderInterfaceDeepObject(item, memo)).join(' | ');
      child = child || 'any';
      code = [
        bannerCommentText,
        schema.keyName ? `${schema.keyName}${requiredChar(schema)}: ` : '',
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
        code = [bannerCommentText, `${schema.keyName}${requiredChar(schema)}: ${typeCode}`].filter(Boolean).join('\n');
      } else {
        code = typeCode;
      }
  }

  return code;
}
