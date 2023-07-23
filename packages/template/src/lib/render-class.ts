import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import * as _changeCase from 'change-case';
import { APIHelper } from '@api-helper/core/lib/types';
import { filterSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';

import { ChangeCase } from '@/lib/types';
import { postCode } from '@/lib/utils/util';
import { renderComment } from '@/lib/render-object';

export function renderClass(
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
    onRenderClassName?: typeof renderClassName;
  }
) {
  options = merge({
    onlyBody: false,
    prefix: 'export ',
    paramType: 'request',
    emptyBodyCode: '{}',
  }, options);

  schema = cloneDeep(schema);

  const schemaList = filterSchemaPrimitiveValue(Array.isArray(schema) ? schema : (schema as APIHelper.Schema)?.params ?? []) as APIHelper.SchemaList;

  const {
    prefix,
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
    changeCase: _changeCase,
  });

  /**
   * output ->  export class
   */
  let ki = [`${keyword} ${className} `].filter(Boolean).join('\n');

  let bodyCode;
  if (!schema || (Array.isArray(schema) && schema.length === 0)){
    bodyCode = emptyBodyCode;
  } else {
    bodyCode = renderClassDeepObject(schemaList, null, true);
  }

  return postCode({
    ki,
    commentCode,
    code: bodyCode,
  }, { onlyBody });
}

function renderClassDeepObject(
  schemaList: Array<APIHelper.Schema>,
  parentSchema: APIHelper.Schema | null = null,
  isRoot = false,
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
    const evaluationCode = isRoot ? ' = ' : ': ';
    let v = "''";
    switch (type) {
      // 数组类型 | 对象类型
      case 'array': case 'object':
        temporaryCode.pop();
        temporaryCode.push(renderClassDeepObject(schema.params, schema));
        break;
      case 'string':
        if ('enum' in schema && schema.enum.length > 0) {
          v = `'${schema.enum[0]}'`;
        }
        temporaryCode.push(`${keyName}${evaluationCode}${v}`);
        break;
      case 'number':
        temporaryCode.push(`${keyName}${evaluationCode}0`);
        break;
      case 'boolean':
        temporaryCode.push(`${keyName}${evaluationCode}false`);
        break;
      // 其他类型
      default:
        temporaryCode.push(`${keyName}${evaluationCode}null`);
    }
    codeWrap.push(temporaryCode.join('\n'));
  }

  let code = prefix + codeWrap.join(isRoot ? ';\n' : ',\n') + postfix;

  if (parentSchema?.keyName) {
    code = [
      renderComment(parentSchema),
      `${parentSchema.keyName}: ${code}`
    ].join('\n');
  }

  return code;
}

export function renderClassName(
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
  return changeCase.pascalCase(name);
}

function renderClassComment(
  api: APIHelper.API,
  paramType: 'request' | 'response',
  isExtraData = false
) {
  const commentText =
    `/**
 * @description ${[api.title, api.description].filter(Boolean).join('、')}【${isExtraData ? '不兼容的请求数据' : paramType === 'request' ? '请求数据' : paramType === 'response' ? '响应数据' : ''}实体类】${api.docURL ? `\n * @doc ${api.docURL}` : ''}
 * @url [ ${api.method.toUpperCase()} ] ${api.path}
 */`;
  return commentText;
}
