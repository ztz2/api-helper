import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import useDocumentConfig from '@/store/document-config';
import useApiTemplate from './template/api';
import useMockTemplate from './template/mock';
import useModelTemplate from './template/model';
import useFileDirectory from '@/store/file-directory';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export {
  useDocumentConfig,
  useApiTemplate,
  useMockTemplate,
  useModelTemplate,
  useFileDirectory,
};

export default pinia;
