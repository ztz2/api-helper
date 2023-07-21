import * as changeCase from 'change-case';
import { APIHelper } from '@api-helper/core/lib/types';
import { filterSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';

import formatCode from '@/lib/utils/prettier';
import { renderObjectComment } from '@/lib/render-object';

export function renderClass(
  schema: APIHelper.Schema | Array<APIHelper.Schema> | null,
  api: APIHelper.API,
  options: {
    paramType: 'request' | 'response';
  }
) {
  schema = filterSchemaPrimitiveValue(schema);

  if (!schema) {
    return '';
  }

  if (!Array.isArray(schema)) {
    schema = schema.params;
  }

  const code = renderClassDeepObject(schema, null, true);
  const prefixCode = `export class ${renderClassName(api, options)} `;

  return formatCode(prefixCode + code);
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
    const temporaryCode = [renderObjectComment(schema)];
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
      renderObjectComment(parentSchema),
      `${parentSchema.keyName}: ${code}`
    ].join('\n');
  }

  return code;
}

export function renderClassName(
  api: APIHelper.API,
  options: {
    paramType: 'request' | 'response'
  }) {
  let name = api.path;
  if (options.paramType) {
    name += ` ${options.paramType}`;
  }
  name += `By ${api.method}`;
  return changeCase.pascalCase(name);
}
