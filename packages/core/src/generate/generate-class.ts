import { format } from '../utils';
import { APIHelper } from '../types';
import { generateMapComment } from './generate-map';

const changeCase = require('change-case');

export function generateClass(
  schema: APIHelper.Schema | Array<APIHelper.Schema> | null,
  api: APIHelper.API,
  options: {
    paramType: 'request' | 'response';
  }
) {
  if (!schema) {
    return '';
  }

  if (!Array.isArray(schema)) {
    schema = schema.params;
  }

  const code = generate(schema, null, true);
  const prefixCode = `export class ${generateClassName(api, options)} `;

  return format(prefixCode + code);
}

function generate(
  schemaList: Array<APIHelper.Schema>,
  parentSchema: APIHelper.Schema | null = null,
  isRoot = false,
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
    const evaluationCode = isRoot ? ' = ' : ': ';
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
      generateMapComment(parentSchema),
      `${parentSchema.keyName}: ${code}`
    ].join('\n');
  }

  memo.set(schemaList, code);

  return code;
}

export function generateClassName(api: APIHelper.API, options: { paramType: 'request' | 'response'; }) {
  let name = api.path;
  if (options.paramType) {
    name += ` ${options.paramType}`;
  }
  name += `By ${api.method}`;
  return changeCase.pascalCase(name);
}
