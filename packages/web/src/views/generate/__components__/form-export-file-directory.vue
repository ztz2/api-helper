<template>
  <a-form
    ref="formRef"
    :model="formModel"
    :rules="formRules"
    layout="vertical"
    auto-label-width
  >
    <a-row :gutter="gutter">
      <a-col :span="24">
        <a-form-item
            field="title"
            :label="filename"
            :rules="[{ required: true, message: '必填项' }]"
            :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.title"
            placeholder="请输入..."
            :max-length="64"
            @change="handleChangeLabel"
          />
        </a-form-item>
      </a-col>
      <a-col :span="24">
        <a-form-item
            label="是否为文件夹"
            field="isFolder"
        >
          <a-checkbox v-model="formModel.isFolder">文件夹</a-checkbox>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
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
import textExtensions from 'text-extensions';

import useForm from '@/hooks/use-form';
import { FileDirectoryConfig } from '@/store/file-directory/interface';

type FormModelType = FileDirectoryConfig;

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
} = useForm<FormModelType>(new FileDirectoryConfig(), {
  watchFormModel: toRef(props, 'data'),
});
const filename = computed(() => (formModel.value.isFolder ? '文件夹名称' : '文件名称'));

function handleChangeLabel() {
  for (const extension of textExtensions) {
    if (formModel.value.title.endsWith(`.${extension}`)) {
      formModel.value.isFolder = false;
      return undefined;
    }
  }
  formModel.value.isFolder = true;
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
