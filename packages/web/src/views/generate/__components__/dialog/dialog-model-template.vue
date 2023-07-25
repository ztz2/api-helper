<template>
  <apih-dialog
    ref="dialogRef"
    width="100%"
    cancel-text="返回"
    :span="[16, 8]"
    :form-component="Form"
    @exec-gen="handleGen"
    hide-ok
    unique-form
  >
    <template #default>
      <a-spin
        tip="加载中..."
        class="ztz-spin"
        :loading="loading"
      >
        <a-row :gutter="12">
          <a-col
            v-for="(item, index) of currentCodeList" :span="24 / currentCodeList.length"
            :key="index"
          >
            <a-card :title="item.title">
              <apih-code height="calc(100vh - 218px)" :code="item.content" />
            </a-card>
          </a-col>
        </a-row>
      </a-spin>
    </template>
    <template #footer>
      <a-button type="primary" :loading="loading" @click="handleGen(true)">测试</a-button>
      <a-button type="primary" :loading="loadingSave" @click="handleSave">保存</a-button>
    </template>
  </apih-dialog>
</template>

<script lang="ts" setup>
import {
  ref,
  nextTick,
  computed,
  defineEmits,
  defineExpose,
} from 'vue';
import {
  renderTemplate,
  formatCodeServer,
} from '@api-helper/template';
import { omit } from 'lodash';
import { APIHelper } from '@api-helper/core';
import { Message } from '@arco-design/web-vue';
import { Template } from '@api-helper/template';

import Form from '../form/form-model-template';
import { useProject, useModelTemplate } from '@/store';
import { DialogOpenConfig } from '@/components/apih-dialog/interface';

const emit = defineEmits(['success']);

const { save } = useModelTemplate();
const { currentProject } = useProject();

const dialogRef = ref();
const loading = ref(false);
const loadingSave = ref(false);
const codeList = ref<Array<APIHelper.TemplateContent>>([]);

const currentCodeList = computed(() => {
  if (codeList.value.length > 0) {
    return codeList.value;
  }
  return [{
    title: '空模板',
    content: '',
  }];
});

function close() {
  dialogRef.value.close();
}

function open(config: DialogOpenConfig) {
  dialogRef.value.open(config);
  loading.value = false;
  loadingSave.value = false;
  nextTick(() => {
    handleGen();
  });
}

function handleGen(showMsg = false) {
  dialogRef.value.execAsyncTask(async () => {
    const data = await dialogRef.value.getFormRef().getFormModel();
    if (!data.content) {
      return [''];
    }
    loading.value = true;
    return await renderTemplate(data, {
      api: data.api,
      requestDataSchemaList: data.requestDataSchemaList,
      responseDataSchemaList: data.responseDataSchemaList,
    }, {
      ...currentProject,
      ...omit(data, [
        'api',
        'apiId',
        'requestDataSchemaList',
        'requestDataSchemaIdList',
        'responseDataSchemaList',
        'responseDataSchemaIdList',
      ]),
    });
  }).then((res: unknown) => {
    codeList.value = res as APIHelper.TemplateContent[];
    if (showMsg === true) {
      Message.success('已生成');
    }
  }).finally(() => {
    loading.value = false;
  });
}

function handleSave() {
  dialogRef.value.execAsyncTask(async () => {
    const data = await dialogRef.value.getFormRef().validate();
    loadingSave.value = true;
    data.content = await formatCodeServer({
      sourceCode: data.content,
      formatCodeExtension: '.js',
    });
    return {
      id: save(data) as string,
      content: data.content,
    };
  }).then((res: Recordable = {}) => {
    dialogRef.value.getFormRef().setFormModel({
      content: res.content,
    });
    Message.success('保存成功');
    emit('success', res.id);
    close();
  }).finally(() => {
    loadingSave.value = false;
  });
}

defineExpose({
  open,
  close,
});
</script>
<style lang="scss">

</style>
