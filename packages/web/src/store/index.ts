import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import useProject from './project';
import useApiTemplate from './template/api';
import useModelTemplate from './template/model';
import useExportFile from './export-file';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export {
  useProject,
  useApiTemplate,
  useModelTemplate,
  useExportFile,
};

export default pinia;
