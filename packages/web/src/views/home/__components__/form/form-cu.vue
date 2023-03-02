<template>
  <a-form
    ref="formRef"
    :model="formModel"
    :rules="formRules"
    :disabled="currentDisabled"
    layout="vertical"
    auto-label-width
  >
    <a-row :gutter="gutter">
      <a-col :span="span">
        <a-form-item
          label="项目名称"
          field="name"
        >
          <a-input v-model="formModel.name" :max-length="50" />
        </a-form-item>
      </a-col>
      <a-col :span="24">
        <a-form-item
          label="swagger-ui文档地址"
          field="url"
          :rules="[{ required: true, message: '必填项' }]"
          :validate-trigger="['change', 'input']"
        >
          <a-input v-model="formModel.url" :max-length="1024" />
        </a-form-item>
      </a-col>
      <a-col :span="span">
        <a-form-item
            label="用户名"
            field="username"
        >
          <a-input v-model="formModel.username" :max-length="32" />
        </a-form-item>
      </a-col>
      <a-col :span="span">
        <a-form-item
            label="密码"
            field="password"
        >
          <a-input v-model="formModel.password" type="password" :max-length="32" />
        </a-form-item>
      </a-col>
    </a-row>
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
  import { Project, IProject } from '@/store/project/interface';

  type FormModelType = IProject;

  const span = ref(12);
  const gutter = ref(15);
  const currentDisabled = computed(() => props.type === 'DETAIL');

  const props = defineProps({
    data: {
      type: Object as PropType<FormModelType>,
      default: () => ({})
    },
    // ADD = '新增', EDIT = '修改'
    type: {
      type: String as PropType<'ADD' | 'EDIT' | 'DETAIL'>,
      default: 'ADD'
    }
  });

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
    getReactiveFormModel
  } = useForm<FormModelType>(new Project(), {
    watchFormModel: toRef(props, 'data')
  });

  defineExpose({
    validate,
    validateField,
    setFields,
    resetFields,
    getFormModel,
    setFormModel,
    clearValidate,
    getReactiveFormModel
  });
</script>

<style lang="less" scoped></style>
