<template>
  <ah-dialog
      ref="dialogRef"
      width="100%"
      :form-component="Form"
  >
    <template #default>
      <a-button @click="handleGen">生成</a-button>
      <a-row :gutter="12">
        <a-col v-for="(code, index) of codeList" :span="24 / codeList.length" :key="index">
          <div style="height: calc(100vh - 140px)">
            <ah-code :code="code"></ah-code>
          </div>
        </a-col>
      </a-row>
    </template>
  </ah-dialog>
</template>

<script lang="ts" setup>
import { ref, defineExpose, nextTick } from 'vue';
import { Message } from '@arco-design/web-vue';

import { useModelTemplate } from '@/store';
import Form from '../form/form-model.vue';
import renderTemplate from '@/core/render';
import AhDialog from '@/components/ah-dialog/index.vue';
import { AhAPI, AhAPIField, AhModule, AhProject } from '@/core/interface';
import { omit } from 'lodash';
import { RenderModelConfig } from '@/views/generate/interface';

type OpenDataType = {
  project: AhProject,
  moduleList: Array<AhModule>
  apiList: Array<AhAPI>
};

const dialogRef = ref();
const codeList = ref<Array<string>>([]);
const { templateMap } = useModelTemplate();

const openData = ref<OpenDataType>({
  project: new AhProject(),
  moduleList: [],
  apiList: []
});

function close() {
  dialogRef.value.close();
}

function open(data: OpenDataType) {
  dialogRef.value.open(null, data);
  openData.value = data;
  nextTick(() => {
    dialogRef.value.getFormRef().setFormModel({
      apiId: data?.apiList?.[0]?.id ?? ''
    })
  })
}

async function handleGen() {
  const data = await dialogRef.value.getFormRef().validate();
  const template = templateMap.get(data.tplId);
  if (!template) {
    return Message.error('请选择模板');
  }
  codeList.value = renderTemplate(template, {
    project: openData.value.project,
    moduleList: openData.value.moduleList,
    api: data.api,
    apiList: openData.value.apiList,
    requestFields: data.requestFields,
    responseFields: data.responseFields,
  }, omit(data, [
    'api',
    'requestFields',
    'requestFieldIds',
    'responseFields',
    'responseFieldIds'
  ]) as RenderModelConfig);
}

defineExpose({
  open,
  close
})
</script>
<style lang="scss">

</style>
