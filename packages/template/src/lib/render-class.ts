import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import * as _changeCase from 'change-case';
import { APIHelper } from '@api-helper/core/lib/types';
import { processKeyName, filterSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';

import { postCode } from '@/lib/utils/util';
import { ChangeCase } from '@/lib/types';
import { precessArraySchema, renderComment } from '@/lib/render-object';
import { createSchema } from '@api-helper/core';

export function renderClass(
  schema: APIHelper.Schema | Array<APIHelper.Schema> | null,
  api: APIHelper.API,
  options?: {
    // 请求数据还是响应数据
    paramType?: 'request' | 'response';
    // 前缀
    prefix?: string,
    // 名称
    name?: string,
    // 名称后缀
    suffixName?: string;
    // 删除interface注释
    dropComment?: boolean;
    // 只生成类型部分
    onlyBody?: boolean;
    // 当数据为空的body代码
    emptyBodyCode?: string;
    // 生成接口名称回调
    onRenderClassName?: typeof renderClassName;
  }
) {
  options = merge({
    onlyBody: false,
    prefix: 'export ',
    paramType: 'request',
    emptyBodyCode: '{}',
    suffixName: 'class',
  }, options);

  schema = cloneDeep(schema);
  schema = precessArraySchema(schema);

  // const schemaList = filterSchemaPrimitiveValue(Array.isArray(schema) ? schema : (schema as APIHelper.Schema)?.params ?? []) as APIHelper.SchemaList;
  const primitiveValueSchema = filterSchemaPrimitiveValue(schema) as APIHelper.Schema;

  const {
    prefix,
    suffixName,
    onlyBody,
    dropComment,
    emptyBodyCode,
    paramType = 'request',
  } = options;
  const keyword = `${prefix} class`;
  const onRenderClassName = options?.onRenderClassName ? options.onRenderClassName : renderClassName;
  let commentCode = onlyBody ? '' : dropComment !== true ? renderClassComment(api, paramType) : '';
  let className = options?.name ? options.name : onRenderClassName(api, {
    paramType,
    suffixName,
    changeCase: _changeCase,
  });

  /**
   * output ->  export class
   */
  let ki = [`${keyword} ${className} `].filter(Boolean).join('\n');
  let bodyCode = '';
  if (!schema || (schema?.params?.length === 0 && !schema?.keyName) || (schema?.type !== 'object' && schema?.type !== 'array')){
    if (schema?.type !== 'object' && schema?.type !== 'array') {
      bodyCode += '/* 非对象数据，不能生成Class代码**/\n';
    }
    bodyCode += emptyBodyCode;
  } else {
    bodyCode = renderClassDeepObject(primitiveValueSchema, true);
  }

  return postCode({
    ki,
    commentCode,
    code: bodyCode,
  }, { onlyBody });
}

function renderClassDeepObject(
  schema: APIHelper.Schema,
  isRoot = false,
  memo = new Map<APIHelper.Schema, string>()
): string {
  if (memo.has(schema)) {
    return memo.get(schema) as string;
  }

  memo.set(schema, 'null');

  const codeWrap: string[] = [];
  const prefix = schema?.type === 'array' ? '[\n' : '{\n';
  const postfix = schema?.type === 'array' ? '\n]' : '\n}';
  for (const child of schema.params) {
    const keyName = child.keyName ?? '';

    const type = child.type;
    const temporaryCode = [renderComment(child)];
    const evaluationCode = isRoot ? ' = ' : ': ';
    let v = "''";
    switch (type) {
      // 数组类型 | 对象类型
      case 'array': case 'object':
        temporaryCode.pop();
        temporaryCode.push(renderClassDeepObject(child, false, memo));
        break;
      case 'string':
        if ('enum' in child && child.enum.length > 0) {
          v = `'${child.enum[0]}'`;
        }
        temporaryCode.push(`${processKeyName(keyName)}${evaluationCode}${v}`);
        break;
      case 'number':
        temporaryCode.push(`${processKeyName(keyName)}${evaluationCode}0`);
        break;
      case 'boolean':
        temporaryCode.push(`${processKeyName(keyName)}${evaluationCode}false`);
        break;
      // 其他类型
      default:
        temporaryCode.push(`${processKeyName(keyName)}${evaluationCode}null`);
    }
    codeWrap.push(temporaryCode.join('\n'));
  }

  let code = prefix + codeWrap.join(isRoot ? ';\n' : ',\n') + postfix;

  if (schema?.keyName) {
    const evaluationCode = isRoot ? ' = ' : ': ';
    code = [
      renderComment(schema),
      `${processKeyName(schema.keyName)}${evaluationCode} ${code}`
    ].join('\n');
    if (isRoot && schema.type !== 'object') {
      code = `{ \n ${code} \n } \n`;
    }
  }

  return code;
}

export function renderClassName(
  api: APIHelper.API,
  options: {
    suffixName?: string,
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
  }) {
  const suffixName = options?.suffixName ?? 'Class ';
  const changeCase = options.changeCase ?? _changeCase;
  let name = api.path;
  if (options.paramType) {
    name += ` ${options.paramType}`;
  }
  name += `${suffixName}By ${api.method}`;
  return changeCase.pascalCase(name);
}

function renderClassComment(
  api: APIHelper.API,
  paramType: 'request' | 'response',
  isExtraData = false
) {
  let summary =  isExtraData ? 'Incompatible request data' : paramType === 'request' ? 'Request data' : paramType === 'response' ? 'Response data' : '';
  if (summary) {
    summary += ' entity class';
  }
  const commentText =
    `/**
 * @description ${[api.title, api.description].filter(Boolean).join('、')}${summary ? `\n * @summary ${summary}` : ''}${api.docURL ? `\n * @doc ${api.docURL}` : ''}
 * @url [ ${api.method.toUpperCase()} ] ${api.path}
 */`;
  return commentText;
}
