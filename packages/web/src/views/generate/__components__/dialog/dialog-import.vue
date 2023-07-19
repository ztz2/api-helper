<template>
  <apih-dialog
      ref="dialogRef"
      width="30%"
      cancel-text="返回"
      hide-ok
      :form-component="Form"
  >
    <template #footer>
      <a-button type="primary" @click="handleOk">确定</a-button>
    </template>
  </apih-dialog>
</template>

<script lang="ts" setup>
import {
  ref,
  nextTick,
  defineExpose,
  defineEmits,
} from 'vue';
import { Message } from '@arco-design/web-vue';

import Form from '../form/form-import.vue';
import { useApiTemplate, useModelTemplate } from '@/store';
import { DialogOpenConfig } from '@/components/apih-dialog/interface';
import { API_CUSTOM_TEMPLATE_ID, MODEL_CUSTOM_TEMPLATE_ID } from '@/constants';

const emit = defineEmits(['success']);
const apiTemplateStore = useApiTemplate();
const modelTemplateStore = useModelTemplate();

const dialogRef = ref();

function close() {
  dialogRef.value.close();
}

function open(config: DialogOpenConfig) {
  dialogRef.value.open(config);
}

function textFileReader(file: File) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => {
      resolve(fr.result);
    };
    fr.onerror = reject;
    fr.readAsText(file);
  });
}

async function handleOk() {
  const data = await dialogRef.value.getFormRef().validate();
  const fileList = data?.fileList ?? [];
  const errorFile: File[] = [];
  const readerTextMap = new Map();
  for (const file of fileList) {
    try {
      const codeText = await textFileReader(file);
      readerTextMap.set(file, codeText);
    } catch {
      errorFile.push(file);
    }
  }

  let hasImport = false;
  for (const [file, codeText] of readerTextMap) {
    try {
      const code: Recordable = JSON.parse(codeText);
      const apiCustomTemplateList = code?.[API_CUSTOM_TEMPLATE_ID] ?? [];
      const modelCustomTemplateList = code?.[MODEL_CUSTOM_TEMPLATE_ID] ?? [];
      if (!hasImport) {
        hasImport = apiCustomTemplateList.length > 0 || modelCustomTemplateList.length > 0;
      }
      for (const item of apiCustomTemplateList) {
        apiTemplateStore.save(item);
      }
      for (const item of modelCustomTemplateList) {
        modelTemplateStore.save(item);
      }
    } catch {
      errorFile.push(file);
    }
  }

  Message.success('操作成功');
  close();
}

defineExpose({
  open,
  close,
});
</script>
<style lang="scss">

</style>
