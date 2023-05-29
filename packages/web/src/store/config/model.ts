import { omit, pick } from 'lodash';
import { defineStore } from 'pinia';
import { RenderModelConfig } from '@/views/generate/interface';

const useModelConfig = defineStore('model-config', {
  persist: true,
  state: (): {
    projectId: string;
    modelConfigMap: {
      [projectId: string]: RenderModelConfig
    },
    modelConfig: RenderModelConfig
  } => ({
    projectId: '',
    modelConfigMap: {},
    modelConfig: new RenderModelConfig(),
  }),
  actions: {
    toggleModelConfig(id: string) {
      this.projectId = id;
      if (this.modelConfigMap[id] == null) {
        this.modelConfigMap[id] = new RenderModelConfig();
      }
      this.modelConfig = this.modelConfigMap[id];
    },
    updateModelConfig(value: RenderModelConfig) {
      value = { ...omit(pick(value, Object.keys(new RenderModelConfig())), ['apiId']) } as RenderModelConfig;
      value.apiId = '';
      this.modelConfig = value;
      this.modelConfigMap[this.projectId] = value;
    },
  },
});

export default useModelConfig;
