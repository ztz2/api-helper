import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import useProject from './project';
import useApiTemplate from './template/api';
import useModelTemplate from './template/model';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export {
  useProject,
  useApiTemplate,
  useModelTemplate,
};

export default pinia;
