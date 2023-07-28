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
import { mergeUrl } from '@api-helper/core/lib/utils/util';

import { exportFileApi } from '@/api';
import message from '@/utils/message';
import { toUnixPath } from '@/utils';
import { useDocumentConfig } from '@/store';
import { Template } from '@/store/template/interface';
import Form from '../__components__/form-export-file.vue';
import { FILE_DIRECTORY_BASE_PATH } from '@/constants';

const { currentDocumentConfig } = toRefs(useDocumentConfig());

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
      const noticeText = isOutputFile ? `文件模块已生成：${toUnixPath(mergeUrl(data.fileDirectoryExportPath, FILE_DIRECTORY_BASE_PATH ? `/${FILE_DIRECTORY_BASE_PATH}` : ''))}` : '文件模块压缩包已下载';
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
