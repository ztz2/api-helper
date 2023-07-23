import { pick } from 'lodash';
import { nanoid } from 'nanoid';
import { defineStore } from 'pinia';

import {
  Template,
  TemplateCategory,
} from '@/store/template/interface';
import {
  MODEL_CUSTOM_TEMPLATE_ID,
  DEFAULT_SELECT_MODEL_TPL_ID,
} from '@/constants';
import message from '@/utils/message';
import { getTemplateList } from '@/utils';
import templateList from '@/constants/template/model';

const useModelTemplate = defineStore('model-template', {
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
      const row = state.templateList.find((item) => item.id === MODEL_CUSTOM_TEMPLATE_ID);
      return row?.options ?? [];
    },
    defaultModelTemplate(state): Template {
      let result;
      for (const itm of getTemplateList(state.templateList)) {
        if (itm.value === DEFAULT_SELECT_MODEL_TPL_ID) {
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
      let templateClassify = this.templateList.find((item) => item.id === MODEL_CUSTOM_TEMPLATE_ID);
      // 不存在，创建自定义分组
      if (!templateClassify) {
        templateClassify = new TemplateCategory('自定义', {
          id: MODEL_CUSTOM_TEMPLATE_ID,
        });
        this.templateList.push(templateClassify);
      }
      templateClassify.options.push(pick(value, Object.keys(new Template())) as Template);
      return value.value;
    },
    addCategory(value: TemplateCategory) {
      const { templateList } = this;
      if (!templateList.find((t) => t.id === value.id)) {
        templateList.push(value);
      }
    },
    deleteById(value: string, options?: { showMessage?: boolean; onSuccess?: Function }) {
      if (!value) {
        return;
      }
      const showMessage = options?.showMessage !== false;
      const { templateList } = this;
      for (let j = 0; j < templateList.length; j++) {
        const templateBox = templateList[j].options;
        for (let i = 0; i < templateBox.length; i++) {
          const tpl = templateBox[i];
          if (tpl.value === value) {
            if (tpl.builtIn) {
              showMessage && message.warn('该模板为内置模板，不可删除');
            } else {
              templateBox.splice(i, 1);
              showMessage && message.success('已删除');
              options?.onSuccess?.(tpl);
            }
            return;
          }
        }
      }
    },
  },
});

export default useModelTemplate;
