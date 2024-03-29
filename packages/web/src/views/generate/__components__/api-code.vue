<template>
  <a-spin
    tip="加载中..."
    class="ztz-spin"
    :loading="loading"
  >
    <apih-code :code="currentCode" :language="language" />
  </a-spin>
</template>
<script lang="ts" setup>
import {
  ref,
  toRef,
  toRefs,
  watch,
  PropType,
  onMounted,
  defineProps,
} from 'vue';
import { merge } from 'lodash';
import { APIHelper } from '@api-helper/core';
import { getSchema } from '@api-helper/core/es/lib/helpers';
import { renderTemplate } from '@api-helper/template';

import {
  useDocumentConfig,
  useApiTemplate,
  useModelTemplate, useMockTemplate,
} from '@/store';
import { Template } from '@/store/template/interface';

const props = defineProps({
  api: {
    type: Object as PropType<APIHelper.API>,
    default: () => ({}),
  },
  type: {
    type: String as PropType<'api' | 'request' | 'response' | 'mock'>,
    default: 'api',
  },
  visible: {
    type: [Boolean, null, undefined] as PropType<boolean | null | undefined>,
    default: null,
  },
  language: String,
});

const { currentDocumentConfig } = toRefs(useDocumentConfig());
const { defaultApiTemplate } = toRefs(useApiTemplate());
const { defaultModelTemplate } = toRefs(useModelTemplate());
const { defaultMockTemplate } = toRefs(useMockTemplate());

const loading = ref(false);
const currentCode = ref('');
const api = toRef(props, 'api');
let isBindListener = false;
async function updateCodeContent() {
  let list: any = [];
  switch (props.type) {
    case 'api': {
      if (Object.keys(api.value).length === 0) {
        loading.value = false;
        currentCode.value = '// 暂无模版数据展示.';
        return;
      }

      loading.value = true;
      const res = await renderTemplate(defaultApiTemplate.value as Template, {
        apiList: [api.value],
      }, {
        ...currentDocumentConfig.value,
        onlyApiFunc: true,
      });
      loading.value = false;
      currentCode.value = res?.[0]?.content ?? '';
      break;
    }
    case 'request': {
      const requestDataSchema = api.value?.requestDataSchema;
      const requestDataSchemaList = requestDataSchema ? requestDataSchema.type === 'array' ? [requestDataSchema] : requestDataSchema.params : [];
      const params = {
        api: api.value,
        requestDataSchemaList,
        responseDataSchemaList: [],
      };
      loading.value = true;
      const res = await renderTemplate(defaultModelTemplate.value as Template, params, currentDocumentConfig.value);
      loading.value = false;
      currentCode.value = res?.[0]?.content ?? '';
      break;
    }
    case 'response': {
      const { dataKey } = currentDocumentConfig.value;
      let { responseDataSchema } = api.value;
      if (dataKey) {
        responseDataSchema = getSchema(responseDataSchema, dataKey);
      }
      const responseDataSchemaList = responseDataSchema ? responseDataSchema.type === 'array' ? [responseDataSchema] : responseDataSchema.params : [];

      const params = {
        api: api.value,
        requestDataSchemaList: [],
        responseDataSchemaList,
      };
      loading.value = true;
      const res = await renderTemplate(defaultModelTemplate.value, params, currentDocumentConfig.value);
      loading.value = false;
      currentCode.value = res?.[1]?.content ?? '';
      break;
    }
    case 'mock':
      loading.value = true;
      list = await renderTemplate(defaultMockTemplate.value as Template, {
        apiList: [api.value],
      }, merge({
        ...currentDocumentConfig.value,
        prettierOptions: {
          semi: false,
          bracketSameLine: false,
        },
      }));
      list.forEach((item: any) => {
        item.content = item.content.startsWith(';') ? item.content.slice(1, item.content.length) : item.content;
      });
      loading.value = false;
      currentCode.value = list?.[0]?.content ?? '';
      break;
  }
}

function bindListener() {
  if (!isBindListener) {
    isBindListener = true;
    switch (props.type) {
      case 'api': {
        watch(() => api.value, updateCodeContent, { immediate: true });
        break;
      }
      case 'request': {
        watch(() => api.value.requestDataSchema, updateCodeContent, { immediate: true });
        break;
      }
      case 'response': {
        watch(() => api.value.responseDataSchema, updateCodeContent, { immediate: true });
        break;
      }
      case 'mock': {
        watch(() => api.value.responseDataSchema, updateCodeContent, { immediate: true });
        break;
      }
    }
    // 项目配置变化更新代码
    watch(() => currentDocumentConfig.value, updateCodeContent, { deep: true });
  }
}

onMounted(() => {
  if (props.visible != null) {
    watch(() => props.visible, (val) => {
      if (val) {
        bindListener();
      }
    }, { immediate: true });
  } else {
    bindListener();
  }
});
</script>
