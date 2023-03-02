import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import useProject from './project';
import useApiTemplate from './template/api';
import useModelTemplate from './template/model';
import useApiConfig from './config/api';
import useModelConfig from './config/model';
import useGenerateAllApiConfig from './config/generate-all-api';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export {
  useProject,
  useApiTemplate,
  useModelTemplate,
  useApiConfig,
  useModelConfig,
  useGenerateAllApiConfig
};

export default pinia;
