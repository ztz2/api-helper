<template>
  <a-select
    v-model="currentValue"
    :placeholder="placeholder"
    :allow-clear="allowClear"
    :options="currentOptions"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'apih-select',
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
import type {
  SelectOptionData,
  SelectOptionGroup,
} from '@arco-design/web-vue';

const emit = defineEmits(['update:value']);
const props = defineProps({
  options: {
    type: Array as PropType<Array<SelectOptionData>>,
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
  labelKey: {
    type: String,
    default: 'title',
  },
  valueKey: {
    type: String,
    default: 'id',
  },
  placeholder: {
    type: String,
    default: '',
  },
  allowClear: {
    type: Boolean,
    default: true,
  },
});

const currentValue = ref<string[]>([]);
const multiple = toRef(props, 'multiple');
const currentOptions = computed(() => processOptions(props.options));

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

function getLabel(node: SelectOptionData): string {
  const valueKeys = [props.labelKey, 'title', 'name', 'label'];
  for (const key of valueKeys) {
    if (Object.hasOwn(node, key)) { // @ts-ignore
      return node[key];
    }
  }
  return '';
}

function getValue(node: SelectOptionData): string {
  const valueKeys = [props.valueKey, 'id', 'key', 'value'];
  for (const key of valueKeys) {
    if (Object.hasOwn(node, key)) { // @ts-ignore
      return node[key];
    }
  }
  return '';
}

function processOptions(options: Array<SelectOptionGroup> | Array<SelectOptionData>) {
  return options.map((item: SelectOptionGroup | SelectOptionData) => {
    item = { ...item };
    item.label = getLabel(item);
    item.value = getValue(item);
    if (Array.isArray(item.options)) {
      item.options = processOptions(item.options as Array<SelectOptionGroup>);
    }
    if (Array.isArray(item.children)) {
      item.children = processOptions(item.children);
    }
    return item;
  });
}
</script>
