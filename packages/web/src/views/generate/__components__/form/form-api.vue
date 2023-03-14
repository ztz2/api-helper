<template>
  <div>
    <a-form
        ref="formRef"
        :model="formModel"
        :rules="formRules"
        layout="vertical"
        auto-label-width
    >
      <!------------------  基础配置  ------------------>
      <a-card title="基础配置">
        <a-row :gutter="gutter">
          <a-col :span="24">
            <a-form-item
                label="模板选择"
                field="tplId"
                style="margin-bottom: 0"
                :rules="[{ required: true, message: '必填项' }]"
                :validate-trigger="['change', 'input']"
            >
              <template #label>
                <a-space>
                  <span>模板</span>
                  <div><a-button size="mini" @click.prevent="handleAdd">新增模板</a-button></div>
                  <div><a-button size="mini" :disabled="!formModel.tplId" @click.prevent="handleEdit" >编辑模板</a-button></div>
                </a-space>
              </template>
              <a-select
                v-model="formModel.tplId"
                value-key="id"
                :options="templateList"
              />
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
    <DialogAPICud ref="dialogAPICudRef" @success="handleSuccess" />
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
import { cloneDeep } from 'lodash';
import { useForm } from '@/hooks/use-form';
import { useApiConfig, useApiTemplate } from '@/store';
import { RenderAPIConfig } from '@/views/generate/interface';
import { Template } from '@/store/template/interface';
import emptyTemplate from '@/constants/template/api/empty';
import { modalConfirm } from '@/utils';
import { Message } from '@arco-design/web-vue';
import DialogAPICud from '../dialog/dialog-api-cud.vue';

type FormModelType = RenderAPIConfig;

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
const dialogAPICudRef = ref();
const apiTemplateStore = useApiTemplate();
const { templateMap, templateList } = toRefs(apiTemplateStore);
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
  getReactiveFormModel,
} = useForm<FormModelType>(apiConfig.value, {
  watchFormModel: toRef(props, 'data'),
});
const options = ref({
  codeType: [
    { label: 'Typescript', value: 'typescript' },
    { label: 'Javascript', value: 'javascript' },
  ] as any,
  boolean: [
    { label: '是', value: true },
    { label: '否', value: false },
  ] as any,
});

watch(() => formModel.value, (val) => {
  updateApiConfig.value(val);
}, { deep: true });

function handleAdd() {
  dialogAPICudRef.value?.open({
    type: 'ADD',
    title: '新增模板',
  }, {
    ...formModel.value,
    ...emptyTemplate,
  });
}

async function handleEdit() {
  const tplModel = cloneDeep(templateMap.value.get(formModel.value.tplId));
  if (!tplModel) {
    return Message.error('请重新选择模板');
  }
  if (tplModel.default) {
    await modalConfirm('该模板为内置模板，不可进行编辑，是否复制该模板？');
    tplModel.label += ' - 副本';
    tplModel.value = '';
    tplModel.default = false;
  }
  dialogAPICudRef.value?.open({
    type: 'EDIT',
    title: '修改模板',
  }, {
    ...formModel.value,
    ...tplModel,
  });
}

function handleSuccess(val: string) {
  formModel.value.tplId = val;
  emit('save-template');
}

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
<style lang="scss" scoped>

</style>
