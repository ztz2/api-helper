import os from 'os';
import { OpenAPI } from 'openapi-types';

export const validSwagger = function (openapiDocument: OpenAPI.Document) {
  return (
    openapiDocument &&
    openapiDocument.hasOwnProperty('tags') &&
    openapiDocument.hasOwnProperty('info')
  );
};

export const generateTitle = function (requestParams: any = {}, p: any = {}) {
  const hasName = !!requestParams.name;
  if (p.basePath && p.basePath.length > 1) {
    const path = p.basePath.split('/');
    if (
      path[1] &&
      (requestParams.name.endsWith(path[1]) ||
        requestParams.name.endsWith(path[1] + ')'))
    ) {
      return requestParams.name;
    }
  }
  if (
    !p.name &&
    (requestParams.name.endsWith(p.info.title) ||
      requestParams.name.endsWith(p.info.title + ')'))
  ) {
    return requestParams.name;
  }
  return (
    requestParams.name +
    `${hasName ? '(' : ''}` +
    (p.name ? p.name : p.info.title) +
    `${hasName ? ')' : ''}`
  );
};

export function processDataType(type: string | string[]) {
  type = Array.isArray(type) ? type : [type];
  return type[0];
}

type TreeData = {
  label: string;
  children: TreeData[];
};
export function getTreePath(
  treeData: Array<TreeData>,
): Array<[string, TreeData]> {
  const result: Array<[string, TreeData]> = [];
  function dfs(treeList: Array<TreeData>, pathMemo = []) {
    for (let i = 0; i < treeList.length; i++) {
      const item = treeList[i];
      pathMemo.push(item.label);
      if (Array.isArray(item.children) && item.children.length > 0) {
        dfs(item.children, pathMemo);
        continue;
      }
      result.push([pathMemo.join('/'), item]);
    }
  }
  dfs(treeData);
  return result;
}
