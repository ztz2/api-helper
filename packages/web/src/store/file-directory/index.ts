import {
  omit,
  merge,
} from 'lodash';
import { defineStore } from 'pinia';
import { treeForEach } from '@api-helper/core/lib/utils/tree';
import { randomChar } from '@api-helper/core/lib/utils/util';

import message from '@/utils/message';
import { getSelectOptionList } from '@/utils';
import { Template } from '@/store/template/interface';
import fileDirectoryList from '@/constants/file-directory';
import { FILE_DIRECTORY_CUSTOM_GROUP_ID } from '@/constants';
import SelectOptionGroup from '@/constants/select-option-group';
import { FileDirectory, FileDirectoryConfig } from './interface';

const useFileDirectory = defineStore('file-directory', {
  persist: true,
  state: (): {
    fileDirectoryList: Array<SelectOptionGroup>,
  } => ({
    fileDirectoryList,
  }),
  getters: {
    fileDirectoryMap(state): Map<string, FileDirectory> {
      const map = new Map();
      getSelectOptionList(state.fileDirectoryList).forEach((itm) => {
        map.set(itm.id, itm);
      });
      return map;
    },
    customFileDirectoryList(state): Array<Template> {
      const row = state.fileDirectoryList.find((item) => item.id === FILE_DIRECTORY_CUSTOM_GROUP_ID);
      return (row?.options ?? []) as Array<Template>;
    },
  },
  actions: {
    saveFileDirectory(value: FileDirectory, isAppUpdate = false): string {
      const fileDirectory = this.fileDirectoryMap.get(value.id);
      // 更新操作
      if (fileDirectory) {
        if (isAppUpdate) {
          const fileDirectoryConfigMap = new Map();
          treeForEach(fileDirectory.fileDirectoryConfigList, (c: FileDirectoryConfig) => {
            fileDirectoryConfigMap.set(c.id, c);
          }, 'children');
          treeForEach(value.fileDirectoryConfigList, (c: FileDirectoryConfig) => {
            const record = fileDirectoryConfigMap.get(c.id);
            if (record) {
              c.templateId = record.templateId;
              c.templateContentIndex = record.templateContentIndex;
            }
          }, 'children');
        }
        merge(fileDirectory, value);
        return fileDirectory.id;
      }
      // 新增
      value.id = value.id ? value.id : randomChar();
      let fileDirectoryGroup = this.fileDirectoryList.find((item) => item.id === FILE_DIRECTORY_CUSTOM_GROUP_ID);
      // 不存在，创建自定义分组
      if (!fileDirectoryGroup) {
        fileDirectoryGroup = new SelectOptionGroup('自定义', {
          id: FILE_DIRECTORY_CUSTOM_GROUP_ID,
        });
        this.fileDirectoryList.push(fileDirectoryGroup);
      }
      fileDirectoryGroup.options.push(value);
      return value.id;
    },
    addFileDirectoryGroup(value: SelectOptionGroup) {
      const { fileDirectoryList } = this;
      if (!fileDirectoryList.find((t) => t.id === value.id)) {
        fileDirectoryList.push(value);
      }
    },
    deleteFileDirectoryById(value: string, options?: { showMessage?: boolean; onSuccess?: Function }) {
      if (!value) {
        return;
      }
      const showMessage = options?.showMessage !== false;
      const { fileDirectoryList } = this;
      for (let j = 0; j < fileDirectoryList.length; j++) {
        const fileDirectoryGroup = fileDirectoryList[j].options;
        for (let i = 0; i < fileDirectoryGroup.length; i++) {
          const tpl = fileDirectoryGroup[i];
          if (tpl.id === value) {
            if (tpl.builtIn) {
              showMessage && message.warn('该模板为内置模板，不可删除');
            } else {
              fileDirectoryGroup.splice(i, 1);
              showMessage && message.success('已删除');
              options?.onSuccess?.(tpl);
            }
            return;
          }
        }
      }
    },
    // 更新已经选择模板
    updateFileDirectoryConfigTemplate(fileDirectoryConfigList: Array<FileDirectoryConfig> = []) {
      const { fileDirectoryList } = this;
      const fileDirectoryConfigMap = new Map<string, FileDirectoryConfig>();
      treeForEach(fileDirectoryConfigList, (item: FileDirectoryConfig) => {
        fileDirectoryConfigMap.set(item.id, item);
      }, 'children');
      for (const fc of fileDirectoryList) {
        for (const itm of fc.options) {
          treeForEach(itm.fileDirectoryConfigList, (fileDirectoryConfig: FileDirectoryConfig) => {
            const newConfig = fileDirectoryConfigMap.get(fileDirectoryConfig.id);
            if (newConfig) {
              if ('templateId' in newConfig) {
                fileDirectoryConfig.templateId = newConfig?.templateId ?? '';
              }
              if ('templateContentIndex' in newConfig) {
                fileDirectoryConfig.templateContentIndex = newConfig?.templateContentIndex ?? 0;
              }
            }
          }, 'children');
        }
      }
    },
  },
});

export default useFileDirectory;
