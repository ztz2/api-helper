import { APIHelper } from '@api-helper/core';
import formatCode from '@/lib/utils/prettier';

export function postCode({ code = '', ki = '', commentCode = '' }, { onlyBody = false }) {
  // 移除多个空格
  ki = ki.replace(/\s(\s+)/gim, ' ');
  // 移除双换行符。
  code = code.replace(/\n\n/gim, '\n');
  // 格式化代码
  code = formatCode(ki + code, {
    parser: 'typescript'
  });
  // 如果只输出body部分，移除 export xxx 部分
  if (onlyBody) {
    code = code.replace(ki, '');
  }
  // 合并注释代码输出
  return [commentCode, code].filter(Boolean).join('\n');
}

export function checkIsInterface(schema: APIHelper.Schema | null) {
  let isType = !schema || schema?.type === 'array' || isEmptyObject(schema);
  let hasKey = schema?.params?.some((s) => s.keyName);
  return !isType && hasKey;
}

export function isEmptyObject(schema: APIHelper.Schema | null) {
  return schema?.type === 'object' && schema?.params?.length === 0;
}

export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function randomChar(size = 4) {
  const str = uuid();
  size = Number.parseInt((size > str.length ? str.length : size < 1 ? 1 : size) as unknown as string, 10);
  return str.slice(str.length - size);
}
