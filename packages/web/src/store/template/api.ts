import { pick } from 'lodash';
import { nanoid } from 'nanoid';
import { defineStore } from 'pinia';

import {
  Template,
  TemplateCategory,
} from '@/store/template/interface';
import templateList from '@/constants/template/api';
import { API_CUSTOM_TEMPLATE_ID } from '@/constants';

const useApiTemplate = defineStore('api-template', {
  persist: true,
  state: (): {
    templateList: Array<TemplateCategory>,
  } => ({
    templateList,
  }),
  getters: {
    templateMap(state): Map<string, Template> {
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
    customTemplateList(state): Template[] {
      const row = state.templateList.find((item) => item.id === API_CUSTOM_TEMPLATE_ID);
      return row?.options ?? [];
    },
  },
  actions: {
    save(value: Template): string {
      const template = this.templateMap.get(value.value);
      // 更新操作
      if (template) {
        template.label = value.label;
        template.content = value.content;
        return value.value;
      }
      // 新增
      value.value = value.value ? value.value : nanoid();
      const templateClassify = this.templateList.find((item) => item.id === API_CUSTOM_TEMPLATE_ID) ?? new TemplateCategory('自定义', API_CUSTOM_TEMPLATE_ID);
      templateClassify.options.push(pick(value, Object.keys(new Template())) as Template);
      this.templateList.push(templateClassify);
      return value.value;
    },
  },
});

export default useApiTemplate;
