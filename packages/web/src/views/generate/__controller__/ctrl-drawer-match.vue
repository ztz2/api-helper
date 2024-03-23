<template>
  <apih-drawer
    ref="dialogRef"
    width="75%"
    cancel-text="返回"
    :form-component="Form"
    hide-footer
  >
  </apih-drawer>
</template>

<script lang="ts" setup>
import {
  ref,
  defineExpose,
} from 'vue';
import { APIHelper } from '@api-helper/core/es/lib/types';

import Form from '@/views/generate/__components__/form-match.vue';

type OpenDataType = {
  api?: APIHelper.API
};
const dialogRef = ref();
const loading = ref(false);
const codeList = ref<Array<APIHelper.TemplateContent>>([]);

const dialogOpenData = ref<OpenDataType>({
  api: undefined,
});

function close() {
  dialogRef.value.close();
}

function open(config: DialogOpenConfig, data: OpenDataType) {
  dialogRef.value.open({
    ...config,
    formComponentProps: {
      api: data.api,
    },
  });
  dialogOpenData.value.api = data.api;
}

defineExpose({
  open,
  close,
});
</script>
<style lang="scss">

</style>
