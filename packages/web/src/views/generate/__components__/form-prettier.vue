<template>
  <div>
    <a-form
      ref="formRef"
      layout="vertical"
      :model="formModel"
      auto-label-width
    >
      <!------------------  基础配置  ------------------>
      <a-card title="基础配置">
        <a-spin :loading="loading" tip="加载中..." style="width: 100%;">
          <a-row :gutter="gutter">
            <a-col :span="12">
              <a-form-item
                style="margin-bottom: 0"
                :rules="[{ required: true, validator: validatorPrettierOptions }]"
                :validate-trigger="['change', 'input']"
              >
                <template #label>
                  <a-space>
                    <span>.prettierrc.json</span>
                    <div>
                      <a-popconfirm
                        content="确定要重置配置?"
                        @ok="handleResetPrettierOptions"
                      >
                        <a-button size="mini">重置配置</a-button>
                      </a-popconfirm>
                    </div>
                  </a-space>
                </template>
                <div style="width: 100%;">
                  <apih-code-mirror v-model="formModel.prettierOptions" height="calc(100vh - 252px)" />
                </div>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                style="margin-bottom: 0"
                label="配置预览"
              >
                <div style="width: 100%;">
                  <a-spin
                    tip="加载中..."
                    class="ztz-spin"
                    :loading="loadingPreview"
                  >
                    <apih-code :code="currentPrettierOptions" height="calc(100vh - 252px)"></apih-code>
                  </a-spin>
                </div>
              </a-form-item>
            </a-col>
          </a-row>
        </a-spin>
      </a-card>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  watch,
  PropType,
  defineEmits,
  defineProps,
  defineExpose,
  onBeforeUnmount,
} from 'vue';
import { cloneDeep } from 'lodash';
import { formatCodeServer } from '@api-helper/template';
import { PrettierOptions } from '@api-helper/cli/lib/types';

import { checkType } from '@/utils';
import { DocumentConfig } from '@/store/document-config/interface';

const emit = defineEmits(['success']);

const props = defineProps({
  data: {
    type: Object as PropType<DocumentConfig>,
    default: () => ({}),
  },
  // ADD = '新增', EDIT = '修改'
  type: {
    type: String as PropType<'ADD' | 'EDIT' | 'DETAIL'>,
    default: 'ADD',
  },
});

const formRef = ref();
const gutter = ref(15);
const loading = ref(false);
const loadingPreview = ref(false);
let formatTime: number;

const formModel = ref({
  prettierOptions: '',
});
const currentPrettierOptions = ref('');

watch(() => props.data.prettierOptions, (val) => {
  formatPrettierOptions(val);
}, { immediate: true });

let timer: number;
watch(() => formModel.value.prettierOptions, (val) => {
  if (!val || val.trim() === '') {
    currentPrettierOptions.value = val;
  } else {
    timer && clearTimeout(timer);
    timer = setTimeout(async () => {
      const v = formModel.value.prettierOptions;
      if (!v || v.trim() === '') {
        loadingPreview.value = false;
        currentPrettierOptions.value = v;
        return;
      }
      loadingPreview.value = true;
      const res = await formatCodeServer({
        sourceCode: v,
        formatCodeExtension: '.json',
      });
      loadingPreview.value = false;
      currentPrettierOptions.value = res as string;
    }, 1200) as unknown as number;
  }
}, { immediate: true });

onBeforeUnmount(() => {
  timer && clearTimeout(timer);
});

function validatorPrettierOptions(value: unknown, callback: Function) {
  try {
    const conf = JSON.stringify(formModel.value.prettierOptions);
    if (!checkType(conf, 'Object')) {
      return callback('配置解析错误.');
    }
  } catch {
    return callback('配置解析错误.');
  }
  callback();
}

function handleResetPrettierOptions() {
  formatPrettierOptions(new PrettierOptions());
}

async function formatPrettierOptions(val: object | string) {
  const formatTimeNow = Date.now();
  formatTime = formatTimeNow;
  val = (checkType(val, 'Object') ? JSON.stringify(val)
    : checkType(val, 'String') ? val : '{}') as string;
  let result = '';
  loading.value = true;
  try {
    result = await formatCodeServer({
      sourceCode: val,
      // @ts-ignore
      formatCodeExtension: '.json',
    }) as string;
  } catch {
    result = val;
  } finally {
    loading.value = false;
  }
  if (formatTime === formatTimeNow) {
    formModel.value.prettierOptions = result;
  }
}

async function getFormModel() {
  const data = cloneDeep(formModel.value);
  data.prettierOptions = JSON.parse(data.prettierOptions);
  return data;
}

defineExpose({
  validate: async () => {
    const error = await formRef.value?.validate?.();
    if (error) {
      return Promise.reject(error);
    }
    return await getFormModel();
  },
  getFormRef() {
    return formRef.value;
  },
  getFormModel,
});
</script>
<style lang="scss" scoped>

</style>
