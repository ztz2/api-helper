<template>
  <div>
    <a-form
        ref="formRef"
        :model="formModel"
        :rules="formRules"
        layout="vertical"
        auto-label-width
    >
      <a-card>
        <a-form-item
          label="模板文件"
          field="fileList"
          style="margin-bottom: 0"
          :limit="1"
          :rules="[{ validator: validateFileList }]"
          :validate-trigger="['change', 'input']"
        >
          <a-upload v-model:file-list="formModel.fileList" action="/" draggable :auto-upload="false" @change="handleChange" />
        </a-form-item>
      </a-card>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  toRef,
  watch,
  isRef,
  toRefs,
  PropType,
  isReactive,
  defineProps,
  defineExpose,
  defineEmits,
} from 'vue';
import { Message } from '@arco-design/web-vue';

import useForm from '@/hooks/use-form';

type FormModelType = { fileList: File[] };

const emit = defineEmits(['save-template']);

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
});

const gutter = ref(15);

const {
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
} = useForm<FormModelType>({ fileList: [] }, {
  watchFormModel: toRef(props, 'data'),
});

function validateFileList(value: string, callback: Function) {
  if (value.length === 0) {
    return callback('必选项');
  }
  callback();
}

function handleChange(fileList: Array<File>) {
  formModel.value.fileList = fileList;
}

defineExpose({
  validate() {
    if (formModel.value.fileList.length === 0) {
      Message.error('请选择自定义模板文件');
      return Promise.reject('必选项');
    }
    formModel.value.fileList = formModel.value.fileList.map((item: Recordable) => item.file);
    return validate();
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
