<template>
  <apih-dialog
      ref="dialogRef"
      width="100%"
      cancel-text="返回"
      hide-ok
      :span="[16, 8]"
      :form-component="Form"
  >
    <template #default>
      <a-row :gutter="12">
        <a-col v-for="(code, index) of codeList" :span="24 / codeList.length" :key="index">
          <div style="height: calc(100vh - 140px)">
            <apih-code :code="code" />
          </div>
        </a-col>
      </a-row>
    </template>
    <template #footer>
      <a-button type="primary" @click="handleGen(true)">测试</a-button>
      <a-button type="primary" @click="handleSave(true)">保存</a-button>
    </template>
  </apih-dialog>
</template>

<script lang="ts" setup>
import {
  ref,
  toRefs,
  nextTick,
  defineExpose,
  defineEmits,
} from 'vue';
import { omit } from 'lodash';
import { Message } from '@arco-design/web-vue';

import { useModelTemplate } from '@/store';
import Form from '../form/form-model-cud.vue';
import renderTemplate from '@/utils/renderTemplate';
import { AhProject } from '@/core/interface';
import { RenderModelConfig } from '@/views/generate/interface';
import { OpenConfig } from '@/components/apih-dialog/interface';
import { APIHelper } from '@api-helper/core';

type OpenDataType = {
  project: AhProject,
  apiList: Array<APIHelper.API>
};

const emit = defineEmits(['success']);
const dialogRef = ref();
const codeList = ref<Array<string>>([]);
const { save } = useModelTemplate();

const openData = ref<OpenDataType>();

function close() {
  dialogRef.value.close();
}

function open(config: OpenConfig, data?: OpenDataType) {
  dialogRef.value.open(config, data);
  openData.value = data;
  nextTick(() => {
    dialogRef.value.getFormRef().setFormModel({
      apiId: data?.apiList?.[0]?.id ?? ''
    });
    handleGen();
  });
}

async function handleGen(showMsg = false) {
  const data = await dialogRef.value.getFormRef().getFormModel();
  codeList.value = renderTemplate(data, {
    api: data.api,
    requestDataSchemaList: data.requestDataSchemaList,
    responseDataSchemaList: data.responseDataSchemaList,
  }, omit(data, [
    'api',
    'requestDataSchemaList',
    'requestDataSchemaIdList',
    'responseDataSchemaList',
    'responseDataSchemaIdList'
  ]) as RenderModelConfig);
  if (showMsg === true) {
    Message.success('已生成');
  }
}

async function handleSave() {
  const data = await dialogRef.value.getFormRef().validate();
  const id = save(data);
  close();
  Message.success('保存成功');
  emit('success', id);
}

defineExpose({
  open,
  close
})
</script>
<style lang="scss">

</style>
