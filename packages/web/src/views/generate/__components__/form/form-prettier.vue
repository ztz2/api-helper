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
                :rules="[{ required: true, validator: validatorPrettierrcOptions }]"
                :validate-trigger="['change', 'input']"
              >
                <template #label>
                  <a-space>
                    <span>.prettierrc.json</span>
                    <div>
                      <a-popconfirm
                        content="确定要重置配置?"
                        @ok="handleResetPrettierrcOptions"
                      >
                        <a-button size="mini">重置配置</a-button>
                      </a-popconfirm>
                    </div>
                  </a-space>
                </template>
                <div style="width: 100%;">
                  <apih-code-mirror v-model="formModel.prettierrcOptions" height="calc(100vh - 252px)" />
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
                    <apih-code :code="currentPrettierrcOptions" height="calc(100vh - 252px)"></apih-code>
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
import PrettierrcOptions from '@api-helper/cli/lib/tools/prettierrc-options';

import { checkType } from '@/utils';
import { useProject } from '@/store';
import formatCode from '@/utils/format-code';
import { Project } from '@/store/project/interface';

const emit = defineEmits(['success']);

const props = defineProps({
  data: {
    type: Object as PropType<Project>,
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
const { currentProject } = useProject();
let formatTime: number;

const formModel = ref({
  prettierrcOptions: '',
});
const currentPrettierrcOptions = ref('');

watch(() => props.data.prettierrcOptions, (val) => {
  formatPrettierrcOptions(val);
}, { immediate: true });

let timer: number;
watch(() => formModel.value.prettierrcOptions, (val) => {
  if (!val || val.trim() === '') {
    currentPrettierrcOptions.value = val;
  } else {
    timer && clearTimeout(timer);
    timer = setTimeout(async () => {
      const v = formModel.value.prettierrcOptions;
      if (!v || v.trim() === '') {
        loadingPreview.value = false;
        currentPrettierrcOptions.value = v;
        return;
      }
      loadingPreview.value = true;
      const res = await formatCode({
        sourceCode: v,
        formatCodeExtension: '.json',
      });
      loadingPreview.value = false;
      currentPrettierrcOptions.value = res as string;
    }, 1200) as unknown as number;
  }
}, { immediate: true });

onBeforeUnmount(() => {
  timer && clearTimeout(timer);
});

function validatorPrettierrcOptions(value: unknown, callback: Function) {
  try {
    const conf = JSON.stringify(formModel.value.prettierrcOptions);
    if (!checkType(conf, 'Object')) {
      return callback('配置解析错误.');
    }
  } catch {
    return callback('配置解析错误.');
  }
  callback();
}

function handleResetPrettierrcOptions() {
  formatPrettierrcOptions(new PrettierrcOptions());
}

async function formatPrettierrcOptions(val: object | string) {
  const formatTimeNow = Date.now();
  formatTime = formatTimeNow;
  val = (checkType(val, 'Object') ? JSON.stringify(val)
    : checkType(val, 'String') ? val : '{}') as string;
  let result = '';
  loading.value = true;
  try {
    result = await formatCode({
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
    formModel.value.prettierrcOptions = result;
  }
}

function getFormModel() {
  const data = cloneDeep(formModel.value);
  data.prettierrcOptions = JSON.parse(data.prettierrcOptions);
  return data;
}

defineExpose({
  validate: async () => {
    const error = await formRef.value?.validate?.();
    if (error) {
      return Promise.reject(error);
    }
    return getFormModel();
  },
  getFormRef() {
    return formRef.value;
  },
  getFormModel,
});
</script>
<style lang="scss" scoped>

</style>
