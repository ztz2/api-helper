import { merge } from 'lodash';
import { defineStore } from 'pinia';
import { randomChar } from '@api-helper/core/lib/utils/util';

import {
  API_CUSTOM_GROUP_ID,
  DEFAULT_SELECT_API_TPL_ID,
} from '@/constants';
import message from '@/utils/message';
import { getSelectOptionList } from '@/utils';
import { Template } from '@/store/template/interface';
import apiTemplateList from '@/constants/template/api';
import SelectOptionGroup from '@/constants/select-option-group';

const useApiTemplate = defineStore('api-template', {
  persist: true,
  state: (): {
    apiTemplateList: Array<SelectOptionGroup>,
  } => ({
    apiTemplateList,
  }),
  getters: {
    apiTemplateMap(state): Map<string, Template> {
      const templateMap = new Map();
      getSelectOptionList(state.apiTemplateList).forEach((itm) => {
        templateMap.set(itm.id, itm);
      });
      return templateMap;
    },
    customApiTemplateList(state): Array<Template> {
      const row = state.apiTemplateList.find((item) => item.id === API_CUSTOM_GROUP_ID);
      return (row?.options ?? []) as Array<Template>;
    },
    defaultApiTemplate(state): Template | undefined {
      let result;
      for (const itm of getSelectOptionList(state.apiTemplateList)) {
        if (itm.id === DEFAULT_SELECT_API_TPL_ID) {
          result = itm;
          break;
        }
      }
      return result as Template;
    },
  },
  actions: {
    saveApiTemplate(value: Template): string {
      const apiTemplate = this.apiTemplateMap.get(value.id);
      // 更新操作
      if (apiTemplate) {
        merge(apiTemplate, value);
        return apiTemplate.id;
      }
      // 新增
      value.id = value.id ? value.id : randomChar();
      let apiTemplateGroup = this.apiTemplateList.find((item) => item.id === API_CUSTOM_GROUP_ID);
      // 不存在，创建自定义分组
      if (!apiTemplateGroup) {
        apiTemplateGroup = new SelectOptionGroup('自定义', {
          id: API_CUSTOM_GROUP_ID,
        });
        this.apiTemplateList.push(apiTemplateGroup);
      }
      apiTemplateGroup.options.push(value);
      return value.id;
    },
    addApiTemplateGroup(value: SelectOptionGroup) {
      const { apiTemplateList } = this;
      if (!apiTemplateList.find((t) => t.id === value.id)) {
        apiTemplateList.push(value);
      }
    },
    deleteApiTemplateById(id: string, options?: { showMessage?: boolean; onSuccess?: Function }) {
      if (!id) {
        return;
      }
      const showMessage = options?.showMessage !== false;
      const { apiTemplateList } = this;
      for (let j = 0; j < apiTemplateList.length; j++) {
        const apiTemplateGroup = apiTemplateList[j].options;
        for (let i = 0; i < apiTemplateGroup.length; i++) {
          const tpl = apiTemplateGroup[i];
          if (tpl.id === id) {
            if (tpl.builtIn) {
              showMessage && message.warn('该模板为内置模板，不可删除');
            } else {
              apiTemplateGroup.splice(i, 1);
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

export default useApiTemplate;
