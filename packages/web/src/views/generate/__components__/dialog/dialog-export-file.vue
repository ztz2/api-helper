<template>
  <apih-dialog
    ref="dialogRef"
    width="100%"
    cancel-text="返回"
    :span="[24, 0]"
    :form-component="Form"
    hide-ok
  >
    <template #footer>
      <a-button type="primary" :loading="loading" @click="handleExport">导出</a-button>
    </template>
  </apih-dialog>
</template>

<script lang="ts" setup>
import {
  ref,
  defineExpose,
} from 'vue';

import { renderTemplate, Template } from '@api-helper/template';
import { omit } from 'lodash';
import { APIHelper } from '@api-helper/core/es';
import { Message } from '@arco-design/web-vue';
import { useProject } from '@/store';
import Form from '../form/form-export-file';
import { DialogOpenConfig } from '@/components/apih-dialog/interface';
import message from '@/utils/message';

const { currentProject } = useProject();

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
  // dialogRef.value.execAsyncTask(async () => {
  //   const data = await dialogRef.value.getFormRef().getFormModel();
  //   if (!template.content) {
  //     message.warn('该模板没有内容，请重新选择模板');
  //     return [''];
  //   }
  //   loading.value = true;
  //   return await renderTemplate(template, {
  //     api: data.api,
  //     requestDataSchemaList: data.requestDataSchemaList,
  //     responseDataSchemaList: data.responseDataSchemaList,
  //   }, {
  //     ...currentProject,
  //     ...omit(data, [
  //       'api',
  //       'apiId',
  //       'requestDataSchemaList',
  //       'requestDataSchemaIdList',
  //       'responseDataSchemaList',
  //       'responseDataSchemaIdList',
  //     ]),
  //   });
  // }).then((res: unknown) => {
  //   codeList.value = res as APIHelper.TemplateContent[];
  //   if (showMsg === true) {
  //     Message.success('已生成');
  //   }
  // }).finally(() => {
  //   loading.value = false;
  // });
}

defineExpose({
  open,
  close,
});
</script>
