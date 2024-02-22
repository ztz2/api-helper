<template>
  <a-form
    ref="formRef"
    :model="formModel"
    :rules="formRules"
    :disabled="currentDisabled"
    layout="vertical"
    auto-label-width
  >
    <a-card title="基础信息">
      <a-row :gutter="gutter">
        <a-col :span="24">
          <a-form-item
              label="文档地址"
              field="url"
              :rules="[{ required: true, message: '必填项' }]"
              :validate-trigger="['change', 'input']"
          >
            <a-input
              v-model="formModel.url"
              placeholder="请输入文档地址"
              :max-length="1024"
            />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
              label="文档类型"
              field="type"
              :rules="[{ required: true, message: '必填项' }]"
              :validate-trigger="['change', 'input']"
          >
            <apih-select
              v-model="formModel.type"
              :options="options.type"
              placeholder="请选择文档类型"
            />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
              label="Auth Token"
              field="authToken"
          >
            <a-input v-model="formModel.authToken" type="password" placeholder="请输入Auth Token" :max-length="1024" />
          </a-form-item>
        </a-col>
        <a-col :span="span">
          <a-form-item
              label="用户名"
              field="username"
          >
            <a-input v-model="formModel.auth.username" placeholder="请输入用户名" :max-length="32" />
          </a-form-item>
        </a-col>
        <a-col :span="span">
          <a-form-item
              label="密码"
              field="password"
          >
            <a-input v-model="formModel.auth.password" type="password" placeholder="请输入密码" :max-length="32" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
            label="响应数据 dataKey"
            field="dataKey"
            style="margin-bottom: 0"
          >
            <a-input v-model="formModel.dataKey" placeholder="请输入响应数据 dataKey" :max-length="32" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-card>
  </a-form>
</template>

<script setup lang="ts">
import {
  ref,
  toRef,
  PropType,
  computed,
  defineProps,
  defineExpose, watch,
} from 'vue';
import useForm from '@/hooks/use-form';
import {
  DocumentConfig,
  createDocumentConfig,
} from '@/store/document-config/interface';

type FormModelType = DocumentConfig;

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
});

const currentDisabled = computed(() => props.type === 'DETAIL');

const {
  formRef,
  formModel,
  formRules,

  // 以下对外暴露的方法
  validate,
  validateFields,
  setFields,
  resetFields,
  getFormModel,
  setFormModel,
  clearValidate,
  getReactiveFormModel,
} = useForm<FormModelType>(createDocumentConfig(), {
  watchFormModel: toRef(props, 'data'),
});

watch(() => formModel.value.dataKey, (val) => {
  if (val) {
    formModel.value.mockDataKey = val;
  }
}, { immediate: true });

const options = ref({
  type: [
    { label: 'swagger', value: 'swagger' },
    { label: 'yapi', value: 'yapi' },
  ],
});

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
