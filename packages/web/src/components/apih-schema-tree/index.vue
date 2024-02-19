<template>
  <div class="apih-schema-tree">
    <template v-if="treeData.length === 0"><a-empty></a-empty></template>
    <template v-else>
      <div>
        <div class="apih-tree__select-root" @click="handleSelectAll(treeData, true)">
          <icon-check-circle-fill
              :size="16"
              :style="{color: checkNodeSelectedAll(treeData, true) ? '#165dff' : '#c9cdd4'}"
          />
<!--          <span>{{checkNodeSelectedAll(treeData, true) ? '取消全选根节点' : '全选根节点'}}</span>-->
          <span>全选根节点</span>
        </div>
      </div>
      <a-tree
          v-bind="$attrs"
          v-model:checkedKeys="checkedKeys"
          v-model:expandedKeys="currentExpandedKeys"
          :data="treeData"
          :value-key="valueKey"
          @drop="onDrop"
          blockNode
          draggable
      >
        <template #title="node">
          <div class="apih-schema-tree__node">
            <div class="apih-schema-tree__node-label" @click="handleClickNode(node)">
              <div class="apih-schema-tree__node-label-text">
                <a-checkbox
                  :model-value="checkedKeys.includes(node[valueKey])"
                >
                  <a-space :size="4">
                    <a-tooltip v-if="node.isSchemaObject" :content="`数据类型包装节点，当前数据类型为：${pascalCase(node.type)}`">
                      <icon-info-circle-fill style="color: #666" />
                    </a-tooltip>
                    <span>{{getLabel(node)}}</span>
                  </a-space>
                </a-checkbox>
              </div>
              <div class="apih-schema-tree__node-label-des" v-if="extraLabelKey">
                {{getValueUtil(node, extraLabelKey)}}
              </div>
            </div>
            <div class="apih-schema-tree__node-handle">
              <template v-if="node[childrenKey] && node[childrenKey].length > 0">
                <a-tooltip :content="checkNodeSelectedAll(node) ? '取消全选子节点' : '全选子节点'">
                  <div @click="handleSelectAll(node)">
                    <icon-check-circle-fill
                      :size="16"
                      :style="{color: checkNodeSelectedAll(node) ? '#4b88ed' : '#c9cdd4'}"
                    />
                  </div>
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
  name: 'apih-schema-tree',
});
</script>
<script lang="ts" setup>
import {
  ref,
  watch,
  PropType,
  defineEmits,
  defineProps,
} from 'vue';
import {
  isSchemaObject,
  filterSchemaPrimitiveValue,
} from '@api-helper/core/lib/utils/util';
import { cloneDeep } from 'lodash';
import { pascalCase } from 'change-case';
import { APIHelper } from '@api-helper/core/lib/types';
import { TreeNodeData as ITreeNodeData } from '@arco-design/web-vue';

import message from '@/utils/message';
import { treeForEach } from '@/utils/tree';
import { getValueUtil } from '@/components/utils';

type TreeNodeData = ITreeNodeData & APIHelper.Schema;

const emit = defineEmits(['update:value', 'update:expandedKeys']);
const props = defineProps({
  data: {
    type: Array as PropType<TreeNodeData[]>,
    default: () => [],
  },
  value: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
  valueKey: {
    type: String,
    default: 'id',
  },
  labelKey: {
    type: String,
    default: 'keyName',
  },
  extraLabelKey: {
    type: String,
    default: 'label',
  },
  childrenKey: {
    type: String,
    default: 'params',
  },
  expandedKeys: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
});

const checkedKeys = ref<Array<string>>([]);
const currentExpandedKeys = ref<Array<string>>([]);
const treeData = ref<TreeNodeData[]>([]);

watch(() => props.data, () => {
  const temp = filterSchemaPrimitiveValue(props.data as unknown as APIHelper.SchemaList) as [];
  treeForEach(temp, (node: Recordable) => {
    node.isSchemaObject = isSchemaObject(node as APIHelper.Schema);
    node.key = getValue(node);
    node.title = getLabel(node);
    node.children = node[props.childrenKey];
  }, props.childrenKey);
  treeData.value = temp;
});
watch(() => props.value, () => checkedKeys.value = props.value, { deep: true });
watch(() => checkedKeys.value, (val) => emit('update:value', val), { deep: true });
watch(() => props.expandedKeys, (val) => {
  currentExpandedKeys.value = val;
}, { deep: true });
watch(() => currentExpandedKeys.value, (val) => {
  emit('update:expandedKeys', val);
}, { deep: true });

function checkNodeSelectedAll(node: Recordable, isChildren = false) {
  const children = isChildren ? node : node[props.childrenKey];
  return children.every((itm: Recordable) => checkedKeys.value.includes(itm[props.valueKey]));
}

function handleSelectAll(node: Recordable, isChildren = false) {
  const isSelectedAll = checkNodeSelectedAll(node, isChildren);
  const children = isChildren ? node : node[props.childrenKey];
  for (let i = 0; i < children.length; i++) {
    const itm = children[i];
    const index = checkedKeys.value.indexOf(itm[props.valueKey]);
    // 已经全选，进行取消全选
    if (isSelectedAll) {
      index !== -1 && checkedKeys.value.splice(index, 1);
      // fix: 子节点也取消全选。
      treeForEach([itm], (item: APIHelper.Schema) => { // @ts-ignore
        const idx = checkedKeys.value.indexOf(item?.[props.valueKey]);
        if (idx !== -1) {
          checkedKeys.value.splice(idx, 1);
        }
      }, 'params');
    } else { // 非全选进行添加
      index === -1 && checkedKeys.value.push(itm[props.valueKey]);
    }
  }
  // 展开该节点-当全选操作
  if (!isSelectedAll) {
    const index = currentExpandedKeys.value.indexOf(node[props.valueKey]);
    index === -1 && currentExpandedKeys.value.push(node[props.valueKey]);
  }
}

function handleClickNode(node: Recordable) {
  const index = checkedKeys.value.indexOf(node[props.valueKey]);
  index === -1 ? checkedKeys.value.push(node[props.valueKey]) : checkedKeys.value.splice(index, 1);
}

function getLabel(node: Recordable) {
  const label = getValueUtil(node, props.labelKey);
  // 如果是Object或者Array类型，会显示数据类型
  if (node.isSchemaObject) {
    return label || pascalCase(node.type);
  }
  return label;
}

function getValue(node: Recordable) {
  return getValueUtil(node, props.valueKey);
}

function onDrop({ dragNode, dropNode, dropPosition }: Recordable) {
  // 禁止往子节点里面添加
  if (dropPosition === 0) {
    message.warn('只能在同一层级中拖动');
    return undefined;
  }
  // 禁止子节点往父节点添加
  if (!isSiblingNode(dragNode, dropNode)) {
    message.warn('只能在同一层级中拖动');
    return undefined;
  }
  const data = treeData.value;

  const loop = (data: TreeNodeData[], key: string, callback: Function) => {
    data.some((item: TreeNodeData, index: number, arr: TreeNodeData[]) => {
      if (item.key === key) {
        callback(item, index, arr);
        return true;
      }
      // @ts-ignore
      const children = item[props.childrenKey];
      if (children) {
        return loop(children, key, callback);
      }
      return false;
    });
  };

  loop(data, dragNode.key, (_: unknown, index: number, arr: TreeNodeData[]) => {
    arr.splice(index, 1);
  });

  if (dropPosition === 0) {
    loop(data, dropNode.key, (item: TreeNodeData) => {
      // @ts-ignore
      item[props.childrenKey] = item[props.childrenKey] || [];
      // @ts-ignore
      item[props.childrenKey].push(dragNode);
    });
  } else {
    loop(data, dropNode.key, (_: unknown, index: number, arr: TreeNodeData[]) => {
      arr.splice(dropPosition < 0 ? index : index + 1, 0, dragNode);
    });
  }
  sortCheckedKeys();
}

function sortCheckedKeys() {
  const record = cloneDeep(checkedKeys.value);
  checkedKeys.value.splice(0, checkedKeys.value.length);
  treeForEach(props.data, (node: TreeNodeData) => {
    const id = getValue(node);
    if (record.includes(id)) {
      checkedKeys.value.push(id);
    }
  }, props.childrenKey);
}
function isSiblingNode(dragNode: TreeNodeData, dropNode: TreeNodeData) {
  if (!dragNode || !dropNode) {
    return false;
  }
  const k1 = getValue(dragNode);
  const k2 = getValue(dropNode);
  function dfs(nodeList: TreeNodeData[]) {
    if (!nodeList.length) {
      return false;
    }
    let hasDragNode = false;
    let hasDropNode = false;
    for (const n of nodeList) {
      const k3 = getValue(n);
      if (k1 === k3) {
        hasDragNode = true;
      }
      if (k2 === k3) {
        hasDropNode = true;
      }
    }
    // 该List都有他们，直接返回
    if (hasDragNode && hasDropNode) {
      return true;
    }
    // 没有递归子节点
    for (const n of nodeList) {
      // @ts-ignore 子节点中找到，直接返回
      if (dfs(n[props.childrenKey])) {
        return true;
      }
    }
    // 都没有找到，直接返回
    return false;
  }
  return dfs(props.data);
}
</script>

<style lang="scss">
.apih-schema-tree{
  width: 100%;
  height: 100%;
  overflow: auto;
  .arco-checkbox{
    align-items: flex-start;
    >.arco-icon-hover{
      margin-top: 1px;
    }
    >.arco-checkbox-label{
      line-height: 16px;
    }
  }
  .arco-tree-node{
    align-items: flex-start;
    >.arco-tree-node-switcher{
      margin-top: 2px;
    }
    >.arco-tree-node-title{
      padding-top: 10px;
      padding-bottom: 10px;
      >.arco-tree-node-title-text{
        display: flex;
        flex-grow: 1;
        >.arco-tree-node-drag-icon{
          top: 6px;
          right: 0;
        }
        @at-root .apih-schema-tree__node{
          display: flex;
          flex-grow: 1;
          position: relative;
          @at-root .apih-schema-tree__node-label{
            flex-grow: 1;
            @at-root .apih-schema-tree__node-label-text{
              padding-right: 18px;
              line-height: 10px;
            }
            @at-root .apih-schema-tree__node-label-des{
              padding-left: 22px;
              font-size: 8px;
              color: rgb(134,144,156);
              line-height: 16px;
              margin-top: 4px;
            }
          }
          @at-root .apih-schema-tree__node-handle{
            position: absolute;
            right: 10px;
            top: -3px;
            > * {
              transition: opacity .25s;
              &:hover{
                opacity: .75;
              }
            }
          }
        }
      }
    }
  }
  @at-root .apih-tree__select-root{
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-left: 23px;
    margin-bottom: 10px;
    > span:last-child{
      margin-left: 4px;
    }
  }
}
</style>
