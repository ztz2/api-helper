<template>
  <apih-drawer
    ref="dialogRef"
    width="900px"
    cancel-text="返回"
    :span="[24, 0]"
    :form-component="Form"
    hide-ok
  >
    <template #footer>
      <a-button type="primary" :loading="loading" @click="handleExport">导出</a-button>
    </template>
  </apih-drawer>
</template>

<script lang="ts" setup>
import {
  ref,
  toRefs,
  defineExpose,
} from 'vue';

import message from '@/utils/message';
import { useDocumentConfig } from '@/store';
import { exportFileApi } from '@/api';
import Form from '../__components__/form/form-export-file.vue';

import { DrawerOpenConfig } from '@/components/apih-drawer/interface';
import { Template } from '@/store/template/interface';

const { currentDocumentConfig } = toRefs(useDocumentConfig());

const dialogRef = ref();
const loading = ref(false);

function close() {
  dialogRef.value.close();
}

function open(config: DrawerOpenConfig) {
  loading.value = false;
  dialogRef.value.open(config);
}

async function handleExport() {
  dialogRef.value.execAsyncTask(async () => {
    const data = await dialogRef.value.getFormRef().validate?.();
    loading.value = true;
    return {
      data,
      res: await exportFileApi(data),
    };
  }).then(({ data, res }: Recordable) => {
    try {
      res = typeof res === 'string' ? JSON.parse(res) : res;
      if (res?.data?.isOutputFile) {
        close();
        return message.success({
          duration: 5000,
          content: `文件模块已创建到：${data.fileDirectoryExportPath}中`,
        });
      }
    } catch {}
    close();
    message.success({
      duration: 3000,
      content: '文件模块压缩包已下载',
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
