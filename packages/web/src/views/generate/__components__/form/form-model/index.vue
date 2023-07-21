<template>
  <div>
    <a-form
        ref="formRef"
        :model="formModel"
        :rules="formRules"
        layout="vertical"
        auto-label-width
    >
      <a-tabs class="a-tabs--simplify" default-active-key="1">
        <a-tab-pane key="1" title="配置选择">
          <!--  基础配置  -->
          <a-card title="基础配置">
            <a-row :gutter="gutter">
              <a-col :span="24">
                <a-form-item
                  label="API"
                  field="apiId"
                  :rules="[{ required: true, message: '必选项' }]"
                  :validate-trigger="['change', 'input']"
                >
                  <a-select v-model="formModel.apiId" :options="options.categoryList"></a-select>
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-form-item
                  field="modelTplId"
                  :rules="[{ required: true, validator: validatorTpl.bind(null, 'modelTplId') }]"
                  :validate-trigger="['change', 'input']"
                >
                  <template #label>
                    <a-space>
                      <span>模板</span>
                      <div><a-button size="mini" @click.prevent="handleAddTpl">新增模板</a-button></div>
                      <div><a-button size="mini" :disabled="!currentProject.modelTplId" @click.prevent="handleEditTpl" >编辑模板</a-button></div>
                    </a-space>
                  </template>
                  <a-select
                    v-model="currentProject.modelTplId"
                    :options="templateList"
                    allow-clear
                  />
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
                      <a-input-number v-model="currentProject.maxlength" allow-clear hide-button />
                    </a-form-item>
                  </div>
                </a-space>
              </a-col>
              <a-col :span="12">
                <div style="margin-top: 4px">
                  <a-form-item field="placeholder" no-style>
                    <a-checkbox v-model="currentProject.placeholder">是否生成placeholder</a-checkbox>
                  </a-form-item>
                </div>
              </a-col>
            </a-row>
          </a-card>
          <!--  其他配置  -->
          <a-card title="其他配置">
            <a-row :gutter="gutter">
              <a-space :size="2" class="a-space--shim" direction="vertical">
                <div><a-checkbox v-model="currentProject.grid">是否使用格栅布局</a-checkbox></div>
                <div><a-checkbox v-model="currentProject.generateLabel">Form表单项是否生成label</a-checkbox></div>
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
    <DialogModelTemplate ref="dialogModelTemplateRef" @success="handleSuccess" />
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  watch,
  toRef,
  toRefs,
  computed,
  PropType,
  defineEmits,
  defineProps,
  defineExpose,
} from 'vue';
import { get, cloneDeep } from 'lodash';
import { useRoute } from 'vue-router';
import { APIHelper } from '@api-helper/core/es/lib/types';
import { getSchema } from '@api-helper/core/es/lib/helpers';
import { Message, SelectOptionGroup } from '@arco-design/web-vue';
import { isSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';

import useForm from '@/hooks/use-form';
import { FormModel } from './interface';
import { treeForEach } from '@/utils/tree';
import { randomChar, modalConfirm } from '@/utils';
import { Project } from '@/store/project/interface';
import { Template } from '@/store/template/interface';
import { useModelTemplate, useProject } from '@/store';
import ApihSchemaTree from '@/components/apih-schema-tree/index.vue';
import genEmptyModelTemplate from '@/constants/template/model/empty';
import DialogModelTemplate from '../../dialog/dialog-model-template.vue';

type FormModelType = FormModel;

const emit = defineEmits(['success', 'exec-gen']);
const { currentProject } = useProject();

const span = ref(12);
const gutter = ref(15);
const dialogModelTemplateRef = ref();

const props = defineProps({
  data: {
    type: Object as PropType<FormModel>,
    default: () => ({}),
  },
  // ADD = '新增', EDIT = '修改'
  type: {
    type: String as PropType<'ADD' | 'EDIT' | 'DETAIL'>,
    default: 'ADD',
  },
  categoryList: {
    type: Array as PropType<APIHelper.CategoryList>,
    default: () => ([]),
  },
});
const route = useRoute();

const projectStore = useProject();
const modelTemplateStore = useModelTemplate();
const { templateList, templateMap } = toRefs(modelTemplateStore);

const {
  formRef,
  formModel,
  formRules,

  validate,
  validateFields,
  setFields,
  resetFields,
  getFormModel,
  setFormModel,
  clearValidate,
  getReactiveFormModel,
} = useForm<FormModelType>({
  ...new FormModel(),
}, {
  watchFormModel: toRef(props, 'data') as any,
});

const options = ref({
  categoryList: [] as Array<SelectOptionGroup>,
});

const apiMap = ref<Map<string, APIHelper.API>>(new Map<string, APIHelper.API>());

const project = computed<Project>(() => {
  const { id } = route.query;
  return projectStore.data.find((itm) => itm.id === id) as Project;
});

watch(() => props.categoryList, (categoryList) => {
  apiMap.value.clear();
  options.value.categoryList = categoryList?.map((module) => ({
    id: module.id,
    label: module.name,
    isGroup: true,
    options: module.apiList?.map((api) => {
      apiMap.value.set(api.id, api);
      return {
        value: api.id,
        label: api.label,
      };
    }) ?? [],
  })) ?? [];
}, { immediate: true });

watch(() => formModel.value.apiId, (val) => {
  formModel.value.api = apiMap.value.get(val) as APIHelper.API;
  const { apiId } = formModel.value;
  const api = apiMap.value.get(apiId);
  formModel.value.requestDataSchemaIdList = [];
  formModel.value.responseDataSchemaIdList = [];
  // 全选根节点上数据
  treeForEach(api?.requestDataSchema?.params, (item: APIHelper.Schema) => {
    if (item?.id) {
      formModel.value.requestDataSchemaIdList.push(item.id as string);
    }
  });
  // 全选根节点上数据
  const responseDataSchemaList = getResponseDataSchema()?.params ?? [];
  treeForEach(responseDataSchemaList, (item: APIHelper.Schema) => {
    if (item?.id) {
      formModel.value.responseDataSchemaIdList.push(item.id as string);
    }
  });
});

watch(() => formModel.value.requestDataSchemaIdList, (val) => {
  formModel.value.requestDataSchemaList = getSchemaList(val, requestFieldMap.value);
}, { deep: true });

watch(() => formModel.value.responseDataSchemaIdList, (val) => {
  formModel.value.responseDataSchemaList = getSchemaList(val, responseFieldMap.value);
}, { deep: true });

const requestFieldTree = computed(() => {
  const { apiId } = formModel.value;
  const api = apiMap.value.get(apiId);
  if (!api || !api.requestDataSchema) {
    return [];
  }
  return cloneDeep(api.requestDataSchema.params);
});

const responseFieldTree = computed(() => {
  const schema = getResponseDataSchema();
  if (!schema) {
    return [];
  }
  return schema?.params ?? [];
});

const requestFieldMap = computed<Map<string, APIHelper.Schema>>(() => {
  const map = new Map<string, APIHelper.Schema>();
  treeForEach(requestFieldTree.value, (schema: APIHelper.Schema) => {
    map.set(schema.id, schema);
  }, 'params');
  return map;
});

const responseFieldMap = computed<Map<string, APIHelper.Schema>>(() => {
  const map = new Map<string, APIHelper.Schema>();
  treeForEach(responseFieldTree.value, (schema: APIHelper.Schema) => {
    map.set(schema.id, schema);
  }, 'params');
  return map;
});

function getResponseDataSchema(): APIHelper.Schema | null {
  const { apiId } = formModel.value;
  const api = apiMap.value.get(apiId);
  if (!api || !api.responseDataSchema) {
    return null;
  }
  const { dataKey } = project.value;
  let schema: APIHelper.Schema | null = cloneDeep(api.responseDataSchema);
  if (dataKey) {
    schema = getSchema(schema, dataKey);
  }
  return schema;
}

function validatorTpl(keyName: string, value: unknown, callback: Function) {
  if (!get(currentProject, keyName)) {
    return callback('必选项');
  }
  callback();
}

function getSchemaList(ids: string[], record: Map<string, APIHelper.Schema>): APIHelper.SchemaList {
  ids = cloneDeep(ids);
  const schemaList: APIHelper.SchemaList = [];
  for (const id of ids) {
    const row = cloneDeep(record.get(id as string));
    if (row) {
      row.params = filterChildren(row.params, ids);
      schemaList.push(row);
    }
  }
  return schemaList;
}

function filterChildren(schemaList: APIHelper.SchemaList, checkIds: string[] = []) {
  return schemaList.filter((schema) => {
    const index = checkIds.indexOf(schema.id);
    // 原始值类型的子属性直接可用
    if (isSchemaPrimitiveValue(schema)) {
      return true;
    }
    // 子属性不在其中，移除
    if (index === -1) {
      return false;
    }
    // 递归子属性
    schema.params = filterChildren(schema.params, checkIds);
    return true;
  });
}

function handleAddTpl() {
  dialogModelTemplateRef.value?.open({
    type: 'ADD',
    title: '新增模板',
    formComponentProps: {
      data: genEmptyModelTemplate(),
    },
  });
}

async function handleEditTpl() {
  const tplModel = cloneDeep(templateMap.value.get(currentProject.modelTplId));
  if (!tplModel) {
    return Message.error('请重新选择模板');
  }
  if (tplModel.builtIn) {
    await modalConfirm('该模板为内置模板，不可进行编辑，是否复制该模板？');
    tplModel.label += ` - 副本${randomChar()}`;
    tplModel.value = '';
    tplModel.builtIn = false;
  }
  dialogModelTemplateRef.value?.open({
    type: 'EDIT',
    title: '修改模板',
    formComponentProps: {
      data: tplModel,
    },
  });
}

function handleSuccess(id: string) {
  currentProject.modelTplId = id;
  emit('exec-gen', id);
}

defineExpose({
  validate,
  validateFields,
  setFields,
  resetFields,
  getFormModel,
  setFormModel,
  clearValidate,
  getReactiveFormModel,
});
</script>
<style lang="scss" scoped>

</style>
