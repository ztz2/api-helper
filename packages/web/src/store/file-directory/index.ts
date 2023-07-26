import {
  omit,
  merge,
} from 'lodash';
import { nanoid } from 'nanoid';
import { defineStore } from 'pinia';

import message from '@/utils/message';
import { getSelectOptionList } from '@/utils';
import { FileDirectoryConfig } from './interface';
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
    fileDirectoryMap(state): Map<string, FileDirectoryConfig> {
      const map = new Map();
      getSelectOptionList(state.fileDirectoryList).forEach((itm) => {
        map.set(itm.id, itm);
      });
      return map;
    },
  },
  actions: {
    saveFileDirectory(value: FileDirectoryConfig): string {
      debugger;
      const fileDirectory = this.fileDirectoryMap.get(value.id);
      // 更新操作
      if (fileDirectory) {
        merge(fileDirectory, omit(value, ['id']));
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
          if (tpl.value === value) {
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
  },
});

export default useFileDirectory;
