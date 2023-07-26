<template>
  <a-tree
    v-bind="$attrs"
    v-model:selected-keys="currentValue"
    size="large"
    :data="currentData"
    :multiple="multiple"
  >
    <template v-if="$slots.default" #default="scope">
      <slot name="default" v-bind="scope"></slot>
    </template>
    <template v-if="$slots.title" #title="scope">
      <slot name="title" v-bind="scope"></slot>
    </template>
    <template v-if="$slots.extra" #extra="scope">
      <slot name="extra" v-bind="scope"></slot>
    </template>
    <template v-if="$slots.dragIcon" #drag-icon="scope">
      <slot name="drag-icon" v-bind="scope"></slot>
    </template>
    <template v-if="$slots.loadingIcon" #loading-icon="scope">
      <slot name="loading-icon" v-bind="scope"></slot>
    </template>
    <template v-if="$slots.switcherIcon" #switcher-icon="scope">
      <slot name="switcher-icon" v-bind="scope"></slot>
    </template>
    <template v-if="$slots.icon || fileIcon" #icon="scope">
      <slot v-if="$slots.icon" name="icon" v-bind="scope"></slot>
      <template v-else-if="fileIcon">
        <IconFolder v-if="scope.node.isFolder" />
        <IconCodeSquare v-else />
      </template>
    </template>
  </a-tree>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'apih-tree',
});
</script>
<script setup lang="ts">
import {
  ref,
  toRef,
  watch,
  PropType,
  computed,
  defineEmits,
  defineProps,
} from 'vue';
import type { TreeNodeData } from '@arco-design/web-vue';
import { IconFolder, IconCodeSquare } from '@arco-design/web-vue/es/icon';

const emit = defineEmits(['update:value']);
const props = defineProps({
  data: {
    type: Array as PropType<Array<TreeNodeData>>,
    default: () => [],
  },
  value: {
    type: [String, Array] as PropType<string | Array<string>>,
    default: '',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  valueKey: {
    type: String,
    default: 'key',
  },
  labelKey: {
    type: String,
    default: 'title',
  },
  fileIcon: Boolean,
});

const currentValue = ref<string[]>([]);
const multiple = toRef(props, 'multiple');
const currentData = computed(() => {
  function dfs(nodeList: TreeNodeData[]): TreeNodeData[] {
    return [...nodeList].map((node) => {
      const itm = {
        ...node,
        key: getValue(node),
        title: getLabel(node),
      };
      if (Array.isArray(itm?.children)) {
        itm.children = dfs(itm.children);
      }
      return itm;
    });
  }
  return dfs(props.data);
});

watch(() => props.value, (val) => {
  // 多选
  if (multiple.value) {
    if (Array.isArray(val)) {
      currentValue.value = val;
    } else {
      currentValue.value = val ? [val] : [];
    }
    return undefined;
  }
  // 单选
  if (Array.isArray(val)) {
    currentValue.value = val.length > 0 ? [val[0]] : [];
  } else {
    currentValue.value = val ? [val] : [];
  }
}, { deep: true, immediate: true });

watch(() => currentValue.value, (val: string[]) => {
  // 多选
  if (multiple.value) {
    emit('update:value', val);
    return undefined;
  }
  // 单选
  emit('update:value', val.length > 0 ? val[0] : '');
}, { deep: true, immediate: true });

function getLabel(node: TreeNodeData): string {
  const valueKeys = [props.labelKey, 'title', 'name', 'label'];
  for (const key of valueKeys) {
    if (Object.hasOwn(node, key)) { // @ts-ignore
      return node[key];
    }
  }
  return '';
}

function getValue(node: TreeNodeData): string {
  const valueKeys = [props.valueKey, 'id', 'key', 'value'];
  for (const key of valueKeys) {
    if (Object.hasOwn(node, key)) { // @ts-ignore
      return node[key];
    }
  }
  return '';
}
</script>
