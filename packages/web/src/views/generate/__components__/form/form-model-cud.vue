<template>
  <a-row>
    <a-col :span="12">
      <a-form
          ref="formRef"
          :model="formModel"
          :rules="formRules"
          layout="vertical"
          auto-label-width
      >
        <a-tabs class="a-tabs--simplify" default-active-key="1">
          <a-tab-pane key="1" title="配置选择">
            <a-card title="基础信息">
              <a-row :gutter="gutter">
                <a-col :span="24">
                  <a-form-item
                      label="模板名称"
                      field="label"
                      style="margin-bottom: 0"
                      :rules="[{ required: true, message: '必填项' }]"
                      :validate-trigger="['change', 'input']"
                  >
                    <a-input v-model="formModel.label" :max-length="64" />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-card>
            <!--  基础配置  -->
            <a-card title="基础配置">
              <a-row :gutter="gutter">
                <a-col :span="24">
                  <a-form-item
                      :rules="[{ required: true, message: '必填项' }]"
                      :validate-trigger="['change', 'input']"
                      label="API"
                      field="apiId"
                  >
                    <a-select v-model="formModel.apiId" :options="options.categoryList"></a-select>
                  </a-form-item>
                </a-col>
                <a-col :span="24">
                  <a-form-item
                      :rules="[{ required: true, message: '必填项' }]"
                      :validate-trigger="['change', 'input']"
                      field="tplId"
                      style="margin-bottom: 0"
                  >
                    <template #label>
                      <a-space>
                        <span>模板</span>
                        <a-button size="mini">新增模板</a-button>
                        <a-button :disabled="!formModel.tplId" size="mini">编辑模板</a-button>
                      </a-space>
                    </template>
                    <a-select v-model="formModel.tplId" :options="templateList"></a-select>
                  </a-form-item>
                </a-col>
              </a-row>
            </a-card>
            <!--  Input 输入框属性配置  -->
            <a-card title="Input 输入框属性配置">
              <a-row style="margin-top: 6px" :gutter="30">
                <a-col :span="12">
                  <a-space>
                    <div>maxlength</div>
                    <div>
                      <a-form-item field="maxlength" no-style>
                        <a-input-number v-model="formModel.maxlength" allow-clear hide-button />
                      </a-form-item>
                    </div>
                  </a-space>
                </a-col>
                <a-col :span="12">
                  <div style="margin-top: 4px">
                    <a-form-item field="placeholder" no-style>
                      <a-checkbox v-model="formModel.placeholder">生成placeholder</a-checkbox>
                    </a-form-item>
                  </div>
                </a-col>
              </a-row>
            </a-card>
            <!--  其他配置  -->
            <a-card title="其他配置">
              <a-row :gutter="gutter">
                <a-space :size="2" class="a-space--shim" direction="vertical">
                  <div><a-checkbox v-model="formModel.crud">生成CURD</a-checkbox></div>
                  <div><a-checkbox v-model="formModel.grid">格栅布局</a-checkbox></div>
                  <div><a-checkbox v-model="formModel.generateLabel">Form表单项生成label</a-checkbox></div>
                </a-space>
              </a-row>
            </a-card>
          </a-tab-pane>
          <a-tab-pane key="2" title="字段选择">
            <a-row :gutter="5">
              <a-col :span="12">
                <a-card style="width: 100%">
                  <template #title>
                    <div class="text-center">请求数据字段</div>
                  </template>
                  <div style="width: 100%; height: calc(100vh - 277px)">
                    <ApihSchemaTree v-model:value="formModel.requestDataSchemaIdList" :data="requestFieldTree" />
                  </div>
                </a-card>
              </a-col>
              <a-col :span="12">
                <a-card style="width: 100%">
                  <template #title>
                    <div class="text-center">响应数据字段</div>
                  </template>
                  <div style="width: 100%; height: calc(100vh - 277px)">
                    <ApihSchemaTree v-model:value="formModel.responseDataSchemaIdList" :data="responseFieldTree" />
                  </div>
                </a-card>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </a-form>
    </a-col>
    <a-col :span="12">
      <apih-code-mirror v-model="formModel.content" />
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { SelectOptionGroup } from '@arco-design/web-vue';
import {
  ref,
  watch,
  toRef,
  computed,
  PropType,
  defineExpose
} from 'vue';
import { cloneDeep } from 'lodash';
import { APIHelper } from '@api-helper/core';

import { treeForEach } from '@/utils/tree';
import { useForm } from '@/hooks/use-form';
import { Template } from '@/store/template/interface';
import { useModelConfig, useModelTemplate } from '@/store';
import { RenderModelConfig } from '@/views/generate/interface';
import ApihSchemaTree from '@/components/apih-schema-tree/index.vue';

type FormModelType = FormModel;

class FormModel extends RenderModelConfig {
  tplId = '';
  api = {} as APIHelper.API;
  requestDataSchemaList = [] as APIHelper.SchemaList
  requestDataSchemaIdList = [] as string[]
  responseDataSchemaList = [] as APIHelper.SchemaList
  responseDataSchemaIdList = [] as string[]
}

const span = ref(12);
const gutter = ref(15);

const props = defineProps({
  data: {
    type: Object as PropType<{
      categoryList: APIHelper.CategoryList,
    }>,
    default: () => ({})
  },
  // ADD = '新增', EDIT = '修改'
  type: {
    type: String as PropType<'ADD' | 'EDIT' | 'DETAIL'>,
    default: 'ADD'
  }
});

const { modelConfig, updateModelConfig } = useModelConfig();

const {
  formRef,
  formModel,
  formRules,

  validate,
  validateField,
  setFields,
  resetFields,
  getFormModel,
  setFormModel,
  clearValidate,
  getReactiveFormModel
} = useForm<FormModelType>({
  ...new Template(),
  ...new FormModel(),
  ...modelConfig,
}, {
  watchFormModel: toRef(props, 'data') as any
});

const options = ref({
  categoryList: [] as Array<SelectOptionGroup>
});
const { templateList } = useModelTemplate();

const apiMap = ref<Map<string, APIHelper.API>>(new Map<string, APIHelper.API>());

watch(() => props.data.categoryList, (categoryList) => {
  apiMap.value.clear();
  options.value.categoryList = categoryList?.map((module) => ({
    id: module.id,
    label: module.name,
    isGroup: true,
    options: module.apiList?.map((api) => {
      apiMap.value.set(api.id, api);
      return {
        value: api.id,
        label: api.summary
      };
    }) ?? []
  })) ?? [];
}, { immediate: true });

watch(() => formModel.value.apiId, (val) => {
  formModel.value.api = apiMap.value.get(val) as APIHelper.API;
}, { deep: true });

watch(() => formModel.value, (val) => {
  updateModelConfig(val);
}, { deep: true });

watch(() => formModel.value.requestDataSchemaIdList, (val) => {
  formModel.value.requestDataSchemaList = getSchemaList(val, requestFieldMap.value);
}, { deep: true });

watch(() => formModel.value.responseDataSchemaIdList, (val) => {
  formModel.value.responseDataSchemaList = getSchemaList(val, responseFieldMap.value);
}, { deep: true });

const requestFieldTree = computed(() => {
  const apiId = formModel.value.apiId;
  const api = apiMap.value.get(apiId);
  if (!api || !api.requestDataSchema) {
    return [];
  }
  return cloneDeep(api.requestDataSchema.params);
});

const responseFieldTree = computed(() => {
  const apiId = formModel.value.apiId;
  const api = apiMap.value.get(apiId);
  if (!api || !api.responseDataSchema) {
    return [];
  }
  return cloneDeep(api.responseDataSchema.params);
});

const requestFieldMap = computed<Map<string, APIHelper.Schema>>(() => {
  const map = new Map<string, APIHelper.Schema>();
  treeForEach(requestFieldTree.value, (schema: APIHelper.Schema) => {
    map.set(schema.id, schema);
  });
  return map;
});

const responseFieldMap = computed<Map<string, APIHelper.Schema>>(() => {
  const map = new Map<string, APIHelper.Schema>();
  treeForEach(responseFieldTree.value, (schema: APIHelper.Schema) => {
    map.set(schema.id, schema);
  });
  return map;
});

function getSchemaList(ids: string[], record: Map<string, APIHelper.Schema>): APIHelper.SchemaList {
  const val = cloneDeep(ids);
  const schemaList: APIHelper.SchemaList = [];
  while (val.length > 0) {
    const id = val.shift();
    let row = cloneDeep(record.get(id as string));
    if (row) {
      row = { ...row };
      row.params = filterChildren(row.params, val);
      schemaList.push(cloneDeep(row));
    }
  }
  return schemaList;
}

function filterChildren(schemaList: APIHelper.SchemaList, checkIds: string[] = []) {
  if (checkIds.length === 0) {
    return [];
  }
  return schemaList.filter((schema) => {
    const index = checkIds.indexOf(schema.id);
    // 该节点的基本数据类型
    if (!schema.keyName && schema.type !== 'object' && schema.type !== 'array') {
      return true;
    }
    if (index === -1) {
      return false;
    }
    checkIds.splice(index, 1);
    schema.params = filterChildren(schema.params, checkIds);
    return true;
  })
}

defineExpose({
  validate,
  validateField,
  setFields,
  resetFields,
  getFormModel,
  setFormModel,
  clearValidate,
  getReactiveFormModel
})
</script>
<style lang="scss" scoped>

</style>
