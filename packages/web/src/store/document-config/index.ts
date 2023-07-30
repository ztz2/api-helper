import { defineStore } from 'pinia';
import { merge, omit } from 'lodash';
import { useRoute } from 'vue-router';
import { randomChar } from '@api-helper/core/lib/utils/util';

import { createDocumentConfig, DocumentConfig } from '@/store/document-config/interface';

const useDocumentConfig = defineStore('document-config', {
  persist: true,
  state: (): {
    documentConfigList: Array<DocumentConfig>
  } => ({
    documentConfigList: [],
  }),
  actions: {
    saveDocumentConfig(value: DocumentConfig) {
      const documentConfig = this.documentConfigList.find((itm) => itm.id === value.id || itm.url === value.url);
      if (documentConfig) {
        merge(documentConfig, omit(value, ['id']));
      } else {
        value.id = value.id ? value.id : randomChar();
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
      return p ?? createDocumentConfig();
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
