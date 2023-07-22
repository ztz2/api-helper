<template>
  <a-spin
    tip="加载中..."
    class="ztz-spin"
    :loading="loading"
  >
    <a-row :gutter="gutter">
      <a-col :span="7">
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
                  :rules="[{ required: true, message: '必填项' }]"
                  :validate-trigger="['change', 'input']"
                >
                  <a-input
                    v-model="formModel.label"
                    :max-length="64"
                    placeholder="请输入模板名称"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-form-item
                  label="模版文件后缀名"
                  field="formatCodeExtension"
                  style="margin-bottom: 0"
                  tooltip="代码生成之后，会根据配置的后缀名，生成一个文件，调用 prettier 对生成的代码进行美化"
                >
                  <a-select
                    value-key="id"
                    v-model="formModel.formatCodeExtension"
                    :options="options.formatCodeExtension"
                    placeholder="请选择模版文件后缀名"
                    allow-clear
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
                  label="只生成API函数"
                  style="margin-bottom: 0"
                >
                  <a-radio-group v-model="currentProject.onlyApiFunc" :options="options.boolean" />
                </a-form-item>
              </a-col>
              <a-col v-if="currentProject.onlyApiFunc === false" style="margin-top: 20px" :span="24">
                <a-form-item label="API函数头部代码" style="margin-bottom: 0">
                  <a-textarea v-model="currentProject.headCodeText" :max-length="512"></a-textarea>
                </a-form-item>
              </a-col>
            </a-row>
          </a-card>
        </a-form>
      </a-col>
      <a-col :span="17">
        <a-row :gutter="gutter">
          <a-col :span="12">
            <a-card>
              <template #title>
                <a-space>
                  <span>编辑模版内容</span>
                  <apih-dialog-code-mirror
                    v-model:value="formModel.content"
                    @update:value="$emit('exec-gen')"
                  />
                </a-space>
              </template>
              <apih-code-mirror v-model="formModel.content" height="calc(100vh - 218px)" />
            </a-card>
          </a-col>
          <a-col :span="12">
            <a-card title="预览编辑模版内容">
              <a-spin
                tip="加载中..."
                class="ztz-spin"
                :loading="loadingPreview"
              >
                <apih-code :code="templateContent" height="calc(100vh - 218px)"></apih-code>
              </a-spin>
            </a-card>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </a-spin>
</template>

<script lang="ts" setup>
import {
  ref,
  toRef,
  watch,
  PropType,
  defineProps,
  defineEmits,
  defineExpose,
  onBeforeUnmount,
} from 'vue';
import { FORMAT_CODE_EXTENSION } from '@api-helper/cli/lib/constants';

import { useProject } from '@/store';
import useForm from '@/hooks/use-form';
import formatCode from '@/utils/format-code';
import { Template } from '@/store/template/interface';

type FormModelType = Template;

defineEmits(['exec-gen']);
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

const { currentProject } = useProject();

const loading = ref(false);
const loadingPreview = ref(false);
const templateContent = ref('');
const gutter = ref(15);
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
} = useForm<FormModelType>({
  ...new Template(),
}, {
  watchFormModel: toRef(props, 'data'),
});

const options = ref({
  formatCodeExtension: FORMAT_CODE_EXTENSION.map((c) => ({
    label: c, value: c,
  }))as any,
  boolean: [
    { label: '是', value: true },
    { label: '否', value: false },
  ] as any,
});

let timer: number;
watch(() => formModel.value.content, (val) => {
  if (!val || val.trim() === '') {
    templateContent.value = val;
  } else {
    timer && clearTimeout(timer);
    timer = setTimeout(async () => {
      const v = formModel.value.content;
      if (!v || v.trim() === '' || !formModel.value.formatCodeExtension) {
        loadingPreview.value = false;
        templateContent.value = v;
        return;
      }
      const res = await formatCode({
        sourceCode: v,
        formatCodeExtension: formModel.value.formatCodeExtension,
      });
      loadingPreview.value = false;
      templateContent.value = res as string;
    }, 1200) as unknown as number;
  }
}, { immediate: true });

onBeforeUnmount(() => {
  timer && clearTimeout(timer);
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
<style lang="scss" scoped>

</style>
