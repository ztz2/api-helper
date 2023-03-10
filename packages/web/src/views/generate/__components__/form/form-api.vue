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
          label="模板选择"
          field="tplId"
          :rules="[{ required: true, message: '必填项' }]"
          :validate-trigger="['change', 'input']"
        >
          <a-select
            v-model="formModel.tplId"
            :value-key="'id'"
            :options="templateList"
          />
        </a-form-item>
      </a-col>
    </a-row>
    <!------------------  代码约束配置  ------------------>
    <a-row :gutter="gutter">
      <a-divider orientation="left">
        <span class="font-size-16">代码约束配置</span>
      </a-divider>
      <a-col :span="24">
        <a-form-item
          label="代码类型"
          field="codeType"
          :rules="[{ required: true, message: '必填项' }]"
          :validate-trigger="['change', 'input']"
        >
          <a-radio-group v-model="formModel.codeType" :options="options.codeType" />
        </a-form-item>
      </a-col>
    </a-row>
    <!------------------  生成内容配置  ------------------>
    <a-row :gutter="gutter">
      <a-divider orientation="left">
        <span class="font-size-16">生成内容配置</span>
      </a-divider>
      <a-col :span="24">
        <a-form-item
          label="只生成API函数"
          field="onlyApiFunc"
          :rules="[{ required: true, message: '必填项' }]"
          :validate-trigger="['change', 'input']"
        >
          <a-radio-group v-model="formModel.onlyApiFunc" :options="options.boolean" />
        </a-form-item>
      </a-col>
      <a-col v-if="!formModel.onlyApiFunc" :span="24">
        <a-form-item label="API函数头部代码" field="headCodeText">
          <a-textarea v-model="formModel.headCodeText" :max-length="512"></a-textarea>
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
  isRef,
  isReactive,
  defineExpose, computed, watch
} from 'vue';
import { useApiConfig, useApiTemplate } from '@/store';
import { useForm } from '@/hooks/use-form';
import { RenderAPIConfig } from '@/views/generate/interface';

type FormModelType = RenderAPIConfig;

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
const { templateList } = useApiTemplate();
const { apiConfig, updateApiConfig } = useApiConfig();

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
} = useForm<FormModelType>(apiConfig, {
  watchFormModel: toRef(props, 'data')
});
const options = ref({
  codeType: [
    { label: 'Typescript', value: 'typescript' },
    { label: 'Javascript', value: 'javascript' },
  ],
  boolean: [
    { label: '是', value: true },
    { label: '否', value: false }
  ],
});

watch(() => formModel.value, (val) => {
  updateApiConfig(val);
}, { deep: true });

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
