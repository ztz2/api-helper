import { camelCase } from 'change-case';
import { APIHelper } from '@api-helper/core/lib/types';
import formatCode from '@/lib/utils/prettier';

export function renderObject(
  schema: APIHelper.Schema | Array<APIHelper.Schema> | null,
  api: APIHelper.API,
  options: {
    onlyMap?: boolean;
    paramType: 'request' | 'response';
    startSpace?: ''
  }
) {
  if (!schema) {
    return '';
  }

  if (!Array.isArray(schema)) {
    schema = schema.params;
  }

  const code = renderObjectDeepObject(schema);
  const prefixCode = `export const ${renderObjectName(api, options)} = `;

  let formatted = formatCode(prefixCode + code);

  if (options?.onlyMap === true) {
    formatted = formatted.replace(new RegExp('^' + prefixCode), '').trim();
    if (formatted.endsWith(';')) {
      formatted = formatted.slice(0, formatted.length - 1);
    }
  }

  // 开始空格键处理
  if (options.startSpace?.length) {
    formatted = formatted.split('\n').map((line: string, index: number) => index === 0 ? line : `${options.startSpace}${line}`).join('\n');
  }

  return formatted;
}

function renderObjectDeepObject(
  schemaList: Array<APIHelper.Schema>,
  parentSchema: APIHelper.Schema | null = null,
  memo = new Map<APIHelper.Schema[], string>()
): string {
  if (memo.has(schemaList)) {
    return memo.get(schemaList) as string;
  }
  const codeWrap: string[] = [];
  const prefix = parentSchema?.type === 'array' ? '[\n' : '{\n';
  const postfix = parentSchema?.type === 'array' ? '\n]' : '\n}';
  for (const schema of schemaList) {
    const keyName = schema.keyName ?? '';
    if (!keyName && schema.type !== 'array' && schema.type !== 'object') {
      continue;
    }
    const type = schema.type;
    const temporaryCode = [renderObjectComment(schema)];
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
      renderObjectComment(parentSchema),
      `${parentSchema.keyName}: ${code}`
    ].join('\n');
  }

  memo.set(schemaList, code);

  return code;
}

export function renderObjectComment(schema: APIHelper.Schema) {
  let type: string = schema.type;
  if ('enum' in schema && schema.enum.length > 0) {
    type = schema.enum.map((item) => `'${item}'`).join(' | ');
  }
  return `// { ${type} }` + (schema.title ? ` ${schema.title}` :  schema.description ? ` ${schema.description}` : '');
}

export function renderObjectName(
  api: APIHelper.API,
  options: {
    paramType: 'request' | 'response'
  }) {
  let name = api.path;
  if (options.paramType) {
    name += ` ${options.paramType}`;
  }
  name += `By ${api.method}`;
  return camelCase(name);
}
