<template>
  <a-spin
    tip="加载中..."
    class="ztz-spin"
    :loading="loading"
  >
    <a-row :gutter="gutter">
      <a-col :span="7">
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
                      :rules="[{ required: true, message: '必填项' }]"
                      :validate-trigger="['change', 'input']"
                    >
                      <a-input
                        v-model="formModel.label"
                        :max-length="64"
                        placeholder="请输入模板名称"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :span="24">
                    <a-form-item
                      label="模版文件后缀名"
                      field="formatCodeExtension"
                      tooltip="代码生成之后，会根据配置的后缀名，生成一个文件，调用 prettier 对生成的代码进行美化"
                    >
                      <a-select
                        value-key="id"
                        v-model="formModel.formatCodeExtension"
                        :options="options.formatCodeExtension"
                        allow-clear
                        placeholder="请选择模板文件后缀名"
                      />
                    </a-form-item>
                  </a-col>
                  <a-col :span="24">
                    <a-form-item
                      label="API"
                      field="apiId"
                    >
                      <a-select
                        v-model="baseInfo.apiId"
                        :options="options.categoryList"
                        placeholder="请选择API"
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
                      <ApihSchemaTree v-model:value="baseInfo.requestDataSchemaIdList" :data="requestFieldTree" />
                    </div>
                  </a-card>
                </a-col>
                <a-col :span="12">
                  <a-card style="width: 100%">
                    <template #title>
                      <div class="text-center">响应数据字段</div>
                    </template>
                    <div style="width: 100%; height: calc(100vh - 277px)">
                      <ApihSchemaTree v-model:value="baseInfo.responseDataSchemaIdList" :data="responseFieldTree" />
                    </div>
                  </a-card>
                </a-col>
              </a-row>
            </a-tab-pane>
          </a-tabs>
        </a-form>
      </a-col>
      <a-col :span="17">
        <a-row :gutter="gutter">
          <a-col :span="12">
            <a-card>
              <template #title>
                <a-space>
                  <span>编辑模版内容</span>
                  <apih-dialog-code-mirror
                    v-model:value="formModel.content"
                    @update:value="$emit('exec-gen')"
                  />
                </a-space>
              </template>
              <apih-code-mirror v-model="formModel.content" height="calc(100vh - 218px)" />
            </a-card>
          </a-col>
          <a-col :span="12">
            <a-card title="预览编辑模版内容">
              <a-spin
                tip="加载中..."
                class="ztz-spin"
                :loading="loadingPreview"
              >
                <apih-code :code="templateContent" height="calc(100vh - 218px)"></apih-code>
              </a-spin>
            </a-card>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </a-spin>
</template>

<script lang="ts" setup>
import {
  ref,
  watch,
  toRef,
  computed,
  PropType,
  onMounted,
  defineEmits,
  defineProps,
  defineExpose,
  onBeforeUnmount,
} from 'vue';
import { cloneDeep } from 'lodash';
import { useRoute } from 'vue-router';
import { Template } from '@api-helper/template';
import { formatCodeServer } from '@api-helper/template';
import { SelectOptionGroup } from '@arco-design/web-vue';
import { APIHelper } from '@api-helper/core/es/lib/types';
import { getSchema } from '@api-helper/core/es/lib/helpers';
import { FORMAT_CODE_EXTENSION } from '@api-helper/cli/lib/constants';

import { useProject } from '@/store';
import useForm from '@/hooks/use-form';
import { treeForEach } from '@/utils/tree';
import { DOCUMENT } from '@/constants/mock';
import { Project } from '@/store/project/interface';
import { FormModel } from '../form-model/interface';
import ApihSchemaTree from '@/components/apih-schema-tree/index.vue';

type FormModelType = Template;

const span = ref(12);
const gutter = ref(15);
defineEmits(['exec-gen']);
const props = defineProps({
  data: {
    type: Object as PropType<FormModelType>,
    default: () => ({}),
  },
  // ADD = '新增', EDIT = '修改'
  type: {
    type: String as PropType<'ADD' | 'EDIT' | 'DETAIL'>,
    default: 'ADD',
  },
  visible: Boolean,
});
const loading = ref(false);
const loadingPreview = ref(false);
const templateContent = ref('');
const route = useRoute();
const projectStore = useProject();
const { currentProject } = projectStore;
const {
  formRef,
  formModel,
  formRules,

  validate: _validate,
  validateFields,
  setFields,
  resetFields,
  getFormModel: _getFormModel,
  setFormModel,
  clearValidate,
  getReactiveFormModel,
} = useForm<FormModelType>(new Template(), {
  watchFormModel: toRef(props, 'data'),
});

const options = ref({
  formatCodeExtension: FORMAT_CODE_EXTENSION.map((c) => ({
    label: c, value: c,
  }))as any,
  categoryList: [] as Array<SelectOptionGroup>,
});

const defaultApiTplId = DOCUMENT.categoryList?.[0].apiList?.[0]?.id ?? '';
const baseInfo = ref(new FormModel({
  apiId: defaultApiTplId,
}));

const apiMap = ref<Map<string, APIHelper.API>>(new Map<string, APIHelper.API>());
const project = computed<Project>(() => {
  const { id } = route.query;
  return projectStore.data.find((itm) => itm.id === id) as Project;
});

let timer: number;
onMounted(() => {
  watch(() => formModel.value.content, (val) => {
    if (!val || val.trim() === '') {
      templateContent.value = val;
    } else {
      timer && clearTimeout(timer);
      timer = setTimeout(async () => {
        const v = formModel.value.content;
        if (!v || v.trim() === '' || !formModel.value.formatCodeExtension) {
          loadingPreview.value = false;
          templateContent.value = v;
          return;
        }
        loadingPreview.value = true;
        const res = await formatCodeServer({
          sourceCode: v,
          formatCodeExtension: '.js',
        });
        loadingPreview.value = false;
        templateContent.value = res as string;
      }, 1200) as unknown as number;
    }
  }, { immediate: true });

  watch(() => DOCUMENT.categoryList, (categoryList) => {
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

  watch(() => baseInfo.value.apiId, (val) => {
    baseInfo.value.api = apiMap.value.get(val) as APIHelper.API;
    const { api } = baseInfo.value;

    baseInfo.value.requestDataSchemaIdList = [];
    baseInfo.value.responseDataSchemaIdList = [];

    // 全选根节点上数据
    treeForEach(api?.requestDataSchema?.params, (item: APIHelper.Schema) => {
      if (item?.id) {
        baseInfo.value.requestDataSchemaIdList.push(item.id as string);
      }
    });
    const responseDataSchemaList = getResponseDataSchema()?.params ?? [];
    // 全选根节点上数据
    treeForEach(responseDataSchemaList, (item: APIHelper.Schema) => {
      if (item?.id) {
        baseInfo.value.responseDataSchemaIdList.push(item.id as string);
      }
    });
  }, { immediate: true });

  watch(() => baseInfo.value.requestDataSchemaIdList, (val) => {
    baseInfo.value.requestDataSchemaList = getSchemaList(val, requestFieldMap.value);
  }, { deep: true, immediate: true });

  watch(() => baseInfo.value.responseDataSchemaIdList, (val) => {
    baseInfo.value.responseDataSchemaList = getSchemaList(val, responseFieldMap.value);
  }, { deep: true, immediate: true });
});

onBeforeUnmount(() => {
  timer && clearTimeout(timer);
});

const requestFieldTree = computed(() => {
  const { apiId } = baseInfo.value;
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
  const { apiId } = baseInfo.value;
  const api = apiMap.value.get(apiId);
  if (!api || !api.responseDataSchema) {
    return null;
  }
  // const { dataKey } = project.value;
  const dataKey = 'data';
  let schema: APIHelper.Schema | null = cloneDeep(api.responseDataSchema);
  if (dataKey) {
    schema = getSchema(schema, dataKey);
  }
  return schema;
}

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
  });
}

function getFormModel() {
  const data = _getFormModel();
  return {
    ...baseInfo.value,
    ...data,
  };
}

defineExpose({
  validate: async () => {
    await _validate();
    return getFormModel();
  },
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
