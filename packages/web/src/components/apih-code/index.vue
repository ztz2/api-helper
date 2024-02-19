<template>
  <div class="apih-code" :style="{height: currentHeight}">
    <div class="apih-code__handle">
      <a-tooltip :content="text">
        <icon-copy :size="30" style="color: #fff" @click="copy" />
      </a-tooltip>
    </div>
    <div class="apih-code__content">
      <a-spin
        tip="加载中..."
        class="ztz-spin"
        :loading="loading"
      >
        <highlightjs :code="currentCode" :language="language" :autodetect="!language" />
      </a-spin>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'apih-code',
});
</script>
<script setup lang="ts">
import useClipboard from 'vue-clipboard3';
import {
  ref,
  watch,
  computed,
  PropType,
  defineProps,
  onBeforeMount,
} from 'vue';

const props = defineProps({
  code: {
    type: [String, Array, Promise] as PropType<string|Promise<string[] | string>|Array<string>>,
    default: '',
  },
  height: {
    type: [String, Number],
    default: '100%',
  },
  language: String,
});

const { toClipboard } = useClipboard();

const loading = ref(false);
const currentCode = ref('');
const textStatus = ref(0);
const text = computed(() => {
  switch (textStatus.value) {
    case 200:
      return '已复制';
    case 500:
      return '复制失败';
    case 0: default:
      return '复制代码';
  }
});
const currentHeight = computed(() => (typeof props.height === 'number' ? `${props.height}px` : props.height));

let watchTimeRecord: number;
watch(() => props.code, (val) => {
  const watchTimeNow = Date.now();
  watchTimeRecord = watchTimeNow;
  if (val instanceof Promise) {
    loading.value = true;
    val.then((res) => {
      if (watchTimeNow === watchTimeRecord) {
        currentCode.value = Array.isArray(res) ? (res[0] ?? '') : (res ?? '');
      }
    }).finally(() => {
      loading.value = false;
    });
  } else {
    loading.value = false;
    currentCode.value = Array.isArray(val) ? (val[0] ?? '') : (val ?? '');
  }
}, { immediate: true });

async function copy() {
  try {
    if (textStatus.value !== 200) {
      await toClipboard(currentCode.value);
      switchTextStatus(200);
    }
  } catch (e) {
    switchTextStatus(500);
  }
}

let switchTextStatusTimer: number;
function switchTextStatus(status = 0) {
  textStatus.value = status;
  switchTextStatusTimer && clearTimeout(switchTextStatusTimer);
  switchTextStatusTimer = setTimeout(() => {
    textStatus.value = 0;
  }, 1500) as any;
}

onBeforeMount(() => {
  if (switchTextStatusTimer) {
    clearTimeout(switchTextStatusTimer);
  }
});
</script>

<style lang="scss">
.apih-code{
  position: relative;
  height: 100%;
  overflow: auto;
  display: flex;
  border-radius: 5px;
  @at-root .apih-code__handle{
    position: absolute;
    right: 28px;
    bottom: 28px;
    z-index: 10;
    > * {
      cursor: pointer;
      transition: opacity .25s;
      &:hover{
        opacity: .7;
      }
    }
  }
  @at-root .apih-code__content{
    flex-grow: 1;
    display: flex;
    max-width: 100%;
    height: 100%;
    >.arco-spin{
      height: 100%;
      >pre{
        margin: 0;
        flex-grow: 1;
        display: flex;
        max-width: 100%;
        height: 100%;
        > code{
          flex-grow: 1;
          max-width: 100%;
          min-height: 300px;
          height: 100%;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
