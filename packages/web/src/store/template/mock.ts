import { merge } from 'lodash';
import { defineStore } from 'pinia';
import { randomChar } from '@api-helper/core/lib/utils/util';

import {
  MOCK_CUSTOM_GROUP_ID,
  DEFAULT_SELECT_MOCK_TPL_ID,
} from '@/constants';
import message from '@/utils/message';
import { getSelectOptionList } from '@/utils';
import { Template } from '@/store/template/interface';
import mockTemplateList from '@/constants/template/mock';
import SelectOptionGroup from '@/constants/select-option-group';

const useMockTemplate = defineStore('mock-template', {
  persist: true,
  state: (): {
    mockTemplateList: Array<SelectOptionGroup>,
  } => ({
    mockTemplateList,
  }),
  getters: {
    mockTemplateMap(state): Map<string, Template> {
      const templateMap = new Map();
      getSelectOptionList(state.mockTemplateList).forEach((itm) => {
        templateMap.set(itm.id, itm);
      });
      return templateMap;
    },
    customMockTemplateList(state): Array<Template> {
      const row = state.mockTemplateList.find((item) => item.id === MOCK_CUSTOM_GROUP_ID);
      return (row?.options ?? []) as Array<Template>;
    },
    defaultMockTemplate(state): Template | undefined {
      let result;
      for (const itm of getSelectOptionList(state.mockTemplateList)) {
        if (itm.id === DEFAULT_SELECT_MOCK_TPL_ID) {
          result = itm;
          break;
        }
      }
      return result as Template;
    },
  },
  actions: {
    saveMockTemplate(value: Template): string {
      const apiTemplate = this.mockTemplateMap.get(value.id);
      // 更新操作
      if (apiTemplate) {
        merge(apiTemplate, value);
        return apiTemplate.id;
      }
      // 新增
      value.id = value.id ? value.id : randomChar();
      let apiTemplateGroup = this.mockTemplateList.find((item) => item.id === MOCK_CUSTOM_GROUP_ID);
      // 不存在，创建自定义分组
      if (!apiTemplateGroup) {
        apiTemplateGroup = new SelectOptionGroup('自定义', {
          id: MOCK_CUSTOM_GROUP_ID,
        });
        this.mockTemplateList.push(apiTemplateGroup);
      }
      apiTemplateGroup.options.push(value);
      return value.id;
    },
    addMockTemplateGroup(value: SelectOptionGroup) {
      const { mockTemplateList } = this;
      if (!mockTemplateList.find((t) => t.id === value.id)) {
        mockTemplateList.push(value);
      }
    },
    deleteMockTemplateById(id: string, options?: { showMessage?: boolean; onSuccess?: Function }) {
      if (!id) {
        return;
      }
      const showMessage = options?.showMessage !== false;
      const { mockTemplateList } = this;
      for (let j = 0; j < mockTemplateList.length; j++) {
        const apiTemplateGroup = mockTemplateList[j].options;
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

export default useMockTemplate;
