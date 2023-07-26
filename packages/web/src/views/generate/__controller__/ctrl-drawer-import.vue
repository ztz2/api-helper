<template>
  <apih-drawer
    ref="dialogRef"
    width="30%"
    cancel-text="返回"
    :form-component="Form"
    hide-ok
  >
    <template #footer>
      <a-button type="primary" :loading="loading" @click="handleOk">确定</a-button>
    </template>
  </apih-drawer>
</template>

<script lang="ts" setup>
import {
  h,
  ref,
  toRefs,
  defineEmits,
  defineExpose,
} from 'vue';

import { aes } from '@/utils/crypto';
import message from '@/utils/message';
import Form from '../__components__/form/form-import.vue';
import { useApiTemplate, useModelTemplate } from '@/store';
import { DrawerOpenConfig } from '@/components/apih-drawer/interface';
import { SECRET_KEY, API_CUSTOM_GROUP_ID, MODEL_CUSTOM_GROUP_ID } from '@/constants';

const emit = defineEmits(['success']);
const { saveApiTemplate } = toRefs(useApiTemplate());
const { saveModelTemplate } = toRefs(useModelTemplate());

const dialogRef = ref();
const loading = ref(false);

function close() {
  dialogRef.value.close();
}

function open(config: DrawerOpenConfig) {
  dialogRef.value.open(config);
  loading.value = false;
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
  dialogRef.value.execAsyncTask(async () => {
    const data = await dialogRef.value.getFormRef().validate();
    loading.value = true;
    const fileList = data?.fileList ?? [];
    const successNameList: string[] = [];
    const errorFile: File[] = [];
    const readerTextMap = new Map();
    for (const item of fileList) {
      const { file } = item;
      try {
        const codeText = aes.decrypt(await textFileReader(file) as string, SECRET_KEY);
        readerTextMap.set(item, codeText);
      } catch {
        errorFile.push(item);
      }
    }

    let hasImport = false;
    for (const [item, codeText] of readerTextMap) {
      try {
        const code: Recordable = JSON.parse(codeText);
        const apiCustomTemplateList = code?.[API_CUSTOM_GROUP_ID] ?? [];
        const modelCustomTemplateList = code?.[MODEL_CUSTOM_GROUP_ID] ?? [];
        if (!hasImport) {
          hasImport = apiCustomTemplateList.length > 0 || modelCustomTemplateList.length > 0;
        }
        for (const item of apiCustomTemplateList) {
          saveApiTemplate.value(item);
        }
        for (const item of modelCustomTemplateList) {
          saveModelTemplate.value(item);
        }
        successNameList.push(item.file.name);
      } catch {
        errorFile.push(item);
      }
    }
    return {
      errorFile,
      successNameList,
    };
  }).then((res: Recordable) => {
    const { errorFile, successNameList } = res;
    if (errorFile?.length > 0) {
      errorFile.forEach((item: Recordable) => item.status = 'error');
      dialogRef.value.getFormRef().setFormModel({
        fileList: errorFile,
      });
    } else {
      close();
    }
    let successText = successNameList.join('；');
    successText = successText.length > 0 ? `导入成功: ${successText}` : '';
    let errorText = errorFile.map((item: Recordable) => item.file.name).join('；');
    errorText = errorText.length > 0 ? `导入失败: ${errorText}` : '';
    message.info({
      duration: 25000,
      content: h(
        'div',
        { style: 'text-align:left;line-height:20px;' },
        [successText, errorText].filter(Boolean).map((text: string) => h('div', text)),
      ) as unknown as string,
    });
  }).finally(() => {
    loading.value = false;
  });
}

defineExpose({
  open,
  close,
});
</script>
<style lang="scss">

</style>
