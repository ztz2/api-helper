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

import message from '@/utils/message';
import { useFileDirectory } from '@/store';
import Form from '../__components__/form-export-file-template.vue';

const emit = defineEmits(['success']);

const { saveFileDirectory } = useFileDirectory();

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
    const id = saveFileDirectory(await dialogRef.value.getFormRef().validate());
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
