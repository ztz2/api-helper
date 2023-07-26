<template>
  <apih-drawer
    ref="dialogRef"
    width="100%"
    cancel-text="返回"
    :form-component="Form"
    hide-ok
  >
    <template #footer>
      <a-button type="primary" @click="handleSave">保存</a-button>
    </template>
  </apih-drawer>
</template>

<script lang="ts" setup>
import {
  ref,
  toRefs,
  defineExpose,
} from 'vue';
import { merge, cloneDeep } from 'lodash';

import message from '@/utils/message';
import { useDocumentConfig } from '@/store';
import Form from '../__components__/form/form-prettier.vue';
import { DrawerOpenConfig } from '@/components/apih-drawer/interface';

const dialogRef = ref();

const { currentDocumentConfig } = toRefs(useDocumentConfig());

function close() {
  dialogRef.value.close();
}

function open(config: DrawerOpenConfig) {
  dialogRef.value.open(merge(config, {
    formComponentProps: {
      data: cloneDeep(currentDocumentConfig.value),
    },
  }));
}

async function handleSave() {
  const data = await dialogRef.value.getFormRef().validate();
  currentDocumentConfig.value.prettierOptions = data.prettierOptions;
  message.success('已保存');
  close();
}

defineExpose({
  open,
  close,
});
</script>
