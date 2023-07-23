import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import * as changeCase from 'change-case';
import { APIHelper } from '@api-helper/core/lib/types';
import { filterSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';

import { ChangeCase } from '@/lib/types';
import { postCode } from '@/lib/utils/util';
import _changeCase from "change-case";

export function renderObject(
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
    // 当数据为空的body代码
    emptyBodyCode?: string;
    // 生成接口名称回调
    onRenderObjectName?: typeof renderObjectName;
  }
) {
  options = merge({
    prefix: 'export ',
    onlyBody: false,
    paramType: 'request',
    emptyBodyCode: '{}',
  }, options);
  schema = cloneDeep(schema);

  const schemaList = filterSchemaPrimitiveValue(Array.isArray(schema) ? schema : (schema as APIHelper.Schema)?.params ?? []) as APIHelper.SchemaList;

  const {
    prefix,
    dropComment,
    emptyBodyCode,
    paramType = 'request',
  } = options;
  // @ts-ignore
  const onlyBody = options?.onlyMap ?? options.onlyBody;

  const keyword = `${prefix} const`;
  const onRenderObjectName = options?.onRenderObjectName ? options.onRenderObjectName : renderObjectName;
  let commentCode = onlyBody ? '' : dropComment !== true ? renderObjectComment(api, paramType) : '';
  let objectName = options?.name ? options.name : onRenderObjectName(api, {
    paramType,
    changeCase
  });

  /**
   * output ->  export class
   */
  let ki = [`${keyword} ${objectName} = `].filter(Boolean).join('\n');

  let bodyCode;
  if (!schema || (Array.isArray(schema) && schema.length === 0)){
    bodyCode = emptyBodyCode;
  } else {
    bodyCode = renderObjectDeepObject(schemaList);
  }

  let code = postCode({
    ki,
    commentCode,
    code: bodyCode
  }, { onlyBody })

  // 移除最后的分号。
  if (onlyBody) {
    code = code.trim();
    if (code.endsWith(';')) {
      code = code.slice(0, code.length - 1);
    }
  }

  return code;
}

function renderObjectDeepObject(
  schemaList: Array<APIHelper.Schema>,
  parentSchema: APIHelper.Schema | null = null,
  memo = new Map<APIHelper.Schema[], string>()
): string {
  if (memo.has(schemaList)) {
    return memo.get(schemaList) as string;
  }
  memo.set(schemaList, 'null');

  const codeWrap: string[] = [];
  const prefix = parentSchema?.type === 'array' ? '[\n' : '{\n';
  const postfix = parentSchema?.type === 'array' ? '\n]' : '\n}';
  for (const schema of schemaList) {
    const keyName = schema.keyName ?? '';
    const type = schema.type;
    const temporaryCode = [renderComment(schema)];
    let v = "''";
    switch (type) {
      // 数组类型 | 对象类型
      case 'array': case 'object':
        temporaryCode.pop();
        temporaryCode.push(renderObjectDeepObject(schema.params, schema));
        break;
      case 'string':
        if ('enum' in schema && schema.enum.length > 0) {
          v = `'${schema.enum[0]}'`;
        }
        temporaryCode.push(`${keyName}: ${v}`);
        break;
      case 'number':
        temporaryCode.push(`${keyName}: 0`);
        break;
      case 'boolean':
        temporaryCode.push(`${keyName}: false`);
        break;
      // 其他类型
      default:
        temporaryCode.push(`${keyName}: null`);
    }
    codeWrap.push(temporaryCode.join('\n'));
  }

  let code = prefix + codeWrap.join(',\n') + postfix;

  if (parentSchema?.keyName) {
    code = [
      renderComment(parentSchema),
      `${parentSchema.keyName}: ${code}`
    ].join('\n');
  }

  return code;
}

export function renderComment(schema: APIHelper.Schema) {
  let type: string = schema.type;
  if ('enum' in schema && schema.enum.length > 0) {
    type = schema.enum.map((item) => `'${item}'`).join(' | ');
  }
  return `// { ${type} }${schema.label ? ` ${schema.label}` : ''}`;
}

export function renderObjectName(
  api: APIHelper.API,
  options: {
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
  }) {
  const changeCase = options.changeCase ?? _changeCase;
  let name = api.path;
  if (options.paramType) {
    name += ` ${options.paramType}`;
  }
  name += `By ${api.method}`;
  return changeCase.camelCase(name);
}

function renderObjectComment(
  api: APIHelper.API,
  paramType: 'request' | 'response',
  isExtraData = false
) {
  const commentText =
    `/**
 * @description ${[api.title, api.description].filter(Boolean).join('、')}【${isExtraData ? '不兼容的请求数据' : paramType === 'request' ? '请求数据' : paramType === 'response' ? '响应数据' : ''}实体对象】${api.docURL ? `\n * @doc ${api.docURL}` : ''}
 * @url [ ${api.method.toUpperCase()} ] ${api.path}
 */`;
  return commentText;
}
