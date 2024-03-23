import { OpenAPI } from 'openapi-types'
import { JSONSchema4 } from 'json-schema';

type Rule = (schema: OpenAPI.Document) => boolean | void
const rules = new Map<string, Rule>();
rules.set('必须包含 paths 属性', (document) => {
  try {
    if ('paths' in document) {
      return true
    }
    // 可能不是对象类型
  } catch {
    return false;
  }
});
export function validateOpenAPIDocument(document: OpenAPI.Document): boolean {
  if (!document) {
    return false;
  }
  const errors: string[] = []
  rules.forEach((rule, errorMeg) => {
    const res = rule(document);
    if (!res) {
      errors.push(errorMeg);
    }
  });
  return errors.length === 0;
}

export function validateSchema(schema: JSONSchema4 = {}) {
  return schema && Object.keys(schema).length > 0;
}

// 校验字段是否为一个合法的变量
export function validateKeyName(v: string) {
  if (
    ((typeof v === 'string' && (v as unknown as string).trim() !== '') || (typeof v !== 'string' && v != null))
    && !v.includes('.')
    && !v.includes('[')
    && !/^([^\x00-\xff]|[a-zA-Z_$])([^\x00-\xff]|[a-zA-Z0-9_$])*$/.test(v)) { // @ts-ignore
    return false;
  }
  return true;
}
