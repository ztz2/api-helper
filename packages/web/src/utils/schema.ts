import { APIHelper } from '@api-helper/core/es';
import { cloneDeep, has } from 'lodash';
import { isSchemaPrimitiveValue } from '@api-helper/core';

export function getSchemaListByIds(ids: string[], record: Map<string, APIHelper.Schema>): APIHelper.SchemaList {
  ids = ids ?? [];
  ids = cloneDeep(ids);
  const schemaList: APIHelper.SchemaList = [];
  for (const id of ids) {
    const row = cloneDeep(record.get(id as string));
    if (row) {
      row.params = filterChildren(row.params, ids);
      schemaList.push(row);
    }
  }

  const result = [];

  const checkHasIn = (arr: APIHelper.SchemaList = [], id: string) => {
    for (const item of arr) {
      if (item.id === id || checkHasIn(item.params, id)) {
        return true;
      }
    }
    return false;
  };

  // return schemaList;
  for (const item of schemaList) {
    let hasIn = false;
    for (let i = 0; i < schemaList.length; i++) {
      const item2 = schemaList[i];
      if (item === item2) {
        continue;
      }
      if (checkHasIn(item2.params, item.id)) {
        hasIn = true;
        break;
      }
    }
    if (!hasIn) {
      result.push(item);
    }
  }
  return result;
}

function filterChildren(schemaList: APIHelper.SchemaList, checkIds: string[] = []) {
  return schemaList.filter((schema) => {
    const index = checkIds.indexOf(schema.id);
    // 原始值类型的子属性直接可用
    if (isSchemaPrimitiveValue(schema)) {
      checkIds.splice(index, 1);
      return true;
    }
    // 子属性不在其中，移除
    if (index === -1) {
      return false;
    }
    // 递归子属性
    schema.params = filterChildren(schema.params, checkIds);
    checkIds.splice(index, 1);
    return true;
  });
}
