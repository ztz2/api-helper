<template>
  <apih-dialog
    ref="dialogRef"
    width="100%"
    cancel-text="返回"
    hide-ok
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
      <a-button type="primary" @click="handleGen(true)">生成</a-button>
    </template>
  </apih-dialog>
</template>

<script lang="ts" setup>
import {
  ref,
  nextTick,
  defineExpose,
} from 'vue';
import { Message } from '@arco-design/web-vue';

import Form from '../form/form-api.vue';
import { useApiTemplate } from '@/store';
import renderTemplate from '@/utils/renderTemplate';
import { AhAPI, AhModule, AhProject } from '@/core/interface';

type OpenDataType = {
  project: AhProject,
  categoryList: Array<AhModule>,
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

async function handleGen(showMsg = false) {
  const data = await dialogRef.value.getFormRef().validate();
  const template = templateMap.get(data.tplId);
  if (!template) {
    return Message.error('请选择模板');
  }
  if (openData.value) {
    codeList.value = renderTemplate(template, {
      project: openData.value.project,
      categoryList: openData.value.categoryList,
      apiList: openData.value.apiList
    }, data);
    if (showMsg === true) {
      Message.success('已生成');
    }
  }
}

defineExpose({
  open,
  close
})
</script>
<style lang="scss">

</style>
