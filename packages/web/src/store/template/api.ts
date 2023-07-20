import { pick } from 'lodash';
import { nanoid } from 'nanoid';
import { defineStore } from 'pinia';

import {
  Template,
  TemplateCategory,
} from '@/store/template/interface';
import templateList from '@/constants/template/api';
import { API_CUSTOM_TEMPLATE_ID, DEFAULT_SELECT_API_TPL_ID } from '@/constants';
import { getTemplateList } from '@/utils';

const useApiTemplate = defineStore('api-template', {
  persist: true,
  state: (): {
    templateList: Array<TemplateCategory>,
  } => ({
    templateList,
  }),
  getters: {
    templateMap(state): Map<string, Template> {
      const templateMap = new Map();
      getTemplateList(state.templateList).forEach((itm) => {
        templateMap.set(itm.value, itm);
      });
      return templateMap;
    },
    customTemplateList(state): Template[] {
      const row = state.templateList.find((item) => item.id === API_CUSTOM_TEMPLATE_ID);
      return row?.options ?? [];
    },
    defaultApiTemplate(state): Template {
      let result;
      for (const itm of getTemplateList(state.templateList)) {
        if (itm.value === DEFAULT_SELECT_API_TPL_ID) {
          result = itm;
        }
      }
      return result as Template;
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
      let templateClassify = this.templateList.find((item) => item.id === API_CUSTOM_TEMPLATE_ID);
      // 不存在，创建自定义分组
      if (!templateClassify) {
        templateClassify = new TemplateCategory('自定义', API_CUSTOM_TEMPLATE_ID);
        this.templateList.push(templateClassify);
      }
      templateClassify.options.push(pick(value, Object.keys(new Template())) as Template);
      return value.value;
    },
  },
});

export default useApiTemplate;
