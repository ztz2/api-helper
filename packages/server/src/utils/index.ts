import { mergeUrl } from '@api-helper/core/lib/utils/util';
import { toUnixPath } from '@api-helper/cli/lib/tools/util';
import { FileDirectoryConfig } from '../dto/file-directory-config';

type TreeData = FileDirectoryConfig & Recordable;
export function getTreePath(treeData: Array<TreeData>, basePath = ''): Array<[string, TreeData]> {
  const result: Array<[string, TreeData]> = [];
  function dfs(treeList: Array<TreeData>, pathMemo = []) {
    for (let i = 0; i < treeList.length; i++) {
      const item = treeList[i];
      const currentPathMemo = [...pathMemo];
      currentPathMemo.push(item.title);
      if (Array.isArray(item.children) && item.children.length > 0) {
        dfs(item.children, currentPathMemo);
        continue;
      }
      result.push([toUnixPath(mergeUrl(basePath, '/', currentPathMemo.join('/'))), item]);
    }
  }
  dfs(treeData);
  return result;
}
