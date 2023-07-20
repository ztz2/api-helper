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
            <a-col :span="24">
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
          </a-row>
        </a-spin>
      </a-card>
    </a-form>
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
  defineEmits,
  defineProps,
  defineExpose,
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
const { currentProject } = useProject();
let formatTime: number;

const formModel = ref({
  prettierrcOptions: '',
});

watch(() => props.data.prettierrcOptions, (val) => {
  formatPrettierrcOptions(val);
}, { immediate: true });

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
