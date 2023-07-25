import { Template } from '@api-helper/template';
import { useApiTemplate, useModelTemplate } from '@/store';
import apiTemplateList from '@/constants/template/api';
import modelTemplateList from '@/constants/template/model';
import { TemplateCategory } from '@/store/template/interface';

function templateClassifyMap(source: TemplateCategory[]): { [id: string]: Template } {
  source = source ?? [];
  const result: { [id: string]: Template } = {};
  for (const s of source) {
    for (const t of s.options) { // @ts-ignore
      result[t.value] = t;
    }
  }
  return result;
}
function checkUpdate(source: TemplateCategory[], value: TemplateCategory[], save: Function, add: Function) {
  const sMap = templateClassifyMap(source);
  const vMap = templateClassifyMap(value);
  for (const [id] of Object.entries(sMap)) {
    const newTemplate = vMap[id];
    if (newTemplate) {
      // 更新
      save(newTemplate);
    }
  }
  // 添加分组，内部会检测是否存在在进行添加。
  for (const v of value) {
    add(v);
  }
}
export function useCheckUpdateTemplate() {
  const apiTemplateStore = useApiTemplate();
  const modelTemplateStore = useModelTemplate();
  checkUpdate(apiTemplateStore.templateList, apiTemplateList, apiTemplateStore.save, apiTemplateStore.addCategory);
  checkUpdate(modelTemplateStore.templateList, modelTemplateList, modelTemplateStore.save, modelTemplateStore.addCategory);
}
