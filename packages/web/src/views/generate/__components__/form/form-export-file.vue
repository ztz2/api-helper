<template>
  <div>
    <a-form
      ref="formRef"
      :model="formModel"
      :rules="formRules"
      layout="vertical"
      auto-label-width
    >
      <a-card title="基础信息">
        <a-row :gutter="gutter">
          <a-form-item
            label="文件模块导出路径"
            tooltip="当不能对该路径进行读写时候，会将文件模块打一个zip压缩包，并自动下载该压缩包"
            :validate-trigger="['change', 'input']"
          >
            <a-input
              value-key="id"
              v-model="currentDocumentConfig.fileDirectoryExportPath"
              placeholder="请输入文件模块导出路径"
              :max-length="512"
              allow-clear
            />
          </a-form-item>
          <a-form-item
            style="margin-bottom: 0"
            :rules="[{ required: true, validator: validatorProjectConfig.bind(null, 'fileDirectoryId') }]"
            :validate-trigger="['change', 'input']"
          >
            <template #label>
              <a-space>
                <span>文件模块配置</span>
                <apih-tooltip
                  :content="!formModel ? '' : formModel.builtIn !== false ? '当前选择模板为系统内置模板，不可删除' : ''"
                >
                  <a-popconfirm content="确认删除该模板?" @ok="handleDeleteTpl">
                    <a-button
                      size="mini"
                      status="danger"
                      :disabled="!showDelete"
                    >
                      删除文件模块配置
                    </a-button>
                  </a-popconfirm>
                </apih-tooltip>
                <a-button size="mini" type="primary" @click.prevent="handleAddTpl">新增文件模块配置</a-button>
                <a-button size="mini" type="primary" :disabled="!currentDocumentConfig.apiTplId" @click.prevent="handleEditTpl" >编辑文件模块配置</a-button>
              </a-space>
            </template>
            <apih-select
              value-key="id"
              v-model="currentDocumentConfig.fileDirectoryId"
              placeholder="请选择文件模块配置"
              :options="fileDirectoryListStore"
              allow-clear
            />
          </a-form-item>
        </a-row>
      </a-card>
      <a-row :gutter="gutter">
        <a-col :span="12">
          <a-card title="文件模块信息">
            <div class="box-sizing overflow" :style="{height: wrapHeight}">
              <div>
                <a-empty v-if="!currentDocumentConfig.fileDirectoryId" description="请选择文档模块配置" />
                <div v-else>
                  <a-form-item
                    class="hide-label"
                    style="margin-bottom: 0"
                    :rules="[{ required: true, message: '必填项' }]"
                    :validate-trigger="['change', 'input']"
                  >
                    <apih-tree
                      v-model:value="selectFolder"
                      :data="fileDirectoryList"
                      file-icon
                    />
                  </a-form-item>
                </div>
              </div>
            </div>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card>
            <template #title>
              <span>文件与模版、API关联</span>
              <span v-if="selectFolderNode">
                - 当前选择文件（<strong>{{selectFolderNode.title}}</strong>）
              </span>
            </template>
            <div class="box-sizing overflow" :style="{height: wrapHeight}">
              <div>
                <a-empty v-if="!selectFolderNode" description="请选择文件" />
                <div v-else>
                  <a-form-item
                    label="关联API"
                    :validate-trigger="['change', 'input']"
                  >
                    <div style="display: flex;width: 100%;">
                      <div style="flex-grow: 1;">
                        <apih-select
                          v-model="selectFolderNode.apiId"
                          placeholder="请选择需要关联的API"
                          :options="apiList"
                          allow-clear
                        />
                      </div>
                      <div style="margin-left: 12px;">
                        <a-button>字段选择</a-button>
                      </div>
                    </div>
                  </a-form-item>
                  <a-form-item
                    label="关联模板"
                    style="width: 100%"
                    :rules="[{ required: true, validator: validatorObject.bind(null, selectFolderNode, 'templateId', '必选项') }]"
                    :validate-trigger="['change', 'input']"
                  >
                    <apih-select
                      v-model="selectFolderNode.templateId"
                      value-key="id"
                      placeholder="请选择需要关联的模板"
                      :options="modelTemplateList"
                      allow-clear
                    />
                  </a-form-item>
                  <a-form-item
                    label="关联模版内容下标"
                    field="modelTplIndex"
                    style="margin-bottom: 0"
                    :rules="[{ required: true, validator: validatorObject.bind(null, selectFolderNode, 'templateContentIndex', '必填项') }]"
                    :validate-trigger="['change', 'input']"
                  >
                    <a-input-number
                      v-model="selectFolderNode.templateContentIndex"
                      placeholder="请输入关联模板内容下标"
                      :min="0"
                      :max="10"
                      hide-button
                    />
                  </a-form-item>
                </div>
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </a-form>
    <CtrlDrawerExportFileTemplate
      ref="ctrlDrawerExportFileTemplateRef"
      @success="handleSuccess"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  toRef,
  toRefs,
  watch,
  PropType,
  computed,
  defineProps,
  defineExpose,
} from 'vue';
import {
  cloneDeep,
} from 'lodash';
import {
  Message,
  TreeNodeData,
} from '@arco-design/web-vue';
import { APIHelper, getSchema } from '@api-helper/core';

import {
  useFileDirectory,
  useModelTemplate,
  useDocumentConfig,
} from '@/store';
import message from '@/utils/message';
import useForm from '@/hooks/use-form';
import { treeForEach } from '@/utils/tree';
import { modalConfirm, randomChar } from '@/utils';
import { validatorObject, validatorProjectConfig } from '@/utils/validator';
import { FileDirectory, FileDirectoryConfig } from '@/store/file-directory/interface';
import CtrlDrawerExportFileTemplate from '../../__controller__/ctrl-drawer-export-file-template.vue';

type FormModelType = FileDirectory;

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
  apiList: {
    type: Array as PropType<APIHelper.APIList>,
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
} = useForm<FormModelType>(new FileDirectory(), {
  watchFormModel: toRef(props, 'data'),
  getFormModel: async (data) => {
    data.fileDirectoryExportPath = currentDocumentConfig.value.fileDirectoryExportPath;
    // 生成模版数据
    treeForEach(data.fileDirectoryConfigList, (fileDirectory: FileDirectoryConfig) => {
      if (!fileDirectory.isFolder && fileDirectory.apiId && fileDirectory.templateId) {
        const api = props.apiList.find((t) => t.id === fileDirectory.apiId) as any;
        const modelTemplate = modelTemplateMap.value.get(fileDirectory.templateId) as any;
        if (!modelTemplate) {
          return;
        }
        const requestDataSchemaList = api?.requestDataSchema?.params ?? [];
        const responseDataSchemaList = getSchema(api?.responseDataSchema, currentDocumentConfigDataKey.value)?.params ?? [];
        fileDirectory.api = api;
        fileDirectory.template = modelTemplate;
        fileDirectory.requestDataSchemaList = requestDataSchemaList;
        fileDirectory.responseDataSchemaList = responseDataSchemaList;
      }
    });
    return data;
  },
});

const {
  fileDirectoryMap,
  deleteFileDirectoryById,
  fileDirectoryList: fileDirectoryListStore,
} = toRefs(useFileDirectory());
const { currentDocumentConfig, currentDocumentConfigDataKey } = toRefs(useDocumentConfig());
const { modelTemplateList, modelTemplateMap } = toRefs(useModelTemplate());

const span = ref(12);
const gutter = ref(15);
const wrapHeight = ref('calc(100vh - 488px)');
const loading = ref(false);
const selectFolder = ref('');
const ctrlDrawerExportFileTemplateRef = ref();
const showDelete = computed(() => formModel.value && formModel.value.id && formModel.value.builtIn === false);
const fileDirectoryConfigMap = computed<Map<string, FileDirectoryConfig>>(() => {
  const result = new Map();
  treeForEach(formModel.value.fileDirectoryConfigList, (node: FileDirectory) => {
    result.set(node.id, node);
  }, 'children');
  return result;
});
const selectFolderNode = ref<FileDirectoryConfig>(null!);
watch(() => selectFolder.value, (v) => {
  const node = fileDirectoryConfigMap.value.get(v);
  selectFolderNode.value = node ?? null!;
});
const fileDirectoryList = computed(() => {
  treeForEach(formModel.value.fileDirectoryConfigList, (itm: TreeNodeData & FileDirectoryConfig) => {
    itm.disabled = itm.isFolder;
  });
  return formModel.value.fileDirectoryConfigList;
});
watch([() => currentDocumentConfig.value.fileDirectoryId, () => props.visible], () => {
  selectFolder.value = '';
  formModel.value = cloneDeep(fileDirectoryMap.value.get(currentDocumentConfig.value.fileDirectoryId) ?? new FileDirectory()) as FileDirectory;
  console.log(formModel.value);
}, { immediate: true });

function handleSuccess(id: string) {
  currentDocumentConfig.value.fileDirectoryId = id;
}

function handleDeleteTpl() {
  if (!formModel.value) {
    return message.warn('没有选择模板.');
  }
  deleteFileDirectoryById.value(currentDocumentConfig.value.fileDirectoryId, {
    onSuccess() {
      currentDocumentConfig.value.fileDirectoryId = '';
    },
  });
}
function handleAddTpl() {
  ctrlDrawerExportFileTemplateRef.value?.open({
    type: 'ADD',
    title: '新增模板',
    formComponentProps: {
      data: new FileDirectory(),
    },
  });
}

async function handleEditTpl() {
  const tplModel = cloneDeep(modelTemplateMap.value.get(currentDocumentConfig.value.fileDirectoryId));
  if (!tplModel) {
    return Message.error('请重新选择模板');
  }
  if (tplModel.builtIn) {
    await modalConfirm('该模板为内置模板，不可进行编辑，是否复制该模板？');
    tplModel.title += ` - 副本${randomChar()}`;
    tplModel.id = '';
    tplModel.builtIn = false;
  }
  ctrlDrawerExportFileTemplateRef.value?.open({
    type: 'EDIT',
    title: '修改模板',
    formComponentProps: {
      data: tplModel,
    },
  });
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
