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

import message from '@/utils/message';
import { useExportFile, useProject } from '@/store';
import Form from '../form/form-export-file-template.vue';
import { DialogOpenConfig } from '@/components/apih-dialog/interface';

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
  dialogRef.value.execAsyncTask(async () => {
    const id = save(await dialogRef.value.getFormRef().validate());
    message.success('保存成功');
    close();
    emit('success', id);
  });
}

defineExpose({
  open,
  close,
});
</script>
