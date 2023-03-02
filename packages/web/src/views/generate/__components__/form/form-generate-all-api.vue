<template>
  <a-form
    ref="formRef"
    :model="formModel"
    :rules="formRules"
    layout="vertical"
    auto-label-width
  >
    <!------------------  基础配置  ------------------>
    <a-row :gutter="gutter">
      <a-divider orientation="left">
        <span class="font-size-16">基础配置</span>
      </a-divider>
      <a-col :span="24">
        <a-form-item
          label="API模板选择"
          field="apiTplId"
          :rules="[{ required: true, message: '必填项' }]"
          :validate-trigger="['change', 'input']"
        >
          <a-select
            v-model="formModel.apiTplId"
            :value-key="'id'"
            :options="apiTemplateList"
          />
        </a-form-item>
      </a-col>
    </a-row>
    <!------------------  生成内容配置  ------------------>
    <a-row :gutter="gutter">
      <a-divider orientation="left">
        <span class="font-size-16">生成内容配置</span>
      </a-divider>
      <a-col :span="24">
        <a-form-item label="接口BaseURL" field="baseURLCodeText">
          <a-input v-model="formModel.baseURLCodeText" :max-length="1024"></a-input>
        </a-form-item>
      </a-col>
      <a-col v-if="!formModel.onlyApiFunc" :span="24">
        <a-form-item label="API函数头部代码" field="headCodeText">
          <a-textarea v-model="formModel.headCodeText" :max-length="512"></a-textarea>
        </a-form-item>
      </a-col>
    </a-row>
    <!------------------  代码约束配置  ------------------>
    <a-row :gutter="gutter">
      <a-divider orientation="left">
        <span class="font-size-16">代码约束配置</span>
      </a-divider>
      <a-col :span="24">
        <a-form-item label="代码类型" field="codeType">
          <a-radio-group v-model="formModel.codeType" :options="options.codeType" />
        </a-form-item>
      </a-col>
      <a-col v-if="formModel.codeType === 'ts'" :span="24" style="margin-bottom: 14px">
        <a-form-item
            :rules="formModel.generateInterface ? [{ required: true, message: '必填项' }] : []"
            :validate-trigger="['change', 'input']"
            label="interface模板"
            field="interfaceTplId"
        >
          <a-select v-model="formModel.interfaceTplId" :options="modelTemplateList"></a-select>
        </a-form-item>
      </a-col>
      <a-col v-if="formModel.codeType === 'ts'" style="margin-top: -20px;" :span="24">
        <a-form-item style="margin-left: -2px">
          <a-space :size="2" class="a-space--shim" direction="vertical">
            <div><a-checkbox v-model="formModel.requestDataConstraint">请求参数类型约束</a-checkbox></div>
            <div><a-checkbox v-model="formModel.responseDataConstraint">响应参数类型约束</a-checkbox></div>
          </a-space>
        </a-form-item>
      </a-col>
    </a-row>
    <!------------------  其他配置项  ------------------>
    <a-row style="margin-top: -6px" :gutter="gutter">
      <a-divider orientation="left">
        <span class="font-size-16">其他配置项</span>
      </a-divider>
      <a-space :size="2" class="a-space--shim" direction="vertical">
        <div><a-checkbox v-model="formModel.semi">分号符</a-checkbox></div>
        <div><a-checkbox v-model="formModel.duplicateRequest">不允许重复请求</a-checkbox></div>
      </a-space>
    </a-row>
  </a-form>
</template>

<script lang="ts" setup>
import {
  ref,
  toRef,
  watch,
  PropType,
  defineExpose,
} from 'vue';
import { useApiTemplate, useGenerateAllApiConfig, useModelTemplate } from '@/store';
import { useForm } from '@/hooks/use-form';
import { GenerateAllApiConfig } from '@/views/generate/interface';

type FormModelType = GenerateAllApiConfig;

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

const gutter = ref(15);
const apiTemplateList = useApiTemplate().templateList;
const modelTemplateList = useModelTemplate().templateList;
const { generateAllApiConfig, updateGenerateAllApiConfig } = useGenerateAllApiConfig();

const {
  formModel,
  formRules,

  validate,
  validateField,
  setFields,
  resetFields,
  getFormModel,
  setFormModel,
  clearValidate,
  getReactiveFormModel
} = useForm<FormModelType>(generateAllApiConfig, {
  watchFormModel: toRef(props, 'data')
});
const options = ref({
  codeType: [
    { label: 'Typescript', value: 'ts' },
    { label: 'ES6', value: 'es6' },
  ],
  boolean: [
    { label: '是', value: true },
    { label: '否', value: false }
  ],
});

watch(() => formModel.value, (val) => {
  updateGenerateAllApiConfig(val);
}, { deep: true });

watch([
  () => formModel.value.codeType,
  () => formModel.value.requestDataConstraint,
  () => formModel.value.responseDataConstraint,
], () => {
  formModel.value.generateInterface = formModel.value.codeType === 'ts' && (formModel.value.requestDataConstraint || formModel.value.responseDataConstraint);
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
})
</script>
<style lang="scss" scoped>

</style>
