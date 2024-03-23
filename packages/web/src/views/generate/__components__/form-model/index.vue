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
                  <apih-select
                    v-model="formModel.apiId"
                    :options="options.categoryList"
                    placeholder="请选择API"
                    allow-clear
                  />
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
                      <apih-tooltip
                        :content="!selectedTemplate ? '' : selectedTemplate.builtIn !== false ? '当前选择模板为系统内置模板，不可删除' : ''"
                      >
                        <a-popconfirm content="确认删除该模板?" @ok="handleDeleteTpl">
                          <a-button
                            size="mini"
                            status="danger"
                            :disabled="!showDelete"
                          >
                            删除模板
                          </a-button>
                        </a-popconfirm>
                      </apih-tooltip>
                      <a-button type="primary" size="mini" @click.prevent="handleAddTpl">新增模板</a-button>
                      <a-button type="primary" size="mini" :disabled="!currentDocumentConfig.modelTplId" @click.prevent="handleEditTpl" >编辑模板</a-button>
                    </a-space>
                  </template>
                  <apih-select
                    v-model="currentDocumentConfig.modelTplId"
                    :options="modelTemplateList"
                    placeholder="请选择模板"
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
                      <a-input-number v-model="currentDocumentConfig.maxlength" allow-clear hide-button />
                    </a-form-item>
                  </div>
                </a-space>
              </a-col>
              <a-col :span="12">
                <div style="margin-top: 4px">
                  <a-form-item field="placeholder" no-style>
                    <a-checkbox v-model="currentDocumentConfig.placeholder">是否生成placeholder</a-checkbox>
                  </a-form-item>
                </div>
              </a-col>
            </a-row>
          </a-card>
          <!--  其他配置  -->
          <a-card title="其他配置">
            <a-row :gutter="gutter">
              <a-space :size="2" class="a-space--shim" direction="vertical">
                <div><a-checkbox v-model="currentDocumentConfig.grid">是否使用格栅布局</a-checkbox></div>
                <div><a-checkbox v-model="currentDocumentConfig.generateLabel">Form表单项是否生成label</a-checkbox></div>
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
                <div style="width: 100%;">
                  <apih-schema-tree
                    v-model:value="formModel.requestDataSchemaIdList"
                    v-model:expanded-keys="requestExpandedKeys"
                    :data="requestDataSchemaList"
                    height="calc(100vh - 308px)"
                    extra-label-key="label"
                    draggable
                  />
                </div>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card style="width: 100%">
                <template #title>
                  <div class="text-center">响应数据字段</div>
                </template>
                <div style="width: 100%;">
                  <apih-schema-tree
                    v-model:value="formModel.responseDataSchemaIdList"
                    v-model:expanded-keys="responseExpandedKeys"
                    :data="responseDataSchemaList"
                    extra-label-key="label"
                    height="calc(100vh - 308px)"
                    draggable
                  />
                </div>
              </a-card>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
    </a-form>
    <CtrlDrawerModelTemplate ref="ctrlDrawerModelTemplateRef" @success="handleSuccess" />
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
  defineExpose, nextTick,
} from 'vue';
import { get, cloneDeep } from 'lodash';
import { useRoute } from 'vue-router';
import { APIHelper } from '@api-helper/core/es/lib/types';
import { randomChar } from '@api-helper/core/lib/utils/util';
import { Message, SelectOptionGroup } from '@arco-design/web-vue';

import message from '@/utils/message';
import useForm from '@/hooks/use-form';
import { modalConfirm } from '@/utils';
import { FormModel } from './interface';
import { treeForEach } from '@/utils/tree';
import { getSchemaListByIds } from '@/utils/schema';
import { Template } from '@/store/template/interface';
import { useModelTemplate, useDocumentConfig } from '@/store';
import { DocumentConfig } from '@/store/document-config/interface';
import genEmptyModelTemplate from '@/constants/template/model/empty';
import useSchema, { getResponseDataSchema } from '@/hooks/use-schema';
import CtrlDrawerModelTemplate from '../../__controller__/ctrl-drawer-model-template.vue';

type FormModelType = FormModel;

const emit = defineEmits(['success', 'exec-gen']);

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

const selectedApi = ref<APIHelper.API>({} as APIHelper.API);
const route = useRoute();
const {
  requestDataSchemaList,
  responseDataSchemaList,
  requestDataSchemaMap,
  responseDataSchemaMap,
} = useSchema(selectedApi);
const {
  documentConfigList,
  currentDocumentConfig,
} = toRefs(useDocumentConfig());
const {
  modelTemplateMap,
  modelTemplateList,
  deleteModelTemplateById,
} = toRefs(useModelTemplate());

const span = ref(12);
const gutter = ref(15);
const ctrlDrawerModelTemplateRef = ref();
const selectedTemplate = computed(() => modelTemplateMap.value.get(currentDocumentConfig.value.modelTplId));
const showDelete = computed(() => selectedTemplate?.value?.builtIn === false);
const requestExpandedKeys = ref<string[]>([]);
const responseExpandedKeys = ref<string[]>([]);

const options = ref({
  categoryList: [] as Array<SelectOptionGroup>,
});

const apiMap = ref<Map<string, APIHelper.API>>(new Map<string, APIHelper.API>());

const documentConfig = computed<DocumentConfig>(() => {
  const { id } = route.query;
  return documentConfigList.value.find((itm) => itm.id === id) as DocumentConfig;
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
        id: api.id,
        title: api.label,
      };
    }) ?? [],
  })) ?? [];
}, { immediate: true });

watch(() => formModel.value.apiId, (val) => {
  formModel.value.api = apiMap.value.get(val) as APIHelper.API;
  const { apiId } = formModel.value;
  const api = apiMap.value.get(apiId);
  selectedApi.value = api!;
  formModel.value.requestDataSchemaIdList = [];
  formModel.value.responseDataSchemaIdList = [];
  // 全选根节点上数据
  let isFindRequestKey = false;
  requestExpandedKeys.value.splice(0, requestExpandedKeys.value.length);
  treeForEach([api?.requestDataSchema].filter(Boolean), (item: APIHelper.Schema, isRoot = false) => {
    if (isRoot) {
      requestExpandedKeys.value.splice(0, requestExpandedKeys.value.length);
    }
    if (!item.keyName) {
      requestExpandedKeys.value.push(item.id);
    } else {
      formModel.value.requestDataSchemaIdList.push(item.id as string);
      isFindRequestKey = true;
      return { continue: true };
    }
  }, 'params');
  if (!isFindRequestKey) {
    requestExpandedKeys.value.splice(0, requestExpandedKeys.value.length);
  }
  // 全选根节点上数据
  const responseDataSchema = [getResponseDataSchema(api, currentDocumentConfig.value.dataKey)].filter(Boolean);
  let isFindResponseKey = false;
  responseExpandedKeys.value.splice(0, responseExpandedKeys.value.length);
  treeForEach(responseDataSchema, (item: APIHelper.Schema, isRoot = false) => {
    if (isRoot) {
      responseExpandedKeys.value.splice(0, responseExpandedKeys.value.length);
    }
    if (!item.keyName) {
      responseExpandedKeys.value.push(item.id);
    } else {
      formModel.value.responseDataSchemaIdList.push(item.id as string);
      isFindResponseKey = true;
      return { continue: true };
    }
  }, 'params');
  if (!isFindResponseKey) {
    responseExpandedKeys.value.splice(0, responseExpandedKeys.value.length);
  }
}, { immediate: true });

watch(() => formModel.value.requestDataSchemaIdList, (val) => {
  nextTick(() => {
    formModel.value.requestDataSchemaList = getSchemaListByIds(val, requestDataSchemaMap.value);
  });
}, { deep: true });

watch(() => formModel.value.responseDataSchemaIdList, (val) => {
  nextTick(() => {
    formModel.value.responseDataSchemaList = getSchemaListByIds(val, responseDataSchemaMap.value);
  });
}, { deep: true });

function validatorTpl(keyName: string, value: unknown, callback: Function) {
  if (!get(currentDocumentConfig.value, keyName)) {
    return callback('必选项');
  }
  callback();
}

function handleAddTpl() {
  ctrlDrawerModelTemplateRef.value?.open({
    type: 'ADD',
    title: '新增模板',
    formComponentProps: {
      data: genEmptyModelTemplate(),
    },
  });
}

function handleDeleteTpl() {
  if (!selectedTemplate.value) {
    return message.warn('没有选择模板.');
  }
  deleteModelTemplateById.value(currentDocumentConfig.value.modelTplId, {
    onSuccess() {
      currentDocumentConfig.value.modelTplId = '';
    },
  });
}

async function handleEditTpl() {
  const tplModel = cloneDeep(modelTemplateMap.value.get(currentDocumentConfig.value.modelTplId));
  if (!tplModel) {
    return Message.error('请重新选择模板');
  }
  if (tplModel.builtIn) {
    await modalConfirm('该模板为内置模板，不可进行编辑，是否复制该模板？');
    tplModel.title += ` - 副本${randomChar(4)}`;
    tplModel.id = '';
    tplModel.builtIn = false;
  }
  ctrlDrawerModelTemplateRef.value?.open({
    type: 'EDIT',
    title: '修改模板',
    formComponentProps: {
      data: tplModel,
    },
  });
}

function handleSuccess(id: string) {
  currentDocumentConfig.value.modelTplId = id;
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
