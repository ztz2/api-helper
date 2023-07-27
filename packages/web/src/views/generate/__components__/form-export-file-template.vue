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
                  <a-popconfirm content="确认删除?" @ok="handleDelete">
                    <a-button
                      size="mini"
                      type="primary"
                      :disabled="!selectFolderNode"
                    >
                      删除文件(夹)
                    </a-button>
                  </a-popconfirm>
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
                expand-all
                sort-filename
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>
    </a-form>
    <CtrlDrawerExportFileDirectory
      ref="ctrlDrawerExportFileDirectoryRef"
      @success="handleSuccess"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  toRef,
  watch,
  nextTick,
  PropType,
  computed,
  defineProps,
  defineExpose,
} from 'vue';
import { merge } from 'lodash';

import message from '@/utils/message';
import useForm from '@/hooks/use-form';
import { treeForEach } from '@/utils/tree';
import { FileDirectory, FileDirectoryConfig } from '@/store/file-directory/interface';
import CtrlDrawerExportFileDirectory from '../__controller__/ctrl-drawer-export-file-directory.vue';

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

watch(() => props.visible, (val) => {
  if (val) {
    nextTick(() => {
      selectFolder.value = formModel.value.fileDirectoryConfigList[0]?.id ?? '';
    });
  }
});

function handleSuccess(data: FileDirectoryConfig) {
  const itm = fileDirectoryMap.value.get(data.id);

  // 修改
  if (itm) {
    merge(itm, data);
    // 如果是文件夹，自动选中
    if (data.isFolder) {
      selectFolder.value = data.id;
    }
    return;
  }

  const wrap = selectFolderNode.value ? selectFolderNode.value.children : formModel.value.fileDirectoryConfigList;
  // 新增到已经选择的节点或者新增到根节点
  const exist = wrap.find((itm) => itm.title === data.title);
  if (exist) {
    return message.warn(`${data.title}已存在！`);
  }
  wrap.push(data);

  // 根节点文件夹，自动选中
  if (data.isFolder) {
    selectFolder.value = data.id;
  }
}

function removeAlreadyExist(nodeList: Array<FileDirectoryConfig>, title: string) {
  if (!nodeList.length || !title) {
    return undefined;
  }
  let index = nodeList.findIndex((itm) => itm.title === title);
  while (index !== -1) {
    nodeList.splice(index, 1);
    index = nodeList.findIndex((itm) => itm.title === title);
  }
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
      if (itm.id === selectFolder.value) {
        nodeList.splice(i, 1);
        return undefined;
      }
      dfs(itm.children);
    }
  }
  if (selectFolder.value) {
    dfs(formModel.value.fileDirectoryConfigList);
  }
  selectFolder.value = '';
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
