<template>
  <a-collapse-item :key="key" :header="header">
    <template #default>
      <slot :isActive="isActive"></slot>
    </template>
    <template v-if="$slots.extra" #extra><slot name="extra"></slot></template>
    <template v-if="$slots.expandIcon" #expand-icon="scope"><slot name="expand-icon" v-bind="scope"></slot></template>
    <template v-if="$slots.header" #header><slot name="header"></slot></template>
  </a-collapse-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'apih-collapse-item',
});
</script>
<script setup lang="ts">
import {
  inject,
  computed,
  PropType,
  defineProps,
  getCurrentInstance,
} from 'vue';
import { isNumber } from '@arco-design/web-vue/es/_utils/is';
import { CollapseContext, collapseKey } from '@arco-design/web-vue/es/collapse/context';

const props = defineProps({
  // eslint-disable-next-line vue/no-reserved-props
  key: [String, Number] as PropType<string|number>,
  header: {
    type: String,
    default: '',
  },
});

const instance = getCurrentInstance();
const collapseCtx = inject<Partial<CollapseContext>>(collapseKey, {});

const key = instance && isNumber(instance?.vnode.key)
  ? instance.vnode.key
  : String(instance?.vnode.key ?? '');
const isActive = computed(() => collapseCtx.activeKeys?.includes(key));
</script>
