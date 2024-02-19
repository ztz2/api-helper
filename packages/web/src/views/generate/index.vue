<template>
  <div class="generate-container">
    <template v-if="isEmpty"><a-empty /></template>
    <template v-else>
      <a-spin tip="加载中..." class="loading-detail" :loading="loading">
        <div :style="{width: `${gap}px`}" class="generate-left-side">
          <ApihCategory
            :data="ahProject.categoryList"
            v-model:selected-keys="selectedKeys"
            style="height: calc(100vh - 106px)"
          />
        </div>
        <div
            :style="{marginLeft: `${gap + 20}px`}"
            class="generate-body"
        >
          <div
              class="generate-handle"
              style="display: flex;justify-content: space-between;"
              :style="{width: `calc(100vw - ${gap + 60}px)`}"
          >
            <a-space>
              <a-button
                :disabled="selectApiList.length === 0"
                type="primary"
                @click="ctrlDrawerAPIRef.open({
                  type: 'ADD',
                  title: '生成(API函数代码)',
                }, {
                  apiList: selectApiList
                })"
              >
                生成(API函数代码)
              </a-button>
              <a-button
                :disabled="selectApiList.length === 0"
                type="primary"
                @click="ctrlDrawerModelRef.open({
                  type: 'ADD',
                  title: '生成(表单代码)'
                }, {
                  categoryList: selectedAhModule,
                  apiList: selectApiList
                })"
              >
                生成(表单代码)
              </a-button>
              <a-button
                  type="primary"
                  :disabled="selectApiList.length === 0"
                  @click="ctrlDrawerExportFileRef.open({
                  type: 'EDIT',
                  title: '文件模块生成',
                  formComponentProps: {
                    apiList: selectApiList
                  }
                })"
              >
                文件模块生成
              </a-button>
              <a-tooltip content="导出内容，包含自定义模板，自定义文件模块配置">
                <a-button
                  :disabled="!hasExportData"
                  @click="handleExport"
                >
                  导出自定义配置
                </a-button>
              </a-tooltip>
              <a-button
                @click="ctrlDrawerImportRef.open({
                  type: 'ADD',
                  title: '导入自定义配置'
                })"
              >
                导入自定义配置
              </a-button>
            </a-space>
            <a-space style="margin-left: 14px">
              <a-button
                type="primary"
                @click="ctrlDrawerPrettierRef.open({
                  type: 'EDIT',
                  title: 'prettier配置',
                })"
              >
                prettier配置
              </a-button>
            </a-space>
          </div>
          <div class="generate-content" style="position: relative;z-index: 1;">
            <a-empty v-if="selectedAhModule.length === 0" style="margin-top: 20px">
              <template #image>
                <icon-face-smile-fill />
              </template>
              请先左边的API
            </a-empty>
            <apih-collapse
              v-else
              class="generate-collapse"
              expand-icon-position="right"
              :default-active-key="['1-1']"
            >
              <apih-collapse-item
                v-for="(ahModule, index) of selectedAhModule"
                :key="`1-${index+1}`"
              >
                <template #header>
                  <div class="generate-collapse__project-header">
                    <div>{{ahModule.name}}</div>
                    <small>{{ahModule.description}}</small>
                  </div>
                </template>
                <apih-collapse
                  v-if="ahModule.apiList.length > 0"
                  expand-icon-position="right"
                >
                  <apih-collapse-item
                    v-for="(api, idx) of ahModule.apiList"
                    :key="`2-${idx+1}`"
                    :class="`generate-collapse-item--${api.method.toLowerCase()}`"
                  >
                    <template #header>
                      <a-space>
                        <a-tag>{{api.method.toUpperCase()}}</a-tag>
                        <a-tooltip content="点击复制接口路径">
                          <span @click.stop="handleCopyPath(api.path)">{{api.path}}</span>
                        </a-tooltip>
                        <small><strong>{{api.label}}</strong></small>
                      </a-space>
                    </template>
                    <apih-collapse expand-icon-position="right">
                      <apih-collapse-item key="3-1" header="接口API函数">
                        <template #default="{isActive}">
                          <ApiCode type="api" :api="api" :visible="isActive" language="typescript" />
                        </template>
                      </apih-collapse-item>
                      <apih-collapse-item key="3-2" header="请求参数">
                        <template #default="{isActive}">
                          <ApiCode type="request" :api="api" :visible="isActive" language="javascript" />
                        </template>
                      </apih-collapse-item>
                      <apih-collapse-item key="3-3" header="响应数据">
                        <template #default="{isActive}">
                          <ApiCode type="response" :api="api" :visible="isActive" language="javascript" />
                        </template>
                      </apih-collapse-item>
                    </apih-collapse>
                  </apih-collapse-item>
                </apih-collapse>
              </apih-collapse-item>
            </apih-collapse>
          </div>
        </div>
      </a-spin>
    </template>
  </div>

  <CtrlDrawerAPI ref="ctrlDrawerAPIRef" />
  <CtrlDrawerModel ref="ctrlDrawerModelRef" />
  <CtrlDrawerImport ref="ctrlDrawerImportRef" />
  <CtrlDrawerPrettier ref="ctrlDrawerPrettierRef" />
  <CtrlDrawerExportFile ref="ctrlDrawerExportFileRef" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'generate-xe52f2',
});
</script>

<script lang="ts" setup>
import {
  ref,
  toRefs,
  computed,
  onMounted,
} from 'vue';
import { useRoute } from 'vue-router';
import useClipboard from 'vue-clipboard3';
import { Message } from '@arco-design/web-vue';
import { APIHelper } from '@api-helper/core/es/lib/types';
import { randomChar } from '@api-helper/core/lib/utils/util';
import { createDocument } from '@api-helper/core/lib/helpers';

import {
  useApiTemplate,
  useModelTemplate,
  useDocumentConfig,
  useFileDirectory,
} from '@/store';
import {
  SECRET_KEY,
  API_CUSTOM_GROUP_ID,
  MODEL_CUSTOM_GROUP_ID,
  FILE_DIRECTORY_CUSTOM_GROUP_ID,
} from '@/constants';
import { getDocs } from '@/api';
import { aes } from '@/utils/crypto';
import { modalConfirm } from '@/utils';
import ApiCode from './__components__/api-code.vue';
import { Template } from '@/store/template/interface';
import { DocumentConfig } from '@/store/document-config/interface';
import ApihCategory from '@/components/apih-category/index.vue';

import CtrlDrawerAPI from './__controller__/ctrl-drawer-api.vue';
import CtrlDrawerModel from './__controller__/ctrl-drawer-model.vue';
import CtrlDrawerImport from './__controller__/ctrl-drawer-import.vue';
import CtrlDrawerPrettier from './__controller__/ctrl-drawer-prettier.vue';
import CtrlDrawerExportFile from './__controller__/ctrl-drawer-export-file.vue';

const route = useRoute();
const { toClipboard } = useClipboard();
const { documentConfigList } = toRefs(useDocumentConfig());
const { customApiTemplateList } = toRefs(useApiTemplate());
const { customModelTemplateList } = toRefs(useModelTemplate());
const { customFileDirectoryList } = toRefs(useFileDirectory());

const gap = ref(320);
const loading = ref(true);
const ctrlDrawerAPIRef = ref();
const ctrlDrawerModelRef = ref();
const ctrlDrawerImportRef = ref();
const ctrlDrawerPrettierRef = ref();
const ctrlDrawerExportFileRef = ref();
const isEmpty = computed(() => !documentConfig.value);
const hasExportData = computed(() => customApiTemplateList.value.length
  || customModelTemplateList.value.length
  || customFileDirectoryList.value.length);

const documentConfig = computed<DocumentConfig>(() => {
  const { id } = route.query;
  return documentConfigList.value.find((itm) => itm.id === id) as DocumentConfig;
});
const ahProject = ref<APIHelper.Document>(createDocument({ id: randomChar() }));
const selectedKeys = ref<string[]>([]);
const selectedAhModule = computed<Array<APIHelper.Category>>(() => {
  const categoryList = [...ahProject.value.categoryList] as Array<APIHelper.Category>;
  return categoryList.map((module) => {
    module = { ...module };
    module.apiList = module.apiList.filter((api) => selectedKeys.value.includes(api.id));
    return module.apiList.length > 0 ? module : null;
  }).filter((t) => t) as Array<APIHelper.Category>;
});
const selectApiList = computed<APIHelper.Category['apiList']>(() => {
  const res = [] as APIHelper.Category['apiList'];
  const modules = selectedAhModule.value as Array<APIHelper.Category>;
  for (let i = 0; i < modules.length; i++) {
    for (let j = 0; j < modules[i].apiList.length; j++) {
      res.push(modules[i].apiList[j]);
    }
  }
  return res;
});

function handleCopyPath(path: string) {
  toClipboard(path);
  Message.success('已复制到剪切板');
}

async function handleExport() {
  await modalConfirm('确认要导出全部自定义模板吗？');
  const dataMap: Recordable = {};
  if (customApiTemplateList.value.length > 0) {
    dataMap[API_CUSTOM_GROUP_ID] = customApiTemplateList.value;
  }
  if (customModelTemplateList.value.length > 0) {
    dataMap[MODEL_CUSTOM_GROUP_ID] = customModelTemplateList.value;
  }
  if (customFileDirectoryList.value.length > 0) {
    dataMap[FILE_DIRECTORY_CUSTOM_GROUP_ID] = customFileDirectoryList.value;
  }
  const exportContent = aes.encrypt(JSON.stringify(dataMap), SECRET_KEY);
  const eleLink = document.createElement('a');
  eleLink.download = 'api-helper自定义配置.txt';
  eleLink.style.display = 'none';
  eleLink.style.position = 'fixed';
  const blob = new Blob([exportContent]);
  eleLink.href = URL.createObjectURL(blob);
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}

onMounted(async () => {
  if (documentConfig.value) {
    try {
      loading.value = true;
      const res: any = await getDocs(documentConfig.value);
      ahProject.value = res?.[0] as APIHelper.Document;
    } finally {
      loading.value = false;
    }
  }
});
</script>
<style lang="scss">
@import "../../style/variable.scss";

$fixed-y: 86px;
$fixed-x: 20px;
.generate-container{
  @at-root .generate-left-side{
    position: fixed;
    top: $fixed-y;
    left: $fixed-x;
  }
  @at-root .loading-detail{
    width: 100%;
    position: relative;
    >.arco-spin-mask{
      position: absolute;
      top: 0;
      width: 100%;
      height: calc(100vh - 106px);
    }
  }
  @at-root .generate-body{
    position: relative;
    margin-top: 42px;
    @at-root .generate-handle{
      width: 100%;
      position: fixed;
      z-index: 10;
      top: 66px;
      padding: 20px 0 10px 0;
      background: #fff;
    }
  }
  @at-root .generate-collapse{
    border: none;
    >.arco-collapse-item {
      >.arco-collapse-item-header{
        background: none;
        border: none;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(59,65,81,.3);
        @at-root .generate-collapse__project-header{
          display: flex;
          height: 51px;
          align-items: center;

          >div:first-child{
            font-size: 24px;
            font-weight: bold;
          }
          >small{
            font-size: 14px;
            padding: 0 10px;
          }
        }
      }
      >.arco-collapse-item-content{
        padding: 0;
        >.arco-collapse-item-content-box{
          padding-top: 5px;
          /** 二级 **/
          >.arco-collapse{
            border-radius: 0;
            border: none;
            >.arco-collapse-item{
              margin-bottom: 4px;
              border-radius: 0;
              border-bottom: 1px solid transparent;
              .arco-tag{ color: #fff; font-weight: bold; }
              >.arco-collapse-item-header{
                padding-top: 10px;
                padding-bottom: 10px;
                border: none;
              }
              >.arco-collapse-item-content{
                padding: 0;
                >.arco-collapse-item-content-box{
                  padding-top: 0;
                  padding-bottom:  0;
                  /** 三级 **/
                  >.arco-collapse{
                    border-left: 0;
                    border-right: 0;
                    border-bottom: none;
                    border-radius: 0;
                    .arco-collapse-item{
                      border-top: 1px solid transparent;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @at-root .generate-collapse-item--get{ // 二级栏目
    $border-color: rgb(97, 175, 254);
    $background-color: rgb(97, 175, 254, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--post{ // 二级栏目
    $border-color: rgb(73, 204, 144);
    $background-color: rgb(73, 204, 144, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--put{ // 二级栏目
    $border-color: rgb(252, 161, 48);
    $background-color: rgb(252, 161, 48, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--delete{// 二级栏目
    $border-color: rgb(249, 62, 62);
    $background-color: rgb(249, 62, 62, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--options{// 二级栏目
    $border-color: rgb(15, 198, 194);
    $background-color: rgb(15, 198, 194, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--head{// 二级栏目
    $border-color: rgb(183, 29, 232);
    $background-color: rgb(183, 29, 232, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--connect{// 二级栏目
    $border-color: rgb(255, 87, 34);
    $background-color: rgb(255, 87, 34, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--trace{// 二级栏目
    $border-color: rgb(120, 22, 255);
    $background-color: rgb(120, 22, 255, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }

  @at-root .generate-collapse-item--patch{// 二级栏目
    $border-color: rgb(134, 144, 156);
    $background-color: rgb(134, 144, 156, .1);

    border: 1px solid $border-color!important;
    .arco-tag{ background-color: $border-color; }
    &-active > .arco-collapse-item-header{
      border-bottom: 1px solid $border-color;
    }
    >.arco-collapse-item-header{
      background: $background-color;
    }
    >.arco-collapse-item-content{
      .arco-collapse-item{   // 三级栏目
        border-top: 1px solid $border-color!important;
        .arco-collapse-item-header{
          background: $background-color;
        }
        &-active > .arco-collapse-item-header{
          border-color: $border-color;
        }
      }
    }
  }
}
</style>
