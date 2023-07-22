<template>
  <div class="apih-tooltip">
    <slot v-if="!content"></slot>
    <template v-else>
      <a-tooltip :content="content">
        <div><slot></slot></div>
      </a-tooltip>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'apih-tooltip',
});
</script>
<script setup lang="ts">
import {
  PropType, defineProps,
} from 'vue';

const props = defineProps({
  content: {
    type: String as PropType<string>,
    default: '',
  },
  position: {
    type: String as PropType<'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br' | 'left' | 'lt' | 'lb' | 'right' | 'rt' | 'rb'>,
    default: () => 'top',
  },
});
</script>

<style lang="scss">
.apih-tooltip{
  display: inline-block;
}
</style>
