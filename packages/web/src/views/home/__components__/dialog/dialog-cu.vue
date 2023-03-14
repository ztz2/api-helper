<template>
  <Dialog
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
  </Dialog>
</template>

<script setup lang="ts">
import { pick } from 'lodash';
import {
  defineEmits, nextTick, defineExpose, ref,
} from 'vue';
import { Message } from '@arco-design/web-vue';

import { useProject } from '@/store';
import { getSwaggerDocs } from '@/api';
import Dialog from '@/components/apih-dialog/index.vue';
import { OpenData, OpenConfig } from '@/components/apih-dialog/interface';
import Form from '../form/form-cu.vue';

const emit = defineEmits(['success']);
const projectStore = useProject();
const dialogRef = ref();
const type = ref('DETAIL');
const loadingSave = ref(false);

function open(config: OpenConfig, data?: OpenData) {
  loadingSave.value = false;
  type.value = config.type;
  nextTick(() => {
    dialogRef.value?.open(config, data);
  });
}

function close() {
  dialogRef.value?.close();
}

async function handleSave(publishFlag = false) {
  dialogRef.value.execAsyncTask({
    async executor() {
      loadingSave.value = true;
      const data = await dialogRef.value.getFormRef().validate();
      const documentList = await getSwaggerDocs(data);
      for (const item of documentList) {
        projectStore.save(pick({ ...data, ...item }, Object.keys(data)) as any);
      }
    },
    completeCallback() {
      const text = type.value === 'ADD' ? '添加成功' : type.value === 'EDIT' ? '修改成功' : null;
      text && Message.success(text);
      dialogRef.value.close();
      emit('success');
    },
    finallyCallback() {
      loadingSave.value = false;
    },
  });
}

defineExpose({
  open,
  close,
});
</script>

<style lang="less" scoped></style>
