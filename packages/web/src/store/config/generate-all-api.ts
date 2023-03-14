import { pick } from 'lodash';
import { defineStore } from 'pinia';
import { GenerateAllApiConfig } from '@/views/generate/interface';

const useGenerateAllApiConfig = defineStore('generate-all-api-config', {
  persist: true,
  state: (): {
    projectId: string;
    generateAllApiConfigMap: {
      [projectId: string]: GenerateAllApiConfig
    },
    generateAllApiConfig: GenerateAllApiConfig
  } => ({
    projectId: '',
    generateAllApiConfigMap: {},
    generateAllApiConfig: new GenerateAllApiConfig(),
  }),
  actions: {
    toggleGenerateAllApiConfig(id: string) {
      this.projectId = id;
      if (this.generateAllApiConfigMap[id] == null) {
        this.generateAllApiConfigMap[id] = new GenerateAllApiConfig();
      }
      this.generateAllApiConfig = this.generateAllApiConfigMap[id];
    },
    updateGenerateAllApiConfig(value: GenerateAllApiConfig) {
      this.generateAllApiConfig = value;
      this.generateAllApiConfigMap[this.projectId] = pick(value, Object.keys(new GenerateAllApiConfig())) as GenerateAllApiConfig;
    },
  },
});

export default useGenerateAllApiConfig;
