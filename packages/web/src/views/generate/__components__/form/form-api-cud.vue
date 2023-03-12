<template>
  <a-row :gutter="12">
    <a-col :span="12">
      <a-form
          ref="formRef"
          :model="formModel"
          :rules="formRules"
          layout="vertical"
          auto-label-width
      >
        <!------------------  基础配置  ------------------>
        <a-card title="基础信息">
          <a-row :gutter="gutter">
            <a-col :span="24">
              <a-form-item
                  label="模板名称"
                  field="label"
                  style="margin-bottom: 0"
                  :rules="[{ required: true, message: '必填项' }]"
                  :validate-trigger="['change', 'input']"
              >
                <a-input v-model="formModel.label" :max-length="64" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <!------------------  生成内容配置  ------------------>
        <a-card title="生成内容配置">
          <a-row :gutter="gutter">
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
            <a-col :span="24">
              <a-form-item
                  label="只生成API函数"
                  field="onlyApiFunc"
                  style="margin-bottom: 0"
                  :rules="[{ required: true, message: '必填项' }]"
                  :validate-trigger="['change', 'input']"
              >
                <a-radio-group v-model="formModel.onlyApiFunc" :options="options.boolean" />
              </a-form-item>
            </a-col>
            <a-col v-if="!formModel.onlyApiFunc" style="margin-top: 20px" :span="24">
              <a-form-item label="API函数头部代码" field="headCodeText" style="margin-bottom: 0">
                <a-textarea v-model="formModel.headCodeText" :max-length="512"></a-textarea>
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
      </a-form>
    </a-col>
    <a-col :span="12">
      <apih-code-mirror v-model="formModel.content" />
    </a-col>
  </a-row>
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
  defineExpose,
} from 'vue';

import { useForm } from '@/hooks/use-form';
import { Template } from '@/store/template/interface';
import { RenderAPIConfig } from '@/views/generate/interface';
import { useApiConfig } from '@/store';

type FormModelType = Template;

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
const { apiConfig, updateApiConfig } = toRefs(useApiConfig());
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
} = useForm<FormModelType>({
  ...new RenderAPIConfig(),
  ...apiConfig.value,
  ...new Template(),
}, {
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
  updateApiConfig.value(val as unknown as RenderAPIConfig);
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
