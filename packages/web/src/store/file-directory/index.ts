import {
  omit,
  merge,
} from 'lodash';
import { nanoid } from 'nanoid';
import { defineStore } from 'pinia';
import { treeForEach } from '@api-helper/core/lib/utils/tree';

import message from '@/utils/message';
import { getSelectOptionList } from '@/utils';
import { Template } from '@/store/template/interface';
import { FileDirectory, FileDirectoryConfig } from './interface';
import fileDirectoryList from '@/constants/file-directory';
import { FILE_DIRECTORY_CUSTOM_GROUP_ID } from '@/constants';
import SelectOptionGroup from '@/constants/select-option-group';

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
    saveFileDirectory(value: FileDirectory): string {
      const fileDirectory = this.fileDirectoryMap.get(value.id);
      // 更新操作
      if (fileDirectory) {
        for (const fdl of this.fileDirectoryList) {
          for (let i = 0; i < fdl.options.length; i++) {
            const itm = fdl.options[i];
            if (itm.id === value.id) {
              const row = merge({}, omit(fileDirectory, 'fileDirectoryConfigList'), omit(value, ['id']));
              fdl.options.splice(i, 1, row);
              return fileDirectory.id;
            }
          }
        }
        return fileDirectory.id;
      }
      // 新增
      value.id = value.id ? value.id : nanoid();
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
    updateFileDirectoryConfigTemplateId(fileDirectoryConfigList: Array<FileDirectoryConfig> = []) {
      const { fileDirectoryList } = this;
      const baseMap = new Map<string, FileDirectoryConfig>();
      treeForEach(fileDirectoryConfigList, (item: FileDirectoryConfig) => {
        baseMap.set(item.id, item);
      }, 'children');
      for (const fc of fileDirectoryList) {
        for (const itm of fc.options) {
          treeForEach(itm.fileDirectoryConfigList, (fdc: FileDirectoryConfig) => {
            const bm = baseMap.get(fdc.id);
            if (bm) {
              fdc.templateId = bm?.templateId ?? '';
              fdc.templateContentIndex = bm?.templateContentIndex ?? 0;
            }
          }, 'children');
        }
      }
    },
  },
});

export default useFileDirectory;
