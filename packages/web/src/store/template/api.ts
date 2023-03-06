import { defineStore } from 'pinia';
import apiTemplateList from '@/core/template/api';
import { ITemplate, ITemplateClassify } from '@/store/template/interface';

const useApiTemplate = defineStore('api-template', {
  persist: false,
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
  actions: {

  },
});

export default useApiTemplate;
