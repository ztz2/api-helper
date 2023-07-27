import { useApiTemplate, useModelTemplate, useFileDirectory } from '@/store';
import apiTemplateList from '@/constants/template/api';
import modelTemplateList from '@/constants/template/model';
import fileDirectoryList from '@/constants/file-directory';
import { Template } from '@/store/template/interface';
import { FileDirectory } from '@/store/file-directory/interface';
import SelectOptionGroup from '@/constants/select-option-group';

function templateClassifyMap(source: SelectOptionGroup[]): { [id: string]: Template } {
  source = source ?? [];
  const result: { [id: string]: Template } = {};
  for (const s of source) {
    for (const t of s.options) { // @ts-ignore
      result[t.value] = t;
    }
  }
  return result;
}
function checkUpdate(
  source: SelectOptionGroup[],
  templateMap: Map<string, Template | FileDirectory>,
  save: Function,
  add: Function,
) {
  const sMap = templateClassifyMap(source);
  for (const [id, val] of Object.entries(sMap)) {
    if (templateMap.has(id)) {
      // 更新
      save(val);
    }
  }
  // 添加分组，内部会检测是否存在在进行添加。
  for (const v of source) {
    add(v);
  }
}
export function useCheckUpdateTemplate() {
  const apiTemplateStore = useApiTemplate();
  const modelTemplateStore = useModelTemplate();
  const fileDirectoryStore = useFileDirectory();

  checkUpdate(
    apiTemplateList,
    apiTemplateStore.apiTemplateMap,
    apiTemplateStore.saveApiTemplate,
    apiTemplateStore.addApiTemplateGroup,
  );
  checkUpdate(
    modelTemplateList,
    modelTemplateStore.modelTemplateMap,
    modelTemplateStore.saveModelTemplate,
    modelTemplateStore.addModelTemplateGroup,
  );
  checkUpdate(
    fileDirectoryList,
    fileDirectoryStore.fileDirectoryMap,
    fileDirectoryStore.saveFileDirectory,
    fileDirectoryStore.addFileDirectoryGroup,
  );
}
