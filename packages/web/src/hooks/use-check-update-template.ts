import { useApiTemplate, useModelTemplate } from '@/store';
import apiTemplateList from '@/constants/template/api';
import modelTemplateList from '@/constants/template/model';
import { ITemplate, TemplateClassify } from '@/store/template/interface';

function templateClassifyMap(source: TemplateClassify[]): { [id: string]: ITemplate } {
  source = source ?? [];
  const result: { [id: string]: ITemplate } = {};
  for (const s of source) {
    for (const t of s.options) {
      result[t.value] = t;
    }
  }
  return result;
}
function checkUpdate(source: TemplateClassify[], value: TemplateClassify[], save: Function) {
  const sMap = templateClassifyMap(source);
  const vMap = templateClassifyMap(value);
  for (const [id] of Object.entries(sMap)) {
    const newTemplate = vMap[id];
    if (newTemplate) {
      // 更新
      save(newTemplate);
    }
  }
}
export function useCheckUpdateTemplate() {
  const apiTemplateStore = useApiTemplate();
  const modelTemplateStore = useModelTemplate();
  checkUpdate(apiTemplateStore.templateList, apiTemplateList, apiTemplateStore.save);
  checkUpdate(modelTemplateStore.templateList, modelTemplateList, modelTemplateStore.save);
}
