<template>
  <div class="ah-tree-field">
    <template v-if="treeData.length === 0"><a-empty></a-empty></template>
    <template v-else>
      <div>
        <div class="ah-tree__select-root" @click="handleSelectAll(treeData, true)">
          <icon-check-circle-fill
              :size="16"
              :style="{color: checkNodeSelectedAll(treeData, true) ? '#4b88ed' : '#c9cdd4'}"
          />
          <span>{{checkNodeSelectedAll(treeData, true) ? '取消全选根节点' : '全选根节点'}}</span>
        </div>
      </div>
      <a-tree
          v-model:checkedKeys="checkedKeys"
          v-model:expandedKeys="expandedKeys"
          :data="treeData"
          :value-key="valueKey"
          blockNode
      >
        <template #extra="node">
          <div class="ah-tree-field__node">
            <div class="ah-tree-field__node-label">
              <a-checkbox
                  :model-value="checkedKeys.includes(node[valueKey])"
                  @click="handleClickNode(node)"
              >
                {{node[labelKey]}}
              </a-checkbox>
            </div>
            <div class="ah-tree-field__node-handle">
              <template v-if="node.children && node.children.length > 0">
                <a-tooltip :content="checkNodeSelectedAll(node) ? '取消全选子节点' : '全选子节点'">
                  <icon-check-circle-fill
                      :size="16"
                      :style="{color: checkNodeSelectedAll(node) ? '#4b88ed' : '#c9cdd4'}"
                      @click="handleSelectAll(node)"
                  />
                </a-tooltip>
              </template>
            </div>
          </div>
        </template>
      </a-tree>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ah-tree-field'
});
</script>
<script lang="ts" setup>
import {
  ref,
  watch,
  computed,
  PropType,
  defineComponent,
} from 'vue';
import { treeMap } from '@/utils/tree';

const emit = defineEmits(['update:value']);
const props = defineProps({
  data: Array,
  value: {
    type: Array as PropType<Array<string>>,
    default: () => []
  },
  valueKey: {
    type: String,
    default: 'id'
  },
  labelKey: {
    type: String,
    default: 'field'
  }
});

const checkedKeys = ref<Array<string>>([]);
const expandedKeys = ref<Array<string>>([]);

watch(() => props.value, () => checkedKeys.value = props.value, { deep: true });
watch(() => checkedKeys.value, (val) => emit('update:value', val), { deep: true });

const treeData = computed(() => {
  return treeMap(props.data, (node: Recordable) => ({
    ...node,
    key: node[props.valueKey],
    title: node[props.labelKey]
  }));
});

function checkNodeSelectedAll(node: Recordable, isChildren = false) {
  const children = isChildren ? node : node.children;
  return children.every((itm: Recordable) => checkedKeys.value.includes(itm[props.valueKey]));
}

function handleSelectAll(node: Recordable, isChildren = false) {
  const isSelectedAll = checkNodeSelectedAll(node, isChildren);
  const children = isChildren ? node : node.children;
  for (let i = 0; i < children.length; i++) {
    const itm = children[i];
    const index = checkedKeys.value.indexOf(itm[props.valueKey]);
    // 已经全选，进行取消全选
    if (isSelectedAll) {
      index !== -1 && checkedKeys.value.splice(index, 1);
    } else { // 非全选进行添加
      index === -1 && checkedKeys.value.push(itm[props.valueKey]);
    }
  }
  // 展开该节点-当全选操作
  if (!isSelectedAll) {
    const index = expandedKeys.value.indexOf(node[props.valueKey]);
    index === -1 && expandedKeys.value.push(node[props.valueKey]);
  }
}

function handleClickNode(node: Recordable) {
  const index = checkedKeys.value.indexOf(node[props.valueKey]);
  index === -1 ? checkedKeys.value.push(node[props.valueKey]) : checkedKeys.value.splice(index, 1);
}
</script>

<style lang="scss">
.ah-tree-field{
  width: 100%;
  height: 100%;
  overflow: auto;
  .arco-tree-node-title{
    display: none;
  }
  @at-root .ah-tree__select-root{
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-left: 24px;
    > span:last-child{
      margin-left: 4px;
    }
  }
  @at-root .ah-tree-field__node{
    position: relative;
    width: 100%;
    @at-root .ah-tree-field__node-label{
      width: 100%;
      padding-right: 20px;
      box-sizing: border-box;
      overflow: hidden;
      // #c9cdd4
    }
    @at-root .ah-tree-field__node-handle{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 32px;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      > * {
        transition: opacity .25s;
        &:hover{
          opacity: .75;
        }
      }
    }
  }
}
</style>