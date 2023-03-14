<template>
  <apih-dialog
      ref="dialogRef"
      width="100%"
      cancel-text="返回"
      hide-ok
      :form-component="Form"
      @save-template="handleGen(false)"
  >
    <template #default>
      <a-row :gutter="12">
        <a-col v-for="(code, index) of codeList" :span="24 / codeList.length" :key="index">
          <div style="height: calc(100vh - 140px)">
            <apih-code :code="code"></apih-code>
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
  toRefs,
  nextTick,
  defineExpose,
} from 'vue';
import { omit } from 'lodash';
import { Message } from '@arco-design/web-vue';

import { useModelTemplate } from '@/store';
import renderTemplate from '@/utils/render-template';
import { RenderModelConfig } from '@/views/generate/interface';
import { OpenConfig } from '@/components/apih-dialog/interface';
import emptyTemplate from '@/constants/template/model/empty';
import { APIHelper } from '@api-helper/core';
import Form from '../form/form-model.vue';

type OpenDataType = {
  categoryList: APIHelper.CategoryList
  apiList: APIHelper.APIList
};

const dialogRef = ref();
const codeList = ref<Array<string>>([]);
const { templateMap } = toRefs(useModelTemplate());

const openData = ref<OpenDataType>();

function close() {
  dialogRef.value.close();
}

function open(config: OpenConfig, data?: OpenDataType) {
  dialogRef.value.open(config, data);
  openData.value = data;
  nextTick(() => {
    dialogRef.value.getFormRef().setFormModel({
      apiId: data?.apiList?.[0]?.id ?? '',
    });
    handleGen();
  });
}

async function handleGen(showMsg = false) {
  const data = await dialogRef.value.getFormRef().validate();
  let template = templateMap.value.get(data.tplId);
  let isEmptyTemplate = false;
  if (!template) {
    isEmptyTemplate = true;
    template = { ...emptyTemplate };
    Message.error('请重新选择模板');
  }
  codeList.value = renderTemplate(template, {
    api: data.api,
    requestDataSchemaList: data.requestDataSchemaList,
    responseDataSchemaList: data.responseDataSchemaList,
  }, omit(data, [
    'api',
    'requestDataSchemaList',
    'requestDataSchemaIdList',
    'responseDataSchemaList',
    'responseDataSchemaIdList',
  ]) as RenderModelConfig);
  if (!isEmptyTemplate && showMsg === true) {
    Message.success('已生成');
  }
}

defineExpose({
  open,
  close,
});
</script>
<style lang="scss">

</style>
