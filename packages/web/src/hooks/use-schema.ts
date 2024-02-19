import {
  ref,
  Ref,
  watch,
  toRefs,
} from 'vue';
import { cloneDeep } from 'lodash';
import { APIHelper, filterSchemaRoot, getSchema } from '@api-helper/core';

import { useDocumentConfig } from '@/store';
import { treeForEach } from '@/utils/tree';

// 需在next tick获取
export default function useSchema(api: Ref<APIHelper.API|undefined>) {
  const { currentDocumentConfig } = toRefs(useDocumentConfig());
  const requestDataSchemaList = ref<Array<APIHelper.Schema>>([]);
  const responseDataSchemaList = ref<Array<APIHelper.Schema>>([]);
  const requestDataSchemaMap = ref<Map<string, APIHelper.Schema>>(new Map());
  const responseDataSchemaMap = ref<Map<string, APIHelper.Schema>>(new Map());

  watch(() => api.value, () => {
    const { dataKey = '' } = currentDocumentConfig.value;
    const [req, resp] = getDataSchemaList(api.value, dataKey);
    requestDataSchemaList.value = req;
    responseDataSchemaList.value = resp;

    const reqMap = new Map<string, APIHelper.Schema>();
    treeForEach(requestDataSchemaList.value, (schema: APIHelper.Schema) => {
      reqMap.set(schema.id, schema);
    }, 'params');
    requestDataSchemaMap.value = reqMap;

    const respMap = new Map<string, APIHelper.Schema>();
    treeForEach(responseDataSchemaList.value, (schema: APIHelper.Schema) => {
      respMap.set(schema.id, schema);
    }, 'params');
    responseDataSchemaMap.value = respMap;
  }, { immediate: true });

  return {
    requestDataSchemaList,
    responseDataSchemaList,
    requestDataSchemaMap,
    responseDataSchemaMap,
  };
}

export function getDataSchemaList(api?: APIHelper.API, dataKey = '', onlyRoot = false) {
  const result = [[] as APIHelper.SchemaList, [] as APIHelper.SchemaList];
  if (!api) {
    return result;
  }
  const requestDataSchema = api?.requestDataSchema;
  const responseDataSchema = getResponseDataSchema(api, dataKey);
  const requestSchemaList = requestDataSchema?.type === 'object' ? requestDataSchema.params : responseDataSchema ? [responseDataSchema] : [];
  const responseSchemaList = responseDataSchema?.type === 'object' ? responseDataSchema.params : responseDataSchema ? [responseDataSchema] : [];
  result[0] = cloneDeep(requestSchemaList);
  result[1] = cloneDeep(responseSchemaList);
  if (onlyRoot) {
    result[0] = filterSchemaRoot(result[0]);
    result[1] = filterSchemaRoot(result[1]);
  }
  return result;
}

export function getResponseDataSchema(api?: APIHelper.API, dataKey = ''): APIHelper.Schema | null {
  if (!api || !api.responseDataSchema) {
    return null;
  }
  let schema: APIHelper.Schema | null = cloneDeep(api.responseDataSchema);
  if (dataKey) {
    schema = getSchema(schema, dataKey);
  }
  return schema;
}
