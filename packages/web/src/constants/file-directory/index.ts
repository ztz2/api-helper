import SelectOptionGroup from '@/constants/select-option-group';
import {
  createFileDirectory,
  createFileDirectoryConfig,
} from '@/store/file-directory/interface';
import { DEFAULT_SELECT_FILE_DIRECTORY_ID } from '@/constants';

export default [
  new SelectOptionGroup('系统内置配置', {
    id: 'ee7bf4244902690b',
    options: [
      createFileDirectory({
        id: DEFAULT_SELECT_FILE_DIRECTORY_ID,
        title: '文件模板配置例子',
        builtIn: true,
        fileDirectoryConfigList: [
          createFileDirectoryConfig({
            title: '__components__',
            id: '667e4a4c3bf34d6b',
            isFolder: true,
            children: [
              createFileDirectoryConfig({
                title: 'form-cud.vue',
                id: 'd1f27e4e8d872575',
              }),
            ],
          }),
          createFileDirectoryConfig({
            title: '__controller__',
            id: '2f9e81551c4712d9',
            isFolder: true,
            children: [
              createFileDirectoryConfig({
                title: 'ctrl-drawer-cud.vue',
                id: '755a87c65374e8f7',
              }),
            ],
          }),
          createFileDirectoryConfig({
            title: 'list.vue',
            id: 'f58e9f9e5a3b6543',
          }),
        ],
      }),
    ],
  }),
] as Array<SelectOptionGroup>;
