import merge from 'lodash/merge';
import _changeCase from 'change-case';
import cloneDeep from 'lodash/cloneDeep';
import * as changeCase from 'change-case';
import { APIHelper } from '@api-helper/core/lib/types';
import { filterSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';

import { postCode } from '@/lib/utils/util';
import type { ChangeCase } from '@/lib/types';

type RenderObjectOptions = {
  // 请求数据还是响应数据
  paramType?: 'request' | 'response';
  // 前缀
  prefix?: string,
  // interface 名称
  name?: string;
  // 名称后缀
  suffixName?: string;
  // 删除interface注释
  dropComment?: boolean;
  // 只生成类型部分
  onlyBody?: boolean;
  // 当数据为空的body代码
  emptyBodyCode?: string;
  // 生成接口名称回调
  onRenderObjectName?: typeof renderObjectName;
  // 格式化值
  formatter?: (schema: APIHelper.Schema) => ({ useDefault?: boolean, value: any })
};
export function renderObject(
  schema: APIHelper.Schema | null,
  api: APIHelper.API,
  options?: RenderObjectOptions
) {
  options = merge({
    prefix: 'export ',
    suffixName: 'entity',
    onlyBody: false,
    paramType: 'request',
    emptyBodyCode: '{}',
  }, options);
  schema = cloneDeep(schema);

  const primitiveValueSchema = filterSchemaPrimitiveValue(schema) as APIHelper.Schema;

  const {
    prefix,
    suffixName,
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
    suffixName,
    paramType,
    changeCase
  });

  /**
   * output ->  export class
   */
  let ki = [`${keyword} ${objectName} = `].filter(Boolean).join('\n');

  let bodyCode;
  if (!schema || schema?.params?.length === 0){
    bodyCode = emptyBodyCode;
  } else {
    bodyCode = renderObjectDeepObject(primitiveValueSchema, undefined, true, options);
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
  schema: APIHelper.Schema,
  memo = new Map<APIHelper.Schema, string>(),
  isRoot = false,
  options: RenderObjectOptions = {},
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
    let v = "''";
    let currentUseDefault: boolean | undefined = true;
    switch (type) {
      // 数组类型 | 对象类型
      case 'array': case 'object':
        temporaryCode.pop();
        temporaryCode.push(renderObjectDeepObject(child, memo, isRoot, options));
        break;
      case 'string':
        currentUseDefault = true;
        if (typeof options.formatter === 'function') {
          const { value, useDefault } = options.formatter(child);
          currentUseDefault = useDefault;
          if (currentUseDefault !== true) {
            v = value;
          }
        }
        if (currentUseDefault !== false) {
          v = "''";
          if ('enum' in child && child.enum.length > 0) {
            v = `'${child.enum[0]}'`;
          }
        }
        temporaryCode.push(`${keyName}: ${v}`);
        break;
      case 'number':
        currentUseDefault = true;
        if (typeof options.formatter === 'function') {
          const { value, useDefault } = options.formatter(child);
          currentUseDefault = useDefault;
          if (currentUseDefault !== true) {
            v = value;
          }
        }
        if (currentUseDefault !== false) {
          v = '0';
        }
        temporaryCode.push(`${keyName}: ${v}`);
        break;
      case 'boolean':
        currentUseDefault = true;
        if (typeof options.formatter === 'function') {
          const { value, useDefault } = options.formatter(child);
          currentUseDefault = useDefault;
          if (currentUseDefault !== true) {
            v = value;
          }
        }
        if (currentUseDefault !== false) {
          v = 'false';
        }
        temporaryCode.push(`${keyName}: ${v}`);
        break;
      // 其他类型
      default:
        currentUseDefault = true;
        if (typeof options.formatter === 'function') {
          const { value, useDefault } = options.formatter(child);
          currentUseDefault = useDefault;
          if (currentUseDefault !== true) {
            v = value;
          }
        }
        if (currentUseDefault !== false) {
          v = 'null';
        }
        temporaryCode.push(`${keyName}: ${v}`);
    }
    codeWrap.push(temporaryCode.join('\n'));
  }

  let code = prefix + codeWrap.join(',\n') + postfix;

  if (schema?.keyName) {
    code = [
      renderComment(schema),
      `${schema.keyName}: ${code}`
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
    suffixName?: string,
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
  }) {
  const suffixName = options?.suffixName ?? 'Entity ';
  const changeCase = options.changeCase ?? _changeCase;
  let name = api.path;
  if (options.paramType) {
    name += ` ${options.paramType}`;
  }
  name += `${suffixName}By ${api.method}`;
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
