import { pick } from 'lodash';
import { defineStore } from 'pinia';
import { RenderAPIConfig } from '@/views/generate/interface';

const useApiConfig = defineStore('api-config', {
  persist: true,
  state: (): {
    projectId: string,
    apiConfigMap: {
      [projectId: string]: RenderAPIConfig
    },
    apiConfig: RenderAPIConfig
  } => ({
    projectId: '',
    apiConfigMap: {},
    apiConfig: new RenderAPIConfig()
  }),
  actions: {
    toggleApiConfig(id: string) {
      this.projectId = id;
      if (this.apiConfigMap[id] == null) {
        this.apiConfigMap[id] = new RenderAPIConfig();
      }
      this.apiConfig = this.apiConfigMap[id];
    },
    updateApiConfig(value: RenderAPIConfig) {
      this.apiConfig = value;
      this.apiConfigMap[this.projectId] = pick(value, Object.keys(new RenderAPIConfig())) as RenderAPIConfig;
    }
  },
});

export default useApiConfig;
