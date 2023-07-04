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
            <a-input v-model="formModel.url" :max-length="1024" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
            label="响应数据 dataKey"
            field="dataKey"
          >
            <a-input v-model="formModel.dataKey" :max-length="32" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
              label="文档类型"
              field="type"
              :rules="[{ required: true, message: '必填项' }]"
              :validate-trigger="['change', 'input']"
          >
            <a-select v-model="formModel.type" :options="options.type" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
              label="Auth Token"
              field="authToken"
          >
            <a-input v-model="formModel.authToken" type="password" :max-length="1024" />
          </a-form-item>
        </a-col>
        <a-col :span="span">
          <a-form-item
              label="用户名"
              field="username"
              style="margin-bottom: 0"
          >
            <a-input v-model="formModel.auth.username" :max-length="32" />
          </a-form-item>
        </a-col>
        <a-col :span="span">
          <a-form-item
              label="密码"
              field="password"
              style="margin-bottom: 0"
          >
            <a-input v-model="formModel.auth.password" type="password" :max-length="32" />
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
  defineExpose,
} from 'vue';
import { useForm } from '@/hooks/use-form';
import { Project } from '@/store/project/interface';

type FormModelType = Project;

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
  validateField,
  setFields,
  resetFields,
  getFormModel,
  setFormModel,
  clearValidate,
  getReactiveFormModel,
} = useForm<FormModelType>(new Project(), {
  watchFormModel: toRef(props, 'data'),
});

const options = ref({
  type: [
    { label: 'swagger', value: 'swagger' },
    { label: 'yapi', value: 'yapi' },
  ],
});

defineExpose({
  validate,
  validateField,
  setFields,
  resetFields,
  getFormModel,
  setFormModel,
  clearValidate,
  getReactiveFormModel,
});
</script>

<style lang="less" scoped></style>
