import { nanoid } from 'nanoid';
import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';
import { DocumentConfig } from '@/store/document-config/interface';

const useDocumentConfig = defineStore('document-config', {
  persist: true,
  state: (): {
    documentConfigList: Array<DocumentConfig>
  } => ({
    documentConfigList: [],
  }),
  actions: {
    saveDocumentConfig(value: DocumentConfig) {
      const index = this.documentConfigList.findIndex((itm) => itm.id === value.id);
      if (index !== -1) {
        this.documentConfigList.splice(index, 1, value);
      } else {
        if (!value.id) {
          value.id = nanoid();
        }
        this.documentConfigList.push(value);
      }
    },
    deleteDocumentConfig(value: (DocumentConfig | string) | Array<DocumentConfig | string>) {
      value = Array.isArray(value) ? value : [value];
      for (const val of value) {
        const id = typeof val === 'string' ? val : val.id;
        const index = this.documentConfigList.findIndex((itm) => itm.id === id);
        index !== -1 && this.documentConfigList.splice(index, 1);
      }
    },
  },
  getters: {
    currentDocumentConfig(state): DocumentConfig {
      const route = useRoute();
      const { id } = route.query;
      const p = state.documentConfigList.find((itm) => itm.id === id);
      return p ?? new DocumentConfig();
    },
    currentDocumentConfigDataKey(state): string {
      const route = useRoute();
      const { id } = route.query;
      const p = state.documentConfigList.find((itm) => itm.id === id);
      return p?.dataKey ?? '';
    },
  },
});

export default useDocumentConfig;
