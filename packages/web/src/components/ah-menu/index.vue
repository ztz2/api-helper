<template>
  <div class="ah-module">
    <div class="ah-module-search">
      <a-input-search
        v-model="searchValue"
        @search="handleSearch"
        style="width: 100%"
        placeholder="模块名称、路径"
        search-button
      />
    </div>
    <div class="ah-module-body">
      <div
          v-for="module of data"
          :key="module.id"
          :class="{
            'ah-module-item--active': checkSelectedSomeApi(module)
          }"
          @click="handleSelectModule(module)"
          class="ah-module-item"
      >
        <div class="ah-module-item__label">
          <div class="ah-module-item__label-text">
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
          <div @click.stop class="ah-module-item__handle user-select-none">
            <div
                v-if="module.apiList.length > 0"
                @click="handleExpand(module)"
                :class="{
              'ah-module-item__handle-expand--active': currentExpandedKeys.includes(module.id)
            }"
                class="ah-module-item__handle-expand"
            >
              <icon-down />
            </div>
          </div>
        </div>
        <div
            v-show="currentExpandedKeys.includes(module.id)"
            @click.stop
            class="ah-module-item__content"
        >
          <div
              v-for="subModule of module.apiList"
              :key="subModule.id"
              :class="{
            'ah-module-item-sub--active': currentSelectedKeys.includes(subModule.id)
          }"
              class="ah-module-item-sub"
          >
            <div @click="handleSelectModuleSub(subModule)" class="ah-module-item-sub__label">
              {{ subModule.summary ? subModule.summary : subModule.field }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ah-module'
})
</script>
<script setup lang="ts">
import { ref, PropType, defineProps, watch } from 'vue';
import { Module } from './interface';
import { AhModule, AhAPI } from '@/core/interface';

const emit = defineEmits([
    'update:selectedKeys',
    'update:expandedKeys',
]);
const props = defineProps({
  data: {
    type: Array as PropType<Array<AhModule>>,
    default: () => []
  },
  selectedKeys: {
    type: Array as PropType<Array<string>>,
    default: () => []
  },
  expandedKeys: {
    type: Array as PropType<Array<string>>,
    default: () => []
  }
});

const searchValue = ref('');
const currentExpandedKeys = ref<Array<string>>([]);
const currentSelectedKeys = ref<Array<string>>([]);

watch(() => props.expandedKeys, (val) => currentExpandedKeys.value = val, { deep: true, immediate: true });
watch(() => props.selectedKeys, (val) => currentSelectedKeys.value = val, { deep: true, immediate: true });
watch(() => currentExpandedKeys.value, (val) => emit('update:expandedKeys', val));
watch(() => currentSelectedKeys.value, (val) => emit('update:selectedKeys', val));

function clearSelectedKeys() {
  currentSelectedKeys.value.splice(0, currentSelectedKeys.value.length);
}
function checkSelectedAll(module: Module) {
  return module.apiList.every((itm) => currentSelectedKeys.value.includes(itm.id));
}
function checkSelectedSomeApi(module: Module) {
  return module.apiList.some((itm) => currentSelectedKeys.value.includes(itm.id));
}
function selectedApiNum(module: Module) {
  return module.apiList.reduce((preValue, itm) => {
    if (currentSelectedKeys.value.includes(itm.id)) {
      preValue++;
    }
    return preValue;
  }, 0)
}
function handleSearch() {
  console.log('搜索', searchValue.value);
}
function handleExpand(module: Module, add = false) {
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
function handleSelectModule(module: Module) {
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
function handleSelectModuleSub(module: Module) {
  const index = currentSelectedKeys.value?.indexOf(module.id) ?? -1;
  if (index === -1) {
    currentSelectedKeys.value.push(module.id);
  } else {
    currentSelectedKeys.value.splice(index, 1);
  }
}
</script>

<style lang="scss">
.ah-module{
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
  @at-root .ah-module-search{
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
  }
  @at-root .ah-module-body{
    flex-grow: 1;
    overflow: auto;
    margin-top: 44px;
    @at-root .ah-module-item__label-notice{
      font-size: 10px;
      border-radius: 50%;
    }
    @at-root .ah-module-item__label{
      font-size: 16px;
      position: relative;
      padding-right: 34px!important;
      @at-root .ah-module-item__label-text{
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
      @at-root .ah-module-item__handle {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        @at-root .ah-module-item__handle-expand{
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: .25s;
        }
        @at-root .ah-module-item__handle-expand--active{
          transform: rotate(180deg);
        }
      }
    }
    @at-root .ah-module-item--active >.ah-module-item__label{
      color: rgb(22,93,255);
    }
    @at-root .ah-module-item-sub--active > .ah-module-item-sub__label{
      color: #fff;
      background-color: $background--active;
    }
    @at-root .ah-module-item-sub__label{
      &:before{
        content: '';
        display: inline-block;
        width: 14px;
      }
    }
    @at-root .ah-module-item__label, .ah-module-item-sub__label{
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
