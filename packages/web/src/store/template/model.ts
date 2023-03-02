import { defineStore } from 'pinia';
import apiTemplateList from '@/core/template/model';
import { ITemplate, ITemplateClassify } from '@/store/template/interface';

const useModelTemplate = defineStore('model-template', {
  persist: true,
  state: (): {
    templateList: Array<ITemplateClassify>,
  } => ({
    templateList: apiTemplateList
  }),
  getters: {
    templateMap(state): Map<string, ITemplate> {
      const templateList = state.templateList;
      const templateMap = new Map();
      for (let j = 0; j < templateList.length; j++ ) {
        for (let i = 0; i < templateList[j].options.length; i++) {
          const itm = templateList[j].options[i];
          templateMap.set(itm.value, itm);
        }
      }
      return templateMap;
    },
  },
  actions: {},
});

export default useModelTemplate;
