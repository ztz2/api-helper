<template>
  <apih-dialog
    ref="dialogRef"
    width="100%"
    cancel-text="返回"
    :span="[14, 10]"
    :form-component="Form"
    hide-ok
  >
    <template #default>
      <a-spin
        tip="加载中..."
        class="ztz-spin"
        :loading="loading"
      >
        <a-row :gutter="15">
          <a-col v-for="(code, index) of currentCodeList" :span="24 / currentCodeList.length" :key="index">
            <div style="height: calc(100vh - 140px)">
              <apih-code :code="code" />
            </div>
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
import { Message } from '@arco-design/web-vue';

import { DOCUMENT } from '@/constants/mock';
import Form from '../form/form-api-template.vue';
import { useApiTemplate, useProject } from '@/store';
import renderTemplate from '@/utils/render-template';
import { DialogOpenConfig } from '@/components/apih-dialog/interface';
import formatCode from '@/utils/format-code';

const emit = defineEmits(['success']);

const { save } = useApiTemplate();
const { currentProject } = useProject();

const dialogRef = ref();
const loading = ref(false);
const loadingSave = ref(false);
const codeList = ref<Array<string>>([]);

const currentCodeList = computed(() => {
  if (codeList.value.length > 0) {
    return codeList.value;
  }
  return [''];
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

async function handleGen(showMsg = false) {
  dialogRef.value.execAsyncTask(async () => {
    const data = await dialogRef.value.getFormRef().getFormModel();
    if (!data.content) {
      return [''];
    }
    loading.value = true;
    return await renderTemplate(data, {
      apiList: DOCUMENT.categoryList[0].apiList,
    }, {
      ...currentProject,
      ...data,
    });
  }).then((res: unknown) => {
    codeList.value = res as string[];
    if (showMsg === true) {
      Message.success('已生成');
    }
  }).finally(() => {
    loading.value = false;
  });
}

async function handleSave() {
  dialogRef.value.execAsyncTask(async () => {
    const data = await dialogRef.value.getFormRef().validate();
    loadingSave.value = true;
    data.content = await formatCode({
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
