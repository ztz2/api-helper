<template>
  <apih-drawer
    ref="dialogRef"
    width="500px"
    cancel-text="返回"
    :span="[24, 0]"
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
  defineEmits,
  defineExpose,
} from 'vue';

import { randomChar } from '@/utils';
import { useFileDirectory } from '@/store';
import Form from '../__components__/form/form-export-file-directory.vue';
import { DrawerOpenConfig } from '@/components/apih-drawer/interface';

const emit = defineEmits(['success']);

const { saveFileDirectory } = useFileDirectory();

const dialogRef = ref();
const loading = ref(false);

function close() {
  dialogRef.value.close();
}

function open(config: DrawerOpenConfig) {
  dialogRef.value.open(config);
}

async function handleSave() {
  const data = await dialogRef.value.getFormRef().validate();
  if (!data.id) {
    data.id = randomChar(16);
  }
  emit('success', data);
  close();
}
defineExpose({
  open,
  close,
});
</script>
