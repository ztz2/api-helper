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
          <a-col :span="24">
            <a-form-item
              label="名称"
              field="label"
              :rules="[{ required: true, message: '必填项' }]"
              :validate-trigger="['change', 'input']"
            >
              <a-input v-model="formModel.label" :max-length="64" />
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item
              label="文件模块"
              field="fileDirectory"
              :rules="[{ min: 0, required: true, message: '文件模块不能为空' }]"
              :validate-trigger="['change', 'input']"
            >
              <template #label>
                <a-space>
                  <span>文件模块</span>
                  <a-button
                    size="mini"
                    type="primary"
                    :disabled="selectFolderNode?.isFolder === false"
                    @click.prevent="handleAdd"
                  >
                    新增文件(夹)
                  </a-button>
                  <a-button
                    size="mini"
                    type="primary"
                    :disabled="!selectFolderNode"
                    @click.prevent="handleDelete"
                  >
                    删除文件(夹)
                  </a-button>
                  <a-button
                    size="mini"
                    type="primary"
                    :disabled="!selectFolderNode"
                    @click.prevent="handleEdit"
                  >
                    修改文件(夹)信息
                  </a-button>
                </a-space>
              </template>
              <apih-tree
                v-model:value="selectFolder"
                :data="formModel.fileDirectory"
                file-icon
                draggable
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>
    </a-form>
    <DialogExportFileDirectory ref="dialogExportFileDirectoryRef" @success="handleSuccess"/>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  toRef,
  PropType,
  computed,
  defineProps,
  defineExpose,
} from 'vue';
import {
  SelectOptionGroup,
} from '@arco-design/web-vue';
import { merge } from 'lodash';
import {
  ExportFile,
  FileDirectory,
  createExportFile,
} from '@api-helper/template';

import { useProject } from '@/store';
import useForm from '@/hooks/use-form';
import { treeForEach } from '@/utils/tree';
import DialogExportFileDirectory from '../dialog/dialog-export-file-directory.vue';

type FormModelType = ExportFile;

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
} = useForm<FormModelType>(createExportFile(), {
  watchFormModel: toRef(props, 'data'),
});
const span = ref(12);
const gutter = ref(15);
const loading = ref(false);
const projectStore = useProject();
const selectFolder = ref('');
const dialogExportFileDirectoryRef = ref('');
const { currentProject } = projectStore;
const fileDirectoryMap = computed<Map<string, FileDirectory>>(() => {
  const result = new Map();
  treeForEach(formModel.value.fileDirectory, (node: FileDirectory) => {
    result.set(node.value, node);
  }, 'children');
  return result;
});
const selectFolderNode = computed(() => {
  const node = fileDirectoryMap.value.get(selectFolder.value);
  return node ?? null;
});

const options = ref({
  boo: [] as Array<SelectOptionGroup>,
});

function handleSuccess(data: FileDirectory) {
  const itm = fileDirectoryMap.value.get(data.value);
  // 修改
  if (itm) {
    merge(itm, data);
    return;
  }
  // 新增到已经选择的节点
  if (selectFolderNode.value) {
    selectFolderNode.value?.children.push(data);
    return undefined;
  }
  // 新增到根节点
  formModel.value.fileDirectory.push(data);
}

function handleAdd() {
  dialogExportFileDirectoryRef.value.open({
    title: '新增文件(夹)',
    type: 'ADD',
  });
}

function handleEdit() {
  if (selectFolderNode.value) {
    dialogExportFileDirectoryRef.value.open({
      type: 'EDIT',
      title: '修改文件(夹)',
      formComponentProps: {
        data: selectFolderNode.value,
      },
    });
  }
}

function handleDelete() {
  function dfs(nodeList: Array<FileDirectory>) {
    if (!Array.isArray(nodeList)) {
      return undefined;
    }
    for (let i = 0; i < nodeList.length; i++) {
      const itm = nodeList[i];
      if (itm.value === selectFolderNode.value?.value) {
        nodeList.splice(i, 1);
        return undefined;
      }
      dfs(itm.children);
    }
  }
  if (selectFolderNode.value) {
    dfs(formModel.value.fileDirectory);
  }
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
