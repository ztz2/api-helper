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
              field="title"
              :rules="[{ required: true, message: '必填项' }]"
              :validate-trigger="['change', 'input']"
            >
              <a-input v-model="formModel.title" :max-length="64" />
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item
              label="文件模块"
              field="fileDirectoryConfigList"
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
                :data="formModel.fileDirectoryConfigList"
                file-icon
                draggable
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>
    </a-form>
    <CtrlDrawerExportFileDirectory ref="ctrlDrawerExportFileDirectoryRef" @success="handleSuccess"/>
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

import useForm from '@/hooks/use-form';
import { treeForEach } from '@/utils/tree';
import { FileDirectory, FileDirectoryConfig } from '@/store/file-directory/interface';
import CtrlDrawerExportFileDirectory from '../../__controller__/ctrl-drawer-export-file-directory.vue';

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
});
const span = ref(12);
const gutter = ref(15);
const loading = ref(false);
const selectFolder = ref('');
const ctrlDrawerExportFileDirectoryRef = ref('');
const fileDirectoryMap = computed<Map<string, FileDirectoryConfig>>(() => {
  const result = new Map();
  treeForEach(formModel.value.fileDirectoryConfigList, (node: FileDirectoryConfig) => {
    result.set(node.id, node);
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

function handleSuccess(data: FileDirectoryConfig) {
  const itm = fileDirectoryMap.value.get(data.id);
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
  formModel.value.fileDirectoryConfigList.push(data);
}

function handleAdd() {
  ctrlDrawerExportFileDirectoryRef.value.open({
    title: '新增文件(夹)',
    type: 'ADD',
  });
}

function handleEdit() {
  if (selectFolderNode.value) {
    ctrlDrawerExportFileDirectoryRef.value.open({
      type: 'EDIT',
      title: '修改文件(夹)',
      formComponentProps: {
        data: selectFolderNode.value,
      },
    });
  }
}

function handleDelete() {
  function dfs(nodeList: Array<FileDirectoryConfig>) {
    if (!Array.isArray(nodeList)) {
      return undefined;
    }
    for (let i = 0; i < nodeList.length; i++) {
      const itm = nodeList[i];
      if (itm.id === selectFolderNode.value?.id) {
        nodeList.splice(i, 1);
        return undefined;
      }
      dfs(itm.children);
    }
  }
  if (selectFolderNode.value) {
    dfs(formModel.value.fileDirectoryConfigList);
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
