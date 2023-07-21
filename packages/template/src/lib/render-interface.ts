import * as changeCase from 'change-case';
import { APIHelper } from '@api-helper/core/lib/types';

import { ChangeCase } from '@/lib/types';
import formatCode from '@/lib/utils/prettier';

export function renderInterface(
  schema: APIHelper.Schema | null,
  api: APIHelper.API,
  options: {
    paramType: 'request' | 'response';
    isExtraData?: boolean;
    hasComment?: boolean;
    onRenderInterfaceName?: typeof renderInterfaceName;
  }) {
  const { isExtraData, paramType, hasComment, } = options;
  const keyword = checkInterface(schema) ? 'export interface ' : 'export type ';
  const onRenderInterfaceName = options?.onRenderInterfaceName ? options.onRenderInterfaceName : renderInterfaceName;
  const commentCode = hasComment !== false ? renderInterfaceComment(schema, api, paramType, isExtraData) : '';
  let interfaceName = onRenderInterfaceName(schema, api, {
    isExtraData,
    paramType,
    changeCase
  });

  // 前置处理
  if (!schema || isEmptyObject(schema)) {
    // 不兼容的数据，不显示类型
    if (isExtraData) {
      return '';
    }
    return [
      commentCode,
      `${keyword} ${interfaceName} = any;`
    ].filter(Boolean).join('\n');
  }

  if (paramType === 'response') {
    schema.keyName = '';
  }

  let code = renderInterfaceDeepObject(schema);

  // 移除多余换行符
  code = code.replace(/\n\n/gim, '\n');

  // 开始组合
  interfaceName = keyword + interfaceName;
  if (schema.type !== 'object') {
    interfaceName += ' = ';
  }

  const formatted = formatCode(interfaceName + code, {
    parser: 'typescript'
  });
  return [
    commentCode,
    formatted
  ].filter(Boolean).join('\n');
}

export function renderInterfaceName (
  schema: APIHelper.Schema | null,
  api: APIHelper.API,
  options: {
    isExtraData?: boolean;
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
  }): string {
  const isInterface = checkInterface(schema);

  let name = isInterface ? 'I' : '';

  name += api.path;

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
 * @description ${[api.title, api.description].filter(Boolean).join('、')}【${isExtraData ? '不兼容的请求数据' : paramType === 'request' ? '请求数据' : paramType === 'response' ? '响应数据' : ''}类型定义】${api.docURL ? `\n * @doc ${api.docURL}\n` : ''}
 * @url [ ${api.method.toUpperCase()} ] ${api.path}
 */`;
  return commentText;
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
      schema.keyName ? `${schema.keyName}: ` : '',
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
        schema.keyName ? `${schema.keyName}: ` : '',
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
        schema.keyName ? `${schema.keyName}: ` : '',
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
        code = [bannerCommentText, `${schema.keyName}${!schema.rules.required ? '?' : ''}: ${typeCode}`].filter(Boolean).join('\n');
      } else {
        code = typeCode;
      }
  }

  return code;
}

export function checkInterface(schema: APIHelper.Schema | null) {
  let isType = !schema || schema?.type === 'array' || isEmptyObject(schema);
  let hasKey = schema?.params?.some((s) => s.keyName);
  return !isType && hasKey;
}

function isEmptyObject(schema: APIHelper.Schema) {
  return schema?.type === 'object' && schema?.params?.length === 0;
}
