import type { APIHelper } from '@api-helper/core/lib/types';
import { filterSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';

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

export function isEmptySchema(schema: APIHelper.Schema | null): boolean {
  const exec = (scm: APIHelper.Schema | null) => {
    if (!scm) {
      return true;
    }
    if (scm.type === 'object' && isEmptyObject(filterSchemaPrimitiveValue(scm))) {
      return true;
    }
    if (scm.type === 'array') {
      for (const itm of scm.params) {
        if (exec(itm)) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  return exec(schema);
}
