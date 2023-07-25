<template>
  <apih-dialog
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
  </apih-dialog>
</template>

<script lang="ts" setup>
import {
  ref,
  defineEmits,
  defineExpose,
} from 'vue';

import { useExportFile, useProject } from '@/store';
import Form from '../form/form-export-file-directory.vue';
import { DialogOpenConfig } from '@/components/apih-dialog/interface';
import { randomChar } from '@/utils';

const emit = defineEmits(['success']);

const { save } = useExportFile();
const { currentProject } = useProject();

const dialogRef = ref();
const loading = ref(false);

function close() {
  dialogRef.value.close();
}

function open(config: DialogOpenConfig) {
  dialogRef.value.open(config);
}

async function handleSave() {
  const data = await dialogRef.value.getFormRef().validate();
  if (!data.value) {
    data.value = randomChar(16);
  }
  console.log(data);
  emit('success', data);
  close();
}
defineExpose({
  open,
  close,
});
</script>
