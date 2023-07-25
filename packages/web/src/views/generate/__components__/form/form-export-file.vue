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
            field="exportFilePath"
            :rules="[{ required: true, validator: validatorProjectConfig.bind(null, 'exportFilePath') }]"
            :validate-trigger="['change', 'input']"
          >
            <a-input
              value-key="id"
              v-model="currentProject.exportFilePath"
              placeholder="请输入文件模块导出路径"
              :max-length="512"
              allow-clear
            />
          </a-form-item>
          <a-form-item
            field="apiTplId"
            style="margin-bottom: 0"
            :rules="[{ required: true, validator: validatorProjectConfig.bind(null, 'exportFileId') }]"
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
                <a-button size="mini" type="primary" :disabled="!currentProject.apiTplId" @click.prevent="handleEditTpl" >编辑文件模块配置</a-button>
              </a-space>
            </template>
            <a-select
              value-key="id"
              v-model="currentProject.exportFileId"
              placeholder="请选择文件模块配置"
              :options="templateList"
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
                <a-empty v-if="!currentProject.exportFileId" description="请选择文档模块配置" />
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
                - 当前选择文件（<strong>{{selectFolderNode.label}}</strong>）
              </span>
            </template>
            <div class="box-sizing overflow" :style="{height: wrapHeight}">
              <div>
                <a-empty v-if="!selectFolderNode" description="请选择文件" />
                <div v-else>
                  <a-form-item
                    label="关联API"
                    field="apiId"
                    :rules="[{ required: true, validator: validatorObject.bind(null, selectFolderNode, 'apiId', '必选项') }]"
                    :validate-trigger="['change', 'input']"
                  >
                    <apih-select
                      v-model="selectFolderNode.apiId"
                      placeholder="请选择需要关联的API"
                      :options="apiList"
                      allow-clear
                    />
                  </a-form-item>
                  <a-form-item
                    label="关联模板"
                    field="modelTplId"
                    style="width: 100%"
                    :rules="[{ required: true, validator: validatorObject.bind(null, selectFolderNode, 'modelTplId', '必选项') }]"
                    :validate-trigger="['change', 'input']"
                  >
                    <a-select
                      v-model="selectFolderNode.modelTplId"
                      value-key="id"
                      placeholder="请选择需要关联的模板"
                      :options="moduleTemplateList"
                      allow-clear
                    />
                  </a-form-item>
                  <a-form-item
                    label="关联模版内容下标"
                    field="modelTplIndex"
                    style="margin-bottom: 0"
                    :rules="[{ required: true, validator: validatorObject.bind(null, selectFolderNode, 'modelTplIndex', '必填项') }]"
                    :validate-trigger="['change', 'input']"
                  >
                    <a-input-number
                      v-model="selectFolderNode.modelTplIndex"
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
    <DialogExportFileTemplate
      ref="dialogExportFileTemplateRef"
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
  get,
  cloneDeep,
} from 'lodash';
import {
  Message,
  TreeNodeData,
} from '@arco-design/web-vue';
import {
  Template,
  ExportFile,
  FileDirectory,
  createExportFile,
} from '@api-helper/template';

import { APIHelper } from '@api-helper/core';
import message from '@/utils/message';
import useForm from '@/hooks/use-form';
import { treeForEach } from '@/utils/tree';
import { modalConfirm, randomChar } from '@/utils';
import { useExportFile, useModelTemplate, useProject } from '@/store';
import DialogExportFileTemplate from '../dialog/dialog-export-file-template.vue';
import { validatorObject, validatorProjectConfig } from '@/utils/validator';

type FormModelType = ExportFile;

const span = ref(12);
const gutter = ref(15);

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
} = useForm<FormModelType>(new ExportFile(), {
  watchFormModel: toRef(props, 'data'),
});

const projectStore = useProject();
const {
  deleteById,
  templateMap,
  templateList,
} = toRefs(useExportFile());
const { templateList: moduleTemplateList } = toRefs(useModelTemplate());

const wrapHeight = ref('calc(100vh - 488px)');
const loading = ref(false);
const selectFolder = ref('');
const { currentProject } = projectStore;
const dialogExportFileTemplateRef = ref();
const showDelete = computed(() => formModel?.value?.builtIn === false);
const fileDirectoryMap = computed<Map<string, FileDirectory>>(() => {
  const result = new Map();
  treeForEach(formModel.value.fileDirectory, (node: FileDirectory) => {
    result.set(node.value, node);
  }, 'children');
  return result;
});
const selectFolderNode = ref<FileDirectory>(null!);
watch(() => selectFolder.value, (v) => {
  const node = fileDirectoryMap.value.get(v);
  if (node) {
    node.apiId = 'fffffffff';
  }
  selectFolderNode.value = node ?? null!;
});
const fileDirectoryList = computed(() => {
  treeForEach(formModel.value.fileDirectory, (itm: TreeNodeData & FileDirectory) => {
    itm.disabled = itm.isFolder;
  });
  return formModel.value.fileDirectory;
});
watch([() => currentProject.exportFileId, () => props.visible], () => {
  selectFolder.value = '';
  formModel.value = cloneDeep(templateMap.value.get(currentProject.exportFileId)) ?? createExportFile() as any;
}, { immediate: true });

function handleSuccess(id: string) {
  currentProject.exportFileId = id;
}

function handleDeleteTpl() {
  if (!formModel.value) {
    return message.warn('没有选择模板.');
  }
  deleteById.value(currentProject.exportFileId, {
    onSuccess() {
      currentProject.exportFileId = '';
    },
  });
}
function handleAddTpl() {
  dialogExportFileTemplateRef.value?.open({
    type: 'ADD',
    title: '新增模板',
    formComponentProps: {
      data: createExportFile(),
    },
  });
}

async function handleEditTpl() {
  const tplModel = cloneDeep(templateMap.value.get(currentProject.exportFileId));
  if (!tplModel) {
    return Message.error('请重新选择模板');
  }
  if (tplModel.builtIn) {
    await modalConfirm('该模板为内置模板，不可进行编辑，是否复制该模板？');
    tplModel.label += ` - 副本${randomChar()}`;
    tplModel.value = '';
    tplModel.builtIn = false;
  }
  dialogExportFileTemplateRef.value?.open({
    type: 'EDIT',
    title: '修改模板',
    formComponentProps: {
      data: tplModel,
    },
  });
}

function handleChange(v: string) {
  console.log(v);
  // selectFolderNode.apiId = v;
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
