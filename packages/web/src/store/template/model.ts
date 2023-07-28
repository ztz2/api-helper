import {
  omit,
  merge,
} from 'lodash';
import { nanoid } from 'nanoid';
import { defineStore } from 'pinia';

import {
  MODEL_CUSTOM_GROUP_ID,
  DEFAULT_SELECT_MODEL_TPL_ID,
} from '@/constants';
import message from '@/utils/message';
import { getSelectOptionList } from '@/utils';
import { Template } from '@/store/template/interface';
import modelTemplateList from '@/constants/template/model';
import SelectOptionGroup from '@/constants/select-option-group';

const useModelTemplate = defineStore('model-template', {
  persist: true,
  state: (): {
    modelTemplateList: Array<SelectOptionGroup>,
  } => ({
    modelTemplateList,
  }),
  getters: {
    modelTemplateMap(state): Map<string, Template> {
      const modelTemplateMap = new Map();
      getSelectOptionList(state.modelTemplateList).forEach((itm) => {
        modelTemplateMap.set(itm.id, itm);
      });
      return modelTemplateMap;
    },
    customModelTemplateList(state): Array<Template> {
      const row = state.modelTemplateList.find((item) => item.id === MODEL_CUSTOM_GROUP_ID);
      return (row?.options ?? []) as Array<Template>;
    },
    defaultModelTemplate(state): Template {
      let result;
      for (const itm of getSelectOptionList(state.modelTemplateList)) {
        if (itm.id === DEFAULT_SELECT_MODEL_TPL_ID) {
          result = itm;
          break;
        }
      }
      return result as Template;
    },
  },
  actions: {
    saveModelTemplate(value: Template): string {
      const modelTemplate = this.modelTemplateMap.get(value.id);
      // 更新操作
      if (modelTemplate) {
        merge(modelTemplate, value);
        return modelTemplate.id;
      }
      // 新增
      value.id = value.id ? value.id : nanoid();
      let modelTemplateGroup = this.modelTemplateList.find((item) => item.id === MODEL_CUSTOM_GROUP_ID);
      // 不存在，创建自定义分组
      if (!modelTemplateGroup) {
        modelTemplateGroup = new SelectOptionGroup('自定义', {
          id: MODEL_CUSTOM_GROUP_ID,
        });
        this.modelTemplateList.push(modelTemplateGroup);
      }
      modelTemplateGroup.options.push(value);
      return value.id;
    },
    addModelTemplateGroup(value: SelectOptionGroup) {
      const { modelTemplateList } = this;
      if (!modelTemplateList.find((t) => t.id === value.id)) {
        modelTemplateList.push(value);
      }
    },
    deleteModelTemplateById(id: string, options?: { showMessage?: boolean; onSuccess?: Function }) {
      if (!id) {
        return;
      }
      const showMessage = options?.showMessage !== false;
      const { modelTemplateList } = this;
      for (let j = 0; j < modelTemplateList.length; j++) {
        const modelTemplateGroup = modelTemplateList[j].options;
        for (let i = 0; i < modelTemplateGroup.length; i++) {
          const tpl = modelTemplateGroup[i];
          if (tpl.id === id) {
            if (tpl.builtIn) {
              showMessage && message.warn('该模板为内置模板，不可删除');
            } else {
              modelTemplateGroup.splice(i, 1);
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
