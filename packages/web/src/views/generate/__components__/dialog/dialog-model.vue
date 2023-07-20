<template>
  <apih-dialog
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
          <a-col v-for="(code, index) of currentCodeList" :span="24 / currentCodeList.length" :key="index">
            <div style="height: calc(100vh - 140px)">
              <apih-code :code="code"></apih-code>
            </div>
          </a-col>
        </a-row>
      </a-spin>
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
  computed,
  nextTick,
  defineExpose,
} from 'vue';
import { merge, omit } from 'lodash';
import { Message } from '@arco-design/web-vue';
import { APIHelper } from '@api-helper/core/es/lib/types';

import Form from '../form/form-model/index.vue';
import renderTemplate from '@/utils/render-template';
import { useProject, useModelTemplate } from '@/store';
import { FormModel } from '../form/form-model/interface';
import { DialogOpenConfig } from '@/components/apih-dialog/interface';
import { Template } from '@/store/template/interface';

type OpenDataType = {
  categoryList: APIHelper.CategoryList
  apiList: APIHelper.APIList
};

const { currentProject } = useProject();
const { templateMap } = toRefs(useModelTemplate());

const dialogRef = ref();
const loading = ref(false);
const codeList = ref<Array<string>>([]);

const dialogOpenData = ref<OpenDataType>({
  categoryList: [],
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

  nextTick(() => {
    handleGen();
  });
}

function handleGen(showMsg = false) {
  dialogRef.value.execAsyncTask(async () => {
    const data = await dialogRef.value.getFormRef().getFormModel();
    const template = templateMap.value.get(currentProject.modelTplId) as Template;
    if (!template.content) {
      return [''];
    }
    loading.value = true;
    return await renderTemplate(template, {
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
  }).then((res: string[]) => {
    codeList.value = res;
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
