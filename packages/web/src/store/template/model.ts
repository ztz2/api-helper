import { pick } from 'lodash';
import { nanoid } from 'nanoid';
import { defineStore } from 'pinia';

import {
  Template,
  TemplateClassify,
  ITemplate,
  ITemplateClassify,
} from '@/store/template/interface';
import templateList from '@/constants/template/model';

const useModelTemplate = defineStore('model-template', {
  persist: false,
  state: (): {
    templateList: Array<ITemplateClassify>,
  } => ({
    templateList,
  }),
  getters: {
    templateMap(state): Map<string, ITemplate> {
      const { templateList } = state;
      const templateMap = new Map();
      for (let j = 0; j < templateList.length; j++) {
        for (let i = 0; i < templateList[j].options.length; i++) {
          const itm = templateList[j].options[i];
          templateMap.set(itm.value, itm);
        }
      }
      return templateMap;
    },
  },
  actions: {
    save(value: ITemplate): string {
      const template = this.templateMap.get(value.value);
      // 更新操作
      if (template) {
        template.label = value.label;
        template.content = value.content;
        // 新增
      } else {
        if (!value.value) {
          value.value = nanoid();
        }
        const templateClassify = this.templateList.find((item) => item.label === '自定义') ?? new TemplateClassify('自定义');
        templateClassify.options.push(pick(value, Object.keys(new Template())) as ITemplate);
        this.templateList.push(templateClassify);
      }
      return value.value;
    },
  },
});

export default useModelTemplate;
