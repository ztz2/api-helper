<template>
  <div>
    <div style="display: flex;">
      <a-card style="width: 330px; flex-shrink: 0;">
        <div>
          <a-input v-model="content" type="text" placeholder="请输入请求数据" @input="matchFields" />
        </div>
        <div style="width: 100%; margin-top: 16px;">
          <apih-schema-tree
            v-model:value="selectFields"
            v-model:expanded-keys="requestExpandedKeys"
            extra-label-key="label"
            height="calc(100vh - 196px)"
            :data="requestDataSchemaList"
            draggable
          />
        </div>
      </a-card>
      <a-card style="flex-grow: 1;margin-top: 0;margin-left: 16px;">
        <div v-if="Object.keys(api).length > 0">
          <div
            :class="`generate-collapse-item--${api.method.toLowerCase()}`"
            style="border: none!important;max-width: 100%;overflow: hidden;"
          >
            <a-space>
              <a-tag style="color: #fff; font-weight: bold;">{{api.method.toUpperCase()}}</a-tag>
              <a-tooltip content="点击复制接口路径">
                <span @click.stop="handleCopyPath(api.path)" style="cursor: pointer">{{api.path}}</span>
              </a-tooltip>
              <small>
                <a-tooltip content="点击复制接口标题">
                  <strong @click.stop="handleCopyPath(api.label)" style="font-size: 16px;cursor: pointer">{{api.label}}</strong>
                </a-tooltip>
              </small>
            </a-space>
          </div>
          <div style="margin-top: 12px;">
            <a-space :size="30">
              <span>
                字段总数:
                <strong>{{selectFieldSchemaList.length}}</strong>
              </span>
              <span>
                校验成功:
                <template v-if="content.trim().length > 0">
                  <strong v-if="validateSuccessNum > 0" style="color: #23c343">{{validateSuccessNum}}</strong>
                  <strong v-else>{{validateSuccessNum}}</strong>
                </template>
                <template v-else>待校验</template>
              </span>
              <span>
                校验失败:
                <template v-if="content.trim().length > 0">
                  <strong v-if="validateErrorNum > 0" style="color: rgb(245,63,63)">{{validateErrorNum}}</strong>
                  <strong v-else>{{validateErrorNum}}</strong>
                </template>
                <template v-else>待校验</template>
              </span>
              <span>
                结果:
                <template v-if="content.trim().length > 0">
                  <strong v-if="validateErrorNum > 0" style="color: rgb(245,63,63)">不通过</strong>
                  <strong v-else style="color: #23c343">通过</strong>
                </template>
                <template v-else>待校验</template>
              </span>
            </a-space>
          </div>
          <div style="height: calc(100vh - 182px);overflow: auto; margin-top: 12px;">
            <div class="fields">
              <div
                v-for="item in selectFieldSchemaList"
                :key="item.id"
                class="field"
              >
                <div v-if="item && item.rules && item.rules.required" class="field--required">
                  <a-tooltip content="这是一个必填字段">
                    <icon-exclamation-circle-fill :size="20" :stroke-width="2" />
                  </a-tooltip>
                </div>
                <template v-if="item.status===1">
                  <div class="field-left">
                    <a-tooltip content="校验通过">
                      <div class="field-notice" style="color: #23c343">
                        <icon-check-circle :size="30" :stroke-width="2" />
                        <div>校验通过</div>
                      </div>
                    </a-tooltip>
                  </div>
                  <div class="field-right">
                    <div class="field-name">
                      <a-tooltip content="点击复制该字段">
                        <span @click.stop="handleCopyPath(item.keyName)">{{item.keyName}}</span>
                      </a-tooltip>
                    </div>
                    <div class="field-title">{{item.label}}</div>
                    <div class="field-value">
                      <a-tooltip content="点击复制该值">
                        <span @click.stop="handleCopyPath(item.sourceValue)" style="cursor: pointer;">值: {{item.value}}</span>
                      </a-tooltip>
                    </div>
                  </div>
                </template>
                <template v-else-if="item.status < 0">
                  <div class="field-left">
                    <a-tooltip :content="getErrorText(item.status)">
                      <div class="field-notice" style="color: rgb(245,63,63)">
                        <icon-close-circle :size="30"/>
                        <div>{{getErrorText(item.status)}}</div>
                      </div>
                    </a-tooltip>
                  </div>
                  <div class="field-right">
                    <div class="field-name">
                      <a-tooltip content="点击复制该字段">
                        <span @click.stop="handleCopyPath(item.keyName)">{{item.keyName}}</span>
                      </a-tooltip>
                    </div>
                    <div class="field-title">{{item.label}}</div>
                    <div class="field-value">值: {{item.value}}</div>
                  </div>
                </template>
                <template v-else>
                  <div class="field-left">
                    <a-tooltip content="等待校验">
                      <div class="field-notice">
                        <icon-clock-circle :size="30" :stroke-width="2" />
                        <div>等待校验</div>
                      </div>
                    </a-tooltip>
                  </div>
                  <div class="field-right">
                    <div class="field-name">
                      <a-tooltip content="点击复制该字段">
                        <span @click.stop="handleCopyPath(item.keyName)">{{item.keyName}}</span>
                      </a-tooltip>
                    </div>
                    <div class="field-title">{{item.label}}</div>
                    <div class="field-value">值: 未知</div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  watch,
  toRef,
  computed,
  PropType,
  nextTick,
  defineEmits,
  defineProps,
} from 'vue';
import qs from 'qs';
import { useRoute } from 'vue-router';
import { APIHelper } from '@api-helper/core/es/lib/types';
import { Message, SelectOptionGroup } from '@arco-design/web-vue';
import { treeForEach } from '@/utils/tree';
import useSchema from '@/hooks/use-schema';
import { checkType } from '@/utils';

const emit = defineEmits(['success', 'exec-gen']);

const props = defineProps({
  api: {
    type: Object as PropType<APIHelper.API>,
    default: () => ({}),
  },
});

const route = useRoute();
const {
  requestDataSchemaList,
  responseDataSchemaList,
  requestDataSchemaMap,
  responseDataSchemaMap,
} = useSchema(toRef(props, 'api'));

let timer: number;
const span = ref(12);
const gutter = ref(15);
const ctrlDrawerModelTemplateRef = ref();
const content = ref('');
const selectFields = ref<Array<string>>([]);
const selectFieldSchemaList = ref<Array<APIHelper.Schema & { status: number; value: any; sourceValue: any; }>>([]);
const fieldIdMap = ref<{[k: string]: APIHelper.API}>({});
const requestExpandedKeys = ref<string[]>([]);
const validateErrorNum = computed(() => selectFieldSchemaList.value.reduce((val, item) => {
  if (item.status === -1) {
    val++;
  }
  return val;
}, 0));

const validateSuccessNum = computed(() => selectFieldSchemaList.value.reduce((val, item) => {
  if (item.status === 1) {
    val++;
  }
  return val;
}, 0));

const options = ref({
  categoryList: [] as Array<SelectOptionGroup>,
});

const apiMap = ref<Map<string, APIHelper.API>>(new Map<string, APIHelper.API>());

watch(() => props.api, (api) => {
  nextTick(() => {
    selectFields.value = api.requestDataSchema?.params?.map?.((item) => item.id) ?? [];
  });
  fieldIdMap.value = {};
  treeForEach([api.requestDataSchema].filter(Boolean), (item: APIHelper.API) => {
    fieldIdMap.value[item.id] = item;
  }, 'params');
  matchFields();
}, { immediate: true });
watch(() => selectFields.value, (val) => {
  selectFieldSchemaList.value = val.map((id) => {
    const node = fieldIdMap.value[id] as unknown as APIHelper.Schema;
    if (checkType(node, 'Object') && node.type !== 'File' && node.keyName) {
      return {
        ...node,
        status: 0,
        value: '',
        sourceValue: '',
      };
    }
    return null;
  }).filter(Boolean) as any;
}, { immediate: true, deep: true });

function getErrorText(status: number) {
  switch (status) {
    case -2:
      return '必填项';
    default:
      return '缺少字段';
  }
}

function handleCopyPath(path: string) {
  if (path && typeof path === 'object') {
    path = JSON.stringify(path);
  }
  const textarea = document.createElement('textarea');
  textarea.value = path;
  document.body.appendChild(textarea);
  textarea.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
  }
  document.body.removeChild(textarea);
  Message.success('已复制到剪切板');
}

function matchFields() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    let entity = {};
    const text = content.value.trim();
    let hasInput = text.length > 0;
    if (text.length > 0) {
      try {
        entity = eval(`(${text})`);
        if (!checkType(entity, 'Object')) {
          hasInput = false;
          entity = {};
        }
      } catch (e) {
        hasInput = false;
        entity = {};
      }
      if (!hasInput) {
        try {
          entity = qs.parse(text, { allowPrototypes: true });
          console.log(entity);
          if (checkType(entity, 'Object')) {
            hasInput = true;
          } else {
            hasInput = false;
            entity = {};
          }
        } catch {
          hasInput = false;
          entity = {};
        }
      }
    }

    selectFieldSchemaList.value.forEach((item) => {
      if (!hasInput) {
        item.value = null;
        item.sourceValue = '';
        return item.status = 0;
      }
      let status = (item.keyName in entity) ? 1 : -1;
      if (status === 1) {
        const required = !!item?.rules?.required;
        const value = (entity as any)[item.keyName];
        if (checkType(value, 'Object')) {
          item.value = '[object Object]';
        } else if (checkType(value, 'Array')) {
          item.value = '[object Array]';
        } else if (checkType(value, 'Null')) {
          item.value = 'null';
        } else if (checkType(value, 'Undefined')) {
          item.value = 'undefined';
        } else if (typeof value === 'string') {
          item.value = `"${value}"`;
        } else {
          item.value = value;
        }
        if (required && (value === '' || value == null || (Array.isArray(value) && value.length === 0))) {
          status = -2;
        }
        item.sourceValue = value;
      } else {
        item.sourceValue = '';
        item.value = '未知';
      }
      item.status = status;
    });
  }, 200) as any;
}
</script>
<style lang="scss" scoped>
.fields{
  display: flex;
  flex-wrap: wrap;
  margin-top: -14px;

  > .field{
    border: 1px solid #dcdcdc;
    padding: 0 16px 0 12px;
    border-radius: 4px;
    min-width: 186px;
    display: flex;
    height: 82px;
    box-sizing: border-box;
    align-items: center;
    margin-right: 14px;
    margin-top: 14px;
    position: relative;
    >.field--required{
      position: absolute;
      left: 4px;
      top: 3px;
      color: rgb(245,63,63);
      z-index: 2;
    }
    .field-left{
      margin-right: 10px;
    }
    .field-right{}
    .field-name{
      font-weight: 600;
      font-size: 18px;
      color: #111;
      cursor: pointer;
    }
    .field-notice{
      width: 60px; display: flex;align-items: center;flex-direction: column;
      color: #86909c;
      >div:last-child{
        font-size: 12px;
      }
    }
    .field-title{
      color: #86909c;
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .field-value{
      color: #86909c;
      font-size: 12px;
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
