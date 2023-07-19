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
      <a-spin
        tip="加载中..."
        class="ztz-spin"
        :loading="loading"
      >
        <a-row :gutter="12">
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
      <a-button type="primary" @click="handleSave">保存</a-button>
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

const emit = defineEmits(['success']);

const { save } = useApiTemplate();
const { currentProject } = useProject();

const dialogRef = ref();
const loading = ref(false);
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
  console.log(config);
  nextTick(() => {
    handleGen();
  });
}

async function handleGen(showMsg = false) {
  const data = await dialogRef.value.getFormRef().getFormModel();
  if (!data.content) {
    codeList.value = [''];
    return;
  }
  loading.value = true;
  try {
    codeList.value = await renderTemplate(data, {
      apiList: DOCUMENT.categoryList[0].apiList,
    }, {
      ...currentProject,
      ...data,
    });
    if (showMsg === true) {
      Message.success('已生成');
    }
  } finally {
    loading.value = false;
  }
}

async function handleSave() {
  const data = await dialogRef.value.getFormRef().validate();
  const id = save(data);
  Message.success('保存成功');
  emit('success', id);
  console.log('保存1');
  close();
}

defineExpose({
  open,
  close,
});
</script>
<style lang="scss">

</style>
