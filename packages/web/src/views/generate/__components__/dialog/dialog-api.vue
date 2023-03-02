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

import Form from '../form/form-api.vue';
import { useApiTemplate } from '@/store';
import renderTemplate from '@/core/render';
import AhDialog from '@/components/ah-dialog/index.vue';
import { AhAPI, AhModule, AhProject } from '@/core/interface';

type OpenDataType = {
  project: AhProject,
  moduleList: Array<AhModule>,
  apiList: Array<AhAPI>
};

const dialogRef = ref();
const codeList = ref<Array<string>>([]);
const { templateMap } = useApiTemplate();

const openData = ref<OpenDataType>();

function close() {
  dialogRef.value.close();
}

function open(data: OpenDataType) {
  dialogRef.value.open();
  openData.value = data;
  nextTick(() => {
    handleGen();
  });
}

async function handleGen() {
  const data = await dialogRef.value.getFormRef().validate();
  const template = templateMap.get(data.tplId);
  if (!template) {
    return Message.error('请选择模板');
  }
  if (openData.value) {
    codeList.value = renderTemplate(template, {
      project: openData.value.project,
      moduleList: openData.value.moduleList,
      apiList: openData.value.apiList
    }, data);
  }
}

defineExpose({
  open,
  close
})
</script>
<style lang="scss">

</style>
