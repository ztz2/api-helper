<template>
  <ah-dialog
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
            <ah-code :code="code"></ah-code>
          </div>
        </a-col>
      </a-row>
    </template>
    <template #footer>
      <a-button type="primary" @click="handleGen(true)">生成</a-button>
    </template>
  </ah-dialog>
</template>

<script lang="ts" setup>
import {
  ref,
  nextTick,
  defineExpose,
} from 'vue';
import { Message } from '@arco-design/web-vue';

import { useModelTemplate } from '@/store';
import Form from '../form/form-model.vue';
import renderTemplate from '@/utils/renderTemplate';
import AhDialog from '@/components/ah-dialog/index.vue';
import { AhAPI, AhModule, AhProject } from '@/core/interface';
import { omit } from 'lodash';
import { RenderModelConfig } from '@/views/generate/interface';

type OpenDataType = {
  project: AhProject,
  categoryList: Array<AhModule>
  apiList: Array<AhAPI>
};

const dialogRef = ref();
const codeList = ref<Array<string>>([]);
const { templateMap } = useModelTemplate();

const openData = ref<OpenDataType>({
  project: new AhProject(),
  categoryList: [],
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

async function handleGen(showMsg = false) {
  const data = await dialogRef.value.getFormRef().validate();
  const template = templateMap.get(data.tplId);
  if (!template) {
    return Message.error('请选择模板');
  }
  codeList.value = renderTemplate(template, {
    project: openData.value.project,
    categoryList: openData.value.categoryList,
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
  if (showMsg === true) {
    Message.success('已生成');
  }
}

defineExpose({
  open,
  close
})
</script>
<style lang="scss">

</style>
