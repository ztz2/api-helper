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

import { exportFileApi } from '@/api';
import message from '@/utils/message';
import { Template } from '@/store/template/interface';
import { useDocumentConfig, useFileDirectory } from '@/store';
import Form from '../__components__/form-export-file.vue';

const { currentDocumentConfig } = toRefs(useDocumentConfig());
const { updateFileDirectoryConfigTemplateId } = useFileDirectory();

const dialogRef = ref();
const loading = ref(false);

function close() {
  dialogRef.value.close();
}

function open(config: DialogOpenConfig) {
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
    function end(isOutputFile = false) {
      close();
      updateFileDirectoryConfigTemplateId(data.fileDirectoryConfigList);
      const noticeText = isOutputFile ? `文件模块已创建到：${data.fileDirectoryExportPath}中` : '文件模块压缩包已下载';
      message.success({
        duration: 5000,
        content: noticeText,
      });
    }
    try {
      res = typeof res === 'string' ? JSON.parse(res) : res;
      if (res?.data?.isOutputFile) {
        return end(true);
      }
    } catch {}
    end();
  }).finally(() => {
    loading.value = false;
  });
}

defineExpose({
  open,
  close,
});
</script>
