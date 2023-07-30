<template>
  <apih-drawer
    ref="dialogRef"
    :hide-ok="true"
    :form-component="Form"
    width="50%"
    success-msg="操作成功"
    @success="emit('success')"
  >
    <template #footer>
      <a-button type="primary" :loading="loadingSave" @click="handleSave()">保存</a-button>
    </template>
  </apih-drawer>
</template>

<script setup lang="ts">
import { pick } from 'lodash';
import {
  ref,
  toRefs,
  nextTick,
  defineEmits,
  defineExpose,
} from 'vue';
import urlParse from 'url-parse';
import { Message } from '@arco-design/web-vue';

import { getDocs } from '@/api';
import Form from '../__components__/form-cu.vue';
import { useDocumentConfig } from '@/store';
import { createDocumentConfig } from '@/store/document-config/interface';

const emit = defineEmits(['success']);
const { saveDocumentConfig } = toRefs(useDocumentConfig());

const dialogRef = ref();
const dialogOpenType = ref('DETAIL');
const loadingSave = ref(false);

function open(config: DialogOpenConfig) {
  loadingSave.value = false;
  dialogOpenType.value = config.type;
  nextTick(() => {
    dialogRef.value?.open(config);
  });
}

function close() {
  dialogRef.value?.close();
}

async function handleSave() {
  dialogRef.value.execAsyncTask(async () => {
    loadingSave.value = true;
    const data = await dialogRef.value.getFormRef().validate();
    return {
      data,
      documentList: await getDocs(data),
    };
  }).then((res: Recordable) => {
    const { data, documentList } = res;
    for (const item of documentList) {
      delete item.id;
      let url = item.documentServerUrl;
      if (/http(s?):\/\//.test(item.documentServerUrl)) {
        const urlParsed = urlParse(item.documentServerUrl);
        if (urlParsed) {
          url = urlParsed.origin + urlParsed.pathname;
        }
      }
      saveDocumentConfig.value(pick({
        ...data,
        ...item,
        url,
      }, Object.keys(createDocumentConfig())) as any);
    }
    const text = dialogOpenType.value === 'ADD' ? '添加成功' : dialogOpenType.value === 'EDIT' ? '修改成功' : null;
    text && Message.success(text);
    dialogRef.value.close();
    emit('success');
  }).finally(() => {
    loadingSave.value = false;
  });
}

defineExpose({
  open,
  close,
});
</script>

<style lang="less" scoped></style>
