<template>
  <apih-drawer
    ref="dialogRef"
    width="100%"
    cancel-text="返回"
    :span="[6, 18]"
    :form-component="Form"
    @exec-gen="handleGen"
    hide-ok
  >
    <template #default>
      <a-spin
        tip="加载中..."
        class="ztz-spin"
        :loading="loading"
      >
        <a-row :gutter="15">
          <a-col v-for="(item, index) of currentCodeList" :span="24 / currentCodeList.length" :key="index">
            <a-card :title="item.title">
              <apih-code height="calc(100vh - 222px)" :code="item.content" />
            </a-card>
          </a-col>
        </a-row>
      </a-spin>
    </template>
    <template #footer>
      <a-button type="primary" :loading="loading" @click="handleGen(true)">生成</a-button>
    </template>
  </apih-drawer>
</template>

<script lang="ts" setup>
import {
  ref,
  toRefs,
  nextTick,
  computed,
  defineExpose,
} from 'vue';
import { merge } from 'lodash';
import {
  renderTemplate,
} from '@api-helper/template';
import { Message } from '@arco-design/web-vue';
import { APIHelper } from '@api-helper/core/es/lib/types';

import Form from '../__components__/form-mock.vue';
import { Template } from '@/store/template/interface';
import { useDocumentConfig, useMockTemplate } from '@/store';

type OpenDataType = {
  apiList: Array<APIHelper.API>
};

const { mockTemplateMap } = toRefs(useMockTemplate());
const { currentDocumentConfig } = toRefs(useDocumentConfig());

const dialogRef = ref();
const loading = ref(false);
const codeList = ref<Array<APIHelper.TemplateContent>>([]);

const dialogOpenData = ref<OpenDataType>({
  apiList: [],
});

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

function open(config: DialogOpenConfig, payload: OpenDataType) {
  dialogRef.value.open(config);
  dialogOpenData.value.apiList = payload.apiList;
  loading.value = false;
  nextTick(() => {
    handleGen();
  });
}

async function handleGen(showMsg = false) {
  dialogRef.value.execAsyncTask(async () => {
    const data = await dialogRef.value.getFormRef().validate();
    const template = mockTemplateMap.value.get(data.mockTplId);
    if (!template) {
      Message.error('该模板没有内容，请重新选择模板');
      return Promise.reject();
    }
    loading.value = true;
    const list = await renderTemplate(template as Template, {
      apiList: dialogOpenData.value.apiList,
    }, merge({
      ...currentDocumentConfig.value,
      ...data,
      prettierOptions: {
        semi: false,
        bracketSameLine: false,
      },
    }));
    list.forEach((item: any) => {
      item.content = item.content.startsWith(';') ? item.content.slice(1, item.content.length) : item.content;
    });
    return list;
  }).then((res: unknown) => {
    codeList.value = res as APIHelper.TemplateContent[];
    if (showMsg === true) {
      Message.success('已生成');
    }
  }).finally(() => {
    loading.value = false;
  });
}

defineExpose({
  open,
  close,
});
</script>
