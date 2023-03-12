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
  nextTick,
  defineExpose,
  defineEmits,
} from 'vue';
import { APIHelper } from '@api-helper/core';
import { Message } from '@arco-design/web-vue';

import Form from '../form/form-api-cud.vue';
import { useApiTemplate } from '@/store';
import renderTemplate from '@/utils/renderTemplate';
import { OpenConfig } from '@/components/apih-dialog/interface';
import { DOCUMENT } from '@/constants/mock';

type OpenDataType = {
  apiList: Array<APIHelper.API>
};

const emit = defineEmits(['success']);
const dialogRef = ref();
const codeList = ref<Array<string>>([]);
const { save } = useApiTemplate();

const openData = ref<OpenDataType>();

function close() {
  dialogRef.value.close();
}

function open(config: OpenConfig, data?: OpenDataType) {
  dialogRef.value.open(config, data);
  openData.value = data;
  nextTick(() => {
    handleGen();
  });
}

async function handleGen(showMsg = false) {
  const data = await dialogRef.value.getFormRef().getFormModel();
  codeList.value = renderTemplate(data, {
    apiList: DOCUMENT.categoryList[0].apiList
  }, data);
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
