<template>
  <apih-drawer
    ref="dialogRef"
    width="100%"
    cancel-text="返回"
    hide-ok
    :form-component="Form"
    @exec-gen="handleGen"
  >
    <template #default>
      <a-spin
        tip="加载中..."
        class="ztz-spin"
        :loading="loading"
      >
        <a-row :gutter="12">
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
  computed,
  nextTick,
  defineExpose,
} from 'vue';
import { merge, omit } from 'lodash';
import { Message } from '@arco-design/web-vue';
import { renderTemplate } from '@api-helper/template';
import { APIHelper } from '@api-helper/core/es/lib/types';

import message from '@/utils/message';
import Form from '@/views/generate/__components__/form-model/index.vue';
import { Template } from '@/store/template/interface';
import { useDocumentConfig, useModelTemplate } from '@/store';
import { FormModel } from '@/views/generate/__components__/form-model/interface';

type OpenDataType = {
  categoryList: APIHelper.CategoryList
  apiList: APIHelper.APIList
};

const { currentDocumentConfig } = toRefs(useDocumentConfig());
const { modelTemplateMap } = toRefs(useModelTemplate());

const dialogRef = ref();
const loading = ref(false);
const codeList = ref<Array<APIHelper.TemplateContent>>([]);

const dialogOpenData = ref<OpenDataType>({
  categoryList: [],
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

function open(config: DialogOpenConfig, data: OpenDataType) {
  config = merge(config, {
    formComponentProps: {
      categoryList: data.categoryList,
      data: new FormModel({
        apiId: data?.apiList?.[0]?.id ?? '',
      }),
    },
  });
  dialogRef.value.open(config);
  dialogOpenData.value.categoryList = data.categoryList;
  dialogOpenData.value.apiList = data.apiList;

  setTimeout(() => {
    handleGen();
  });
}

function handleGen(showMsg = false) {
  dialogRef.value.execAsyncTask(async () => {
    const data = await dialogRef.value.getFormRef().getFormModel();
    const template = modelTemplateMap.value.get(currentDocumentConfig.value.modelTplId) as Template;
    if (!template.content) {
      message.warn('该模板没有内容，请重新选择模板');
      return [''];
    }
    loading.value = true;
    return await renderTemplate(template, {
      api: data.api,
      requestDataSchemaList: data.requestDataSchemaList,
      responseDataSchemaList: data.responseDataSchemaList,
    }, {
      ...currentDocumentConfig.value,
      ...omit(data, [
        'api',
        'apiId',
        'requestDataSchemaList',
        'requestDataSchemaIdList',
        'responseDataSchemaList',
        'responseDataSchemaIdList',
      ]),
    } as any);
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
<style lang="scss">

</style>
