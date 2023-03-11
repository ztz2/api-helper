<template>
  <div class="apih-code">
    <div class="apih-code__handle">
      <a-tooltip :content="text">
        <icon-copy :size="30" @click="copy" />
      </a-tooltip>
    </div>
    <div class="apih-code__content">
      <highlightjs :code="code" autodetect />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'apih-code'
})
</script>
<script setup lang="ts">
import useClipboard from 'vue-clipboard3';
import {ref, defineProps, computed, onBeforeMount} from 'vue';

const props = defineProps({
  code: {
    type: String,
    default: ''
  }
});

const { toClipboard } = useClipboard();
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

async function copy() {
  try {
    if (textStatus.value !== 200) {
      await toClipboard(props.code);
      switchTextStatus(200);
    }
  } catch (e) {
    switchTextStatus(500);
  }
}

let switchTextStatusTimer: number = null as unknown as number;
function switchTextStatus(status = 0) {
  textStatus.value = status;
  switchTextStatusTimer && clearTimeout(switchTextStatusTimer);
  switchTextStatusTimer = setTimeout(() => {
    textStatus.value = 0;
  }, 1500);
}

onBeforeMount(() => {
  if (switchTextStatusTimer) {
    clearTimeout(switchTextStatusTimer)
  }
})
</script>

<style lang="scss">
.apih-code{
  position: relative;
  height: 100%;
  overflow: auto;
  display: flex;
  @at-root .apih-code__handle{
    position: absolute;
    right: 10px;
    top: 10px;
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
    > pre{
      margin: 0;
      flex-grow: 1;
      display: flex;
      > code{
        flex-grow: 1;
      }
    }
  }
}
</style>
