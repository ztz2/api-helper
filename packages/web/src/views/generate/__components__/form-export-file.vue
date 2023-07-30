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
            label="文件模块生成路径"
            tooltip="文件模块生成之后，会输出到该目录下，该功能需本地部署电脑使用才会生效。非本地部署电脑使用时会将文件模块合成一个zip压缩包，并自动下载该压缩包"
            :validate-trigger="['change', 'input']"
          >
            <a-input
              value-key="id"
              v-model="currentDocumentConfig.fileDirectoryExportPath"
              placeholder="请输入文件模块生成路径"
              :max-length="512"
              allow-clear
            >
              <template v-if="FILE_DIRECTORY_BASE_PATH" #append>
                <a-space>
                  <span>{{pathDelimiter}}</span>
                  <span>{{FILE_DIRECTORY_BASE_PATH}}</span>
                </a-space>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            style="margin-bottom: 0"
            field="fileDirectoryId"
            :rules="[{ required: true, validator: validatorProjectConfig.bind(null, 'fileDirectoryId') }]"
            :validate-trigger="['change', 'input']"
          >
            <template #label>
              <a-space>
                <span>文件模块配置</span>
                <apih-tooltip
                  :content="!formModel ? '' : formModel.builtIn !== false ? '当前选择模板为系统内置模板，不可删除' : ''"
                >
                  <a-popconfirm content="确认删除该模板?" @ok="handleDeleteFileDirectory">
                    <a-button
                      size="mini"
                      status="danger"
                      :disabled="!showDelete"
                    >
                      删除文件模块配置
                    </a-button>
                  </a-popconfirm>
                </apih-tooltip>
                <a-button size="mini" type="primary" @click.prevent="handleAddFileDirectory">新增文件模块配置</a-button>
                <a-button size="mini" type="primary" :disabled="!currentDocumentConfig.fileDirectoryId" @click.prevent="handleEditFileDirectory" >编辑文件模块配置</a-button>
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
                    >
                      <template #title="{title, templateId}">
                        <a-space>
                          <span>{{title}}</span>
                          <a-tooltip v-if="checkHasTemplate(templateId)" content="该文件已关联模版">
                            <icon-exclamation-circle style="color: #FF5722" />
                          </a-tooltip>
                        </a-space>
                      </template>
                    </apih-tree>
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
                        <apih-select-schema
                          v-model:request-data-schema-value="selectFolderNode.requestDataSchemaIds"
                          v-model:response-data-schema-value="selectFolderNode.responseDataSchemaIds"
                          :api="selectedApi"
                        >
                          <a-button :disabled="!selectedApi">字段选择</a-button>
                        </apih-select-schema>
                      </div>
                    </div>
                  </a-form-item>
                  <a-form-item
                    label="关联模板"
                    field="templateId"
                    style="width: 100%"
                    :rules="[{ required: true, validator: validatorTemplateId }]"
                    :validate-trigger="['change', 'input']"
                  >
                    <apih-select
                      v-model="selectFolderNode.templateId"
                      value-key="id"
                      placeholder="请选择需要关联的模板"
                      :options="modelTemplateList"
                      @change="updateFileDirectoryConfigTemplateId"
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
                      @change="updateFileDirectoryConfigTemplateContentIndex"
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
  nextTick,
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
import { APIHelper } from '@api-helper/core';
import { randomChar } from '@api-helper/core/lib/utils/util';

import { checkType } from '@api-helper/core/lib/utils/util';
import {
  useFileDirectory,
  useModelTemplate,
  useDocumentConfig,
} from '@/store';
import message from '@/utils/message';
import useForm from '@/hooks/use-form';
import { treeForEach } from '@/utils/tree';
import { isWindowsSystem, modalConfirm } from '@/utils';
import { getSchemaListByIds } from '@/utils/schema';
import useSchema, { getDataSchemaList } from '@/hooks/use-schema';
import { validatorObject, validatorProjectConfig } from '@/utils/validator';
import {
  FileDirectory,
  FileDirectoryConfig,
  createFileDirectory,
  createFileDirectoryConfig,
} from '@/store/file-directory/interface';
import CtrlDrawerExportFileTemplate from '../__controller__/ctrl-drawer-export-file-template.vue';
import { FILE_DIRECTORY_BASE_PATH } from '@/constants';

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
    treeForEach(data.fileDirectoryConfigList, (fileDirectoryConfig: FileDirectoryConfig) => {
      if (!fileDirectoryConfig.isFolder && fileDirectoryConfig.templateId) {
        fileDirectoryConfig.template = cloneDeep(modelTemplateMap.value.get(fileDirectoryConfig.templateId))!;
      }
    }, 'children');
    return data;
  },
});

const {
  fileDirectoryMap,
  deleteFileDirectoryById,
  fileDirectoryList: fileDirectoryListStore,
  updateFileDirectoryConfigTemplate,
} = toRefs(useFileDirectory());
const { currentDocumentConfig } = toRefs(useDocumentConfig());
const { modelTemplateList, modelTemplateMap } = toRefs(useModelTemplate());

const span = ref(12);
const gutter = ref(15);
const pathDelimiter = ref(isWindowsSystem() ? '\\' : '/');
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

// 选择API变化，绑定该API实例
const selectedApi = computed(() => props.apiList.find((t) => t.id === selectFolderNode.value?.apiId));
const {
  requestDataSchemaList,
  responseDataSchemaList,
  requestDataSchemaMap,
  responseDataSchemaMap,
} = useSchema(selectedApi);
watch(() => selectFolderNode.value?.apiId, () => {
  if (selectFolderNode.value) {
    const [req, resp] = getDataSchemaList(selectedApi.value, currentDocumentConfig.value.dataKey, true);
    selectFolderNode.value.api = selectedApi.value!;
    selectFolderNode.value.requestDataSchemaIds = req.map((itm) => itm.id);
    selectFolderNode.value.responseDataSchemaIds = resp.map((itm) => itm.id);
  }
});
watch(() => selectFolderNode.value?.requestDataSchemaIds, (val) => {
  if (selectFolderNode.value) {
    nextTick(() => {
      selectFolderNode.value.requestDataSchemaList = getSchemaListByIds(val, requestDataSchemaMap.value);
    });
  }
}, { deep: true });
watch(() => selectFolderNode.value?.responseDataSchemaIds, (val) => {
  if (selectFolderNode.value) {
    nextTick(() => {
      selectFolderNode.value.responseDataSchemaList = getSchemaListByIds(val, responseDataSchemaMap.value);
    });
  }
}, { deep: true });
// 选择模版变化，绑定该模版实例
const selectedTemplate = computed(() => modelTemplateMap.value.get(selectFolderNode.value?.templateId));
watch(() => selectFolderNode.value?.templateId, () => {
  if (selectFolderNode.value) {
    selectFolderNode.value.template = cloneDeep(selectedTemplate.value!);
  }
});

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
  formModel.value = cloneDeep(
    fileDirectoryMap.value.get(currentDocumentConfig.value.fileDirectoryId) ?? new FileDirectory(),
  ) as FileDirectory;
}, { immediate: true });

watch(() => selectFolderNode.value?.templateContentIndex, () => {
  const id = selectFolderNode.value?.id;
  if (id) {

  }
});
function updateFileDirectoryConfigTemplateId() {
  const id = selectFolderNode.value?.id;
  if (id) {
    updateFileDirectoryConfigTemplate.value([
      { id, templateId: selectFolderNode.value.templateId } as FileDirectoryConfig,
    ]);
  }
}
function updateFileDirectoryConfigTemplateContentIndex() {
  const id = selectFolderNode.value?.id;
  if (id) {
    updateFileDirectoryConfigTemplate.value([
      { id, templateContentIndex: selectFolderNode.value.templateContentIndex } as FileDirectoryConfig,
    ]);
  }
}
function checkHasTemplate(id: string) {
  const tpl = modelTemplateMap.value.get(id);
  return checkType(tpl, 'Object') && tpl && Object.keys(tpl).length > 0;
}

function validatorTemplateId(value: unknown, callback: Function) {
  if (!selectFolderNode.value.templateId) {
    return callback('必选项');
  }
  if (!modelTemplateMap.value.get(selectFolderNode.value?.templateId)) {
    return callback('模板不存在，请重新选择');
  }
  callback();
}

function handleSuccess(id: string) {
  if (id === currentDocumentConfig.value.fileDirectoryId) {
    formModel.value = cloneDeep(
      fileDirectoryMap.value.get(id) ?? new FileDirectory(),
    ) as FileDirectory;
    return;
  }
  currentDocumentConfig.value.fileDirectoryId = id;
}

function handleDeleteFileDirectory() {
  if (!formModel.value) {
    return message.warn('没有选择模板.');
  }
  deleteFileDirectoryById.value(currentDocumentConfig.value.fileDirectoryId, {
    onSuccess() {
      currentDocumentConfig.value.fileDirectoryId = '';
    },
  });
}
function handleAddFileDirectory() {
  ctrlDrawerExportFileTemplateRef.value?.open({
    type: 'ADD',
    title: '新增文件模块配置',
    formComponentProps: {
      data: createFileDirectory({
        fileDirectoryConfigList: [
          createFileDirectoryConfig({
            title: '__components__',
            isFolder: true,
            children: [
              createFileDirectoryConfig({
                title: 'form.vue',
              }, true),
              createFileDirectoryConfig({
                title: 'table.vue',
              }, true),
            ],
          }, true),
          createFileDirectoryConfig({
            title: 'index.vue',
          }, true),
        ],
      }, true),
    },
  });
}

async function handleEditFileDirectory() {
  const fileDirectory = cloneDeep(fileDirectoryMap.value.get(currentDocumentConfig.value.fileDirectoryId));
  if (!fileDirectory) {
    return Message.error('请重新选择文件模块配置');
  }
  const data = cloneDeep(formModel.value);
  treeForEach(data.fileDirectoryConfigList, (itm: Recordable) => {
    delete itm.disabled;
  }, 'children');
  if (fileDirectory.builtIn) {
    await modalConfirm('该模板为内置模板，不可进行编辑，是否复制该模板？');
    data.title += ` - 副本${randomChar(4)}`;
    data.id = '';
    data.builtIn = false;
  }
  ctrlDrawerExportFileTemplateRef.value?.open({
    type: 'EDIT',
    title: '修改文件模块配置',
    formComponentProps: {
      data,
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
