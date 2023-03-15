<template>
  <div class="apih-category">
    <div class="apih-category-search">
      <a-input-search
        v-model="searchValue"
        @search="handleSearch"
        @blur="handleBlur"
        @keydown.enter="handleSearch"
        style="width: 100%"
        placeholder="模块或接口名称、路径"
        search-button
      />
    </div>
    <div class="apih-category-body">
      <a-empty v-if="currentData.length === 0" />
      <template v-else>
        <div
          v-for="module of currentData"
          :key="module.id"
          :class="{
            'apih-category-item--active': checkSelectedSomeApi(module)
          }"
          @click="handleSelectModule(module)"
          class="apih-category-item"
        >
          <div class="apih-category-item__label">
            <div class="apih-category-item__label-text">
              <span>{{module.name}}</span>
              <span>
            <a-tag
              v-if="selectedApiNum(module)"
              size="small"
              color="#ff5722"
              class="user-select-none"
            >
              {{selectedApiNum(module)}}
            </a-tag>
          </span>
            </div>
            <div @click.stop class="apih-category-item__handle user-select-none">
              <div
                v-if="module.apiList.length > 0"
                @click="handleExpand(module)"
                :class="{
              'apih-category-item__handle-expand--active': currentExpandedKeys.includes(module.id)
            }"
                class="apih-category-item__handle-expand"
              >
                <icon-down />
              </div>
            </div>
          </div>
          <div
            v-show="currentExpandedKeys.includes(module.id)"
            @click.stop
            class="apih-category-item__content"
          >
            <div
              v-for="api of module.apiList"
              :key="api.id"
              :class="{
            'apih-category-item-sub--active': currentSelectedKeys.includes(api.id)
          }"
              class="apih-category-item-sub"
            >
              <div @click="handleSelectAPI(api)" class="apih-category-item-sub__label">
                {{ api.summary ? api.summary : api.description }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'apih-category',
});
</script>
<script setup lang="ts">
import {
  ref, PropType, defineProps, defineEmits, watch,
} from 'vue';
import { APIHelper } from '@api-helper/core';

const emit = defineEmits([
  'update:selectedKeys',
  'update:expandedKeys',
]);
const props = defineProps({
  data: {
    type: Array as PropType<Array<APIHelper.Category>>,
    default: () => [],
  },
  selectedKeys: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
  expandedKeys: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
});

const searchValue = ref('');
const currentData = ref<APIHelper.CategoryList>([]);
const currentExpandedKeys = ref<Array<string>>([]);
const currentSelectedKeys = ref<Array<string>>([]);

watch(() => props.data, () => handleSearch());
watch(() => props.expandedKeys, (val) => currentExpandedKeys.value = val, { deep: true, immediate: true });
watch(() => props.selectedKeys, (val) => currentSelectedKeys.value = val, { deep: true, immediate: true });
watch(() => currentExpandedKeys.value, (val) => emit('update:expandedKeys', val));
watch(() => currentSelectedKeys.value, (val) => emit('update:selectedKeys', val));

function clearSelectedKeys() {
  currentSelectedKeys.value.splice(0, currentSelectedKeys.value.length);
}
function checkSelectedAll(module: APIHelper.Category) {
  return module.apiList.every((itm) => currentSelectedKeys.value.includes(itm.id));
}
function checkSelectedSomeApi(module: APIHelper.Category) {
  return module.apiList.some((itm) => currentSelectedKeys.value.includes(itm.id));
}
function selectedApiNum(module: APIHelper.Category) {
  return module.apiList.reduce((preValue, itm) => {
    if (currentSelectedKeys.value.includes(itm.id)) {
      preValue++;
    }
    return preValue;
  }, 0);
}

let searchTimer: number | undefined | null;
function handleSearch(): void {
  if (searchTimer) {
    clearTimeout(searchTimer);
  }
  searchTimer = setTimeout(() => {
    const text = searchValue.value?.trim() ?? '';
    if (!text) {
      currentData.value = props.data;
      return undefined;
    }
    currentData.value = [];
    for (const t of props.data) {
      const item = { ...t };
      const { apiList } = item;
      let hasMatch = item.name.includes(text);
      if (!hasMatch) {
        item.apiList = [];
        for (const t2 of apiList) {
          if (t2.summary?.includes(text) || t2.path?.includes(text)) {
            hasMatch = true;
            item.apiList.push(t2);
          }
        }
      }
      if (hasMatch) {
        currentData.value.push(item);
      }
    }
  }, 200);
}
function handleBlur() {
  if (!(searchValue.value?.trim() ?? '')) {
    handleSearch();
  }
}
function handleExpand(module: APIHelper.Category, add = false) {
  const index = currentExpandedKeys.value.indexOf(module.id);
  if (add) {
    index === -1 && currentExpandedKeys.value.push(module.id);
    return;
  }
  if (index === -1) {
    currentExpandedKeys.value.push(module.id);
  } else {
    currentExpandedKeys.value.splice(index, 1);
  }
}
function handleSelectModule(module: APIHelper.Category) {
  const isSelectedAll = checkSelectedAll(module);
  // 全选了，进行取消
  if (isSelectedAll) {
    return clearSelectedKeys();
  }
  // 非全选，进行全选
  clearSelectedKeys();
  module.apiList.forEach((itm) => {
    currentSelectedKeys.value.push(itm.id);
  });
  handleExpand(module, true);
}
function handleSelectAPI(api: APIHelper.API) {
  const index = currentSelectedKeys.value?.indexOf(api.id) ?? -1;
  if (index === -1) {
    currentSelectedKeys.value.push(api.id);
  } else {
    currentSelectedKeys.value.splice(index, 1);
  }
}
</script>

<style lang="scss">
.apih-category{
  $background--active: rgb(44, 44, 45);
  width: 100%;
  height: 100%;
  background-color: rgb(35, 35, 36);
  border-radius: 4px;
  padding: 4px 8px;
  min-height: 200px;
  position: relative;
  display: flex;
  &, >* {
    box-sizing: border-box;
  }
  @at-root .apih-category-search{
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
  }
  @at-root .apih-category-body{
    flex-grow: 1;
    overflow: auto;
    margin-top: 44px;
    @at-root .apih-category-item__label-notice{
      font-size: 10px;
      border-radius: 50%;
    }
    @at-root .apih-category-item__label{
      font-size: 16px;
      position: relative;
      padding-right: 34px!important;
      @at-root .apih-category-item__label-text{
        display: flex;
        >:nth-child(1){
          overflow: hidden;
          height: 20px;
          text-overflow: ellipsis;
        }
        >:nth-child(2){
          margin-left: 4px;
        }
      }
      @at-root .apih-category-item__handle {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        @at-root .apih-category-item__handle-expand{
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: .25s;
        }
        @at-root .apih-category-item__handle-expand--active{
          transform: rotate(180deg);
        }
      }
    }
    @at-root .apih-category-item--active >.apih-category-item__label{
      color: rgb(22,93,255);
    }
    @at-root .apih-category-item-sub--active > .apih-category-item-sub__label{
      color: #fff;
      background-color: $background--active;
    }
    @at-root .apih-category-item-sub__label{
      &:before{
        content: '';
        display: inline-block;
        width: 14px;
      }
    }
    @at-root .apih-category-item__label, .apih-category-item-sub__label{
      height: 40px;
      padding: 0 12px;
      margin-bottom: 4px;
      transition: background-color .25s, color .25s;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      color: rgb(201, 205, 212);
      &:hover{
        background-color: $background--active;
      }
    }
  }
}
</style>
