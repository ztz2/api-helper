import { format } from '../utils';
import { APIHelper } from '../types';

const changeCase = require('change-case');

export function generateMap(
  schema: APIHelper.Schema | Array<APIHelper.Schema> | null,
  api: APIHelper.API,
  options: {
    onlyMap?: boolean;
    paramType: 'request' | 'response';
  }
) {
  if (!schema) {
    return '';
  }

  if (!Array.isArray(schema)) {
    schema = schema.params;
  }

  const code = generate(schema);
  const prefixCode = `export const ${generateMapName(api, options)} = `;

  let formatted = format(prefixCode + code);

  if (options?.onlyMap === true) {
    formatted = formatted.replace(new RegExp('^' + prefixCode), '');
  }

  return formatted;
}

function generate(
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
    const temporaryCode = [generateMapComment(schema)];
    let v = "''";
    switch (type) {
      // 数组类型 | 对象类型
      case 'array': case 'object':
        temporaryCode.pop();
        temporaryCode.push(generate(schema.params, schema));
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
      generateMapComment(parentSchema),
      `${parentSchema.keyName}: ${code}`
    ].join('\n');
  }

  memo.set(schemaList, code);

  return code;
}

export function generateMapComment(schema: APIHelper.Schema) {
  let type: string = schema.type;
  if ('enum' in schema && schema.enum.length > 0) {
    type = schema.enum.map((item) => `'${item}'`).join(' | ');
  }
  return `// { ${type} }` + (schema.title ? ` ${schema.title}` :  schema.description ? ` ${schema.description}` : '');
}

export function generateMapName(api: APIHelper.API, options: { paramType: 'request' | 'response'; }) {
  let name = api.path;
  if (options.paramType) {
    name += ` ${options.paramType}`;
  }
  name += `By ${api.method}`;
  return changeCase.camelCase(name);
}
