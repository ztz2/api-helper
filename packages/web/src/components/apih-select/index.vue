<template>
  <a-select
    v-model="currentValue"
    value-key="id"
    :placeholder="placeholder"
    :allow-clear="allowClear"
  >
    <a-option
      v-for="item of currentOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </a-select>
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
import {
  TreeNodeData,
} from '@arco-design/web-vue';

const emit = defineEmits(['update:value']);
const props = defineProps({
  options: {
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
  labelKey: {
    type: String,
    default: 'label',
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
const currentOptions = computed(() => props.options.map((item) => ({
  ...item,
  label: getLabel(item),
  value: getValue(item),
})));

watch(() => currentOptions.value, (val) => {
  console.log(val);
}, { immediate: true });

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
  const valueKeys = [props.labelKey, 'name', 'label', 'title'];
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

<style lang="scss">

</style>
