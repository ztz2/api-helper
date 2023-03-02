import { format } from '../utils';
import { APIHelper, ChangeCase } from '../types';

const changeCase = require('change-case');

export interface GenerateInterfaceName {
  (schema: APIHelper.Schema | null, api: APIHelper.API, options: {
    isExtraData?: boolean;
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
  }): string
}
export const generateInterfaceName: GenerateInterfaceName = function (schema, api, options): string {
  let name = schema?.type === 'object' ? 'I' : '';
  name += api.path;
  if (options.paramType) {
    name += ` ${options.paramType}`;
  }
  if (!schema || schema?.type === 'array') {
    name += 'Type';
  }
  if (options.isExtraData) {
    name += 'ExtraData'
  }
  name += `By ${api.method}`;
  return changeCase.pascalCase(name);
}

function generateInterfaceComment(schema: APIHelper.Schema | null, api: APIHelper.API, paramType: 'request' | 'response', isExtraData = false) {
  const commentText =
`/**
 * @描述 【${isExtraData ? '不兼容的请求数据' : paramType === 'request' ? '请求数据' : paramType === 'response' ? '响应数据' : ''}${schema?.type === 'object' ? '接口定义' : '类型定义'}】${[api.summary, api.description].filter(Boolean).join('、')}】
 * @请求头 ${api.method.toUpperCase()} ${api.path}
 */`;
  return commentText;
}

interface GenerateInterface {
  (schema: APIHelper.Schema | null, api: APIHelper.API, options: {
    isExtraData?: boolean;
    paramType: 'request' | 'response';
    allowGenerateInterfaceComment?: boolean;
    onGenerateInterfaceName?: GenerateInterfaceName;
  }): string;
}
export const generateInterface: GenerateInterface = function (schema, api, options) {
  const { isExtraData, paramType, allowGenerateInterfaceComment, } = options;
  const keyword = (schema && schema.type === 'object') ? 'export interface ' : 'export type ';
  const onGenerateInterfaceName = options?.onGenerateInterfaceName ? options.onGenerateInterfaceName : generateInterfaceName;
  const commentCode = allowGenerateInterfaceComment !== false ? generateInterfaceComment(schema, api, paramType, isExtraData) : ''
  let interfaceName = onGenerateInterfaceName(schema, api, {
    isExtraData,
    paramType,
    changeCase
  });

  if (!schema) {
    // 不兼容的数据，不显示类型
    if (isExtraData) {
      return '';
    }
    return [
      commentCode,
      `${keyword} ${interfaceName} = any;`
    ].filter(Boolean).join('\n');
  }

  let code = generate(schema);

  // 移除多余换行符
  code = code.replace(/\n\n/gim, '\n');

  const emptyInterfaceName = !interfaceName;
  if (emptyInterfaceName) {
    interfaceName = 'DEFAULT_INTERFACE_NAME';
  }
  interfaceName = keyword + interfaceName;
  if (schema.type !== 'object') {
    interfaceName += ' = ';
  }

  const formatted = format(interfaceName + code, {
    parser: 'typescript'
  });
  return [
    commentCode,
    emptyInterfaceName ? formatted.replace(interfaceName, '') : formatted
  ].filter(Boolean).join('\n');
}

function generate(
  schema: APIHelper.Schema,
  memo = new Map<APIHelper.Schema, string>(),
  isRoot = false
): string {
  if (!schema) {
    return '';
  }
  if (memo.has(schema)) {
    return memo.get(schema) as string;
  }
  const { type } = schema;
  const bannerComment = [];
  if (schema.description) {
    bannerComment.push(schema.description);
  }
  if (schema.title) {
    let text = schema.title;
    if (bannerComment.length > 0) {
      text = `（${text}）`;
    }
    bannerComment.push(text);
  }
  const bannerCommentText = bannerComment.length > 0 ? `\n// ${  bannerComment.join('')}` : '';
  let code = '';
  switch (type) {
    // 对象类型
    case 'object':
      code = [
        bannerCommentText,
        schema.keyName ? `${schema.keyName}: ` : '',
        '{',
          // 类型遍历
          schema.params.map((item) => generate(item, memo)).join('\n'),
        '}',
      ].filter(Boolean).join('\n');
      break;
    // 数据类型
    case 'array':
      code = [
        bannerCommentText,
        schema.keyName ? `${schema.keyName}: ` : '',
        // 类型遍历
        `Array<${schema.params.map((item) => generate(item, memo)).join(' | ')  }>`,
      ].filter(Boolean).join('\n');
      break;
    // 其他非引用类型
    default:
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

  memo.set(schema, code);
  return code;
}
