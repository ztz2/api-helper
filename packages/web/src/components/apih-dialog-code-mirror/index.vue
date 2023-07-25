<template>
  <span>
     <a-tooltip v-if="showIcon" content="全屏编辑">
      <span class="apih-dialog-code-mirror__handle" @click="open">
        <icon-fullscreen-exit/>
      </span>
    </a-tooltip>
    <apih-dialog
      ref="dialogRef"
      width="100%"
      cancel-text="返回"
      hide-ok
    >
      <a-row :gutter="gutter">
        <a-col :span="12">
          <a-card title="代码编辑">
            <apih-code-mirror v-model="currentValue" height="calc(100vh - 218px)"/>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="预览代码编辑内容">
            <a-spin
              tip="加载中..."
              class="ztz-spin"
              :loading="loadingPreview"
            >
              <apih-code :code="prettierrcValue" height="calc(100vh - 218px)" />
            </a-spin>
          </a-card>
        </a-col>
      </a-row>
      <template #footer>
        <a-button :loading="loadingPreview" @click="refreshPreview">刷新预览代码</a-button>
        <a-button :loading="loading" type="primary" @click="handleSave">保存</a-button>
      </template>
    </apih-dialog>
  </span>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'apih-dialog-code-mirror',
});
</script>
<script lang="ts" setup>
import {
  ref,
  watch,
  onMounted,
  defineProps,
  defineEmits,
  defineExpose,
} from 'vue';
import { formatCodeServer } from '@api-helper/template';
import { DialogOpenConfig } from '../apih-dialog/interface';

const emit = defineEmits(['update:value']);
const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  formatCodeExtension: {
    type: String,
    default: '.js',
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
});

const dialogRef = ref();
const gutter = ref(15);
const currentValue = ref('');
const loading = ref(false);
const loadingPreview = ref(false);
const prettierrcValue = ref('');

function open(config: DialogOpenConfig) {
  loading.value = false;
  loadingPreview.value = false;

  currentValue.value = props.value;
  refreshPreview();
  dialogRef.value.open({
    title: config.title ?? '代码编辑',
  });
}

function close() {
  dialogRef.value.close();
}

function handleSave() {
  dialogRef.value.execAsyncTask(async () => {
    loading.value = true;
    return await format(currentValue.value);
  }).then((res: string) => {
    emit('update:value', res);
    dialogRef.value.close();
  }).finally(() => {
    loading.value = false;
  });
}

onMounted(() => {
  let timer: number;
  watch(() => props.value, (val) => {
    currentValue.value = val;
  }, { immediate: true });
  watch(() => currentValue.value, (val) => {
    if (!val || val.trim() === '') {
      prettierrcValue.value = val;
    } else {
      timer && clearTimeout(timer);
      timer = setTimeout(async () => {
        await refreshPreview();
      }, 1200) as unknown as number;
    }
  }, { immediate: true });
});

async function refreshPreview() {
  loadingPreview.value = true;
  prettierrcValue.value = await format(currentValue.value);
  loadingPreview.value = false;
}

async function format(v: string): Promise<string> {
  if (!v || v.trim() === '' || !props.formatCodeExtension) {
    return v;
  }
  return await formatCodeServer({
    sourceCode: v,
    formatCodeExtension: props.formatCodeExtension,
  }) as string;
}

defineExpose({
  open,
  close,
});
</script>

<style lang="scss">
.apih-dialog-code-mirror__handle {
  cursor: pointer;
}
</style>
