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
            title: 'apih-create-file-directory',
            isFolder: true,
            children: [
              createFileDirectoryConfig({
                isFolder: true,
                title: '__components__',
                children: [
                  createFileDirectoryConfig({
                    title: 'form-cud.vue',
                  }, true),
                ],
              }, true),
              createFileDirectoryConfig({
                isFolder: true,
                title: '__controller__',
                children: [
                  createFileDirectoryConfig({
                    title: 'ctrl-drawer-cud.vue',
                  }, true),
                ],
              }, true),
              createFileDirectoryConfig({
                title: 'list.vue',
              }, true),
            ],
          }, true),
        ],
      }),
    ],
  }),
] as Array<SelectOptionGroup>;
