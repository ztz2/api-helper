<template>
  <a-collapse
    v-bind="$attrs"
    class="apih-collapse"
    :expand-icon-position="expandIconPosition"
    :default-active-key="defaultActiveKey"
  >
    <slot></slot>
  </a-collapse>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'apih-collapse',
});
</script>
<script setup lang="ts">
import {
  PropType,
  defineProps,
} from 'vue';

const props = defineProps({
  expandIconPosition: {
    type: String as PropType<'left' | 'right'>,
    default: 'right',
  },
  defaultActiveKey: {
    type: Array as PropType<Array<string | number>>,
    default: () => [],
  },
});
</script>
