<template>
  <Codemirror
    v-model="currentValue"
    placeholder="请输入"
    :tab-size="2"
    :indent-with-tab="true"
    :extensions="extensions"
    :style="{ height: currentHeight }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'apih-code-mirror',
});
</script>
<script setup lang="ts">
import {
  ref, watch, computed, defineEmits, defineProps,
} from 'vue';

import { Codemirror } from 'vue-codemirror';
import { json } from '@codemirror/lang-json';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

const emit = defineEmits([
  'update:value',
]);
const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  height: {
    type: [String, Number],
    default: 'calc(100vh - 140px)',
  },
});

const currentValue = ref('');
const extensions = [json(), html(), javascript(), oneDark];
const currentHeight = computed(() => (typeof props.height === 'number' ? `${props.height}px` : props.height));

watch(() => props.value, (v) => currentValue.value = v, { immediate: true });
watch(() => currentValue.value, (v) => emit('update:value', v), { immediate: true });
</script>
