<template>
  <apih-dialog
    ref="dialogRef"
    width="100%"
    cancel-text="返回"
    :span="[6, 18]"
    :form-component="Form"
    @save-template="handleGen(false)"
    hide-ok
  >
    <template #default>
      <a-card style="position: relative;">
        <a-spin
          tip="加载中..."
          class="ztz-spin"
          :loading="loading"
        >
          <a-row :gutter="15">
            <a-col v-for="(code, index) of currentCodeList" :span="24 / currentCodeList.length" :key="index">
              <div style="height: calc(100vh - 176px)">
                <apih-code :code="code" />
              </div>
            </a-col>
          </a-row>
        </a-spin>
      </a-card>
    </template>
    <template #footer>
      <a-button type="primary" :loading="loading" @click="handleGen(true)">生成</a-button>
    </template>
  </apih-dialog>
</template>

<script lang="ts" setup>
import {
  ref,
  toRefs,
  nextTick,
  computed,
  defineExpose,
} from 'vue';
import { Message } from '@arco-design/web-vue';
import { APIHelper } from '@api-helper/core/es/lib/types';

import Form from '../form/form-api.vue';
import { useProject, useApiTemplate } from '@/store';
import renderTemplate from '@/utils/render-template';
import { Template } from '@/store/template/interface';
import { DialogOpenConfig } from '@/components/apih-dialog/interface';

type OpenDataType = {
  apiList: Array<APIHelper.API>
};

const { currentProject } = useProject();
const { templateMap } = toRefs(useApiTemplate());

const dialogRef = ref();
const loading = ref(false);
const codeList = ref<Array<string>>([]);

const dialogOpenData = ref<OpenDataType>({
  apiList: [],
});

const currentCodeList = computed(() => {
  if (codeList.value.length > 0) {
    return codeList.value;
  }
  return [''];
});

function close() {
  dialogRef.value.close();
}

function open(config: DialogOpenConfig, payload: OpenDataType) {
  dialogRef.value.open(config);
  dialogOpenData.value.apiList = payload.apiList;
  loading.value = false;
  nextTick(() => {
    handleGen();
  });
}

async function handleGen(showMsg = false) {
  const data = await dialogRef.value.getFormRef().validate();
  const template = templateMap.value.get(data.apiTplId);
  if (!template) {
    Message.error('请重新选择模板');
    return;
  }
  loading.value = true;
  try {
    codeList.value = await renderTemplate(template as Template, {
      apiList: dialogOpenData.value.apiList,
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

defineExpose({
  open,
  close,
});
</script>
