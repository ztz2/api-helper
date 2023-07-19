import type { Ref } from 'vue';
import { ref, isRef, watch } from 'vue';
import { cloneDeep, merge } from 'lodash';
import { FieldRule } from '@arco-design/web-vue';

import { assignDeep } from '@/utils';
import message from '@/utils/message';

type UseFormConfig<T> = {
  // 如果在模态框中，显示状态的切换，如果影藏状态，自动执行重置表单
  visible?: Ref<boolean>;

  // 表单校验规则
  rules?: { [propName: string]: Array<FieldRule> };

  // 外部传递过来的表单实体对象Ref，监听其变化，更新内部formModel，用于数据回显
  watchFormModel?: Ref<T>;

  // validate函数执行，校验失败提示消息，null或者false不提示
  validateFailMsg?: string | null | undefined | false;
};

export default function useForm<T extends object>(
  // 默认的表单模型数据
  defaultFormModel: T,
  // 可选的配置项，详情参考类型：UseFormConfig
  config?: UseFormConfig<T>,
) {
  const currentConfig = merge(
    {
      rules: {},
      validateFailMsg: '请完善表单数据',
    },
    config ?? {},
  ) as Required<UseFormConfig<T>>;

  const formRef = ref();
  const formModel = ref<T>(getDefaultFormModel());
  const formRules = ref(currentConfig.rules);

  function getDefaultFormModel() { // @ts-ignore
    // eslint-disable-next-line new-cap
    return typeof defaultFormModel === 'function' ? new defaultFormModel() : defaultFormModel;
  }

  function getReactiveFormModel() {
    return formModel;
  }

  function getFormModel() {
    return cloneDeep(formModel.value);
  }

  function setFormModel(value: T, original = false) {
    if (original) {
      formModel.value = value as any;
    } else {
      assignDeep(formModel, value);
    }
  }

  function clearValidate(field?: string | string[]) {
    formRef.value?.clearValidate?.(
      typeof field === 'string' || Array.isArray(field) ? field : undefined,
    );
  }

  function resetFields(field?: string | string[], original = true) {
    formRef.value?.resetFields?.(
      typeof field === 'string' || Array.isArray(field) ? field : undefined,
    );
    if (original) {
      setFormModel(typeof defaultFormModel === 'function' ? getDefaultFormModel() : cloneDeep(defaultFormModel));
    }
  }

  async function validate() {
    const error = await formRef.value?.validate?.();
    if (error) {
      if (currentConfig.validateFailMsg) {
        message.error(currentConfig.validateFailMsg as string);
      }
      return Promise.reject(error);
    }
    return getFormModel();
  }

  async function validateFields(field: string | string[]) {
    field = Array.isArray(field) ? field : [field];
    const error = await formRef.value?.validateFields?.(field);
    return error || undefined;
  }

  async function setFields(data: Recordable) {
    formRef.value?.setFields?.(data);
  }

  // 外部传递过来的表单实体对象Ref，监听其变化，更新内部formModel，用于数据回显
  if (isRef(currentConfig?.watchFormModel)) {
    let isFirst = true;
    watch(
      () => currentConfig.watchFormModel.value,
      (val: any) => {
        // 初次加载，必须有字段才会赋值
        if (isFirst) {
          isFirst = false;
          if (Object.keys(val).length > 0) {
            formModel.value = val;
          }
          return;
        }
        formModel.value = val;
      },
      {
        immediate: true,
      },
    );
  }

  // 影藏模态框，自动重置表单
  if (isRef(currentConfig?.visible)) {
    watch(
      () => currentConfig?.visible.value,
      (val) => {
        if (!val) {
          resetFields();
        }
      },
    );
  }

  return {
    formRef,
    formModel,
    formRules,

    validate,
    validateFields,
    setFields,
    resetFields,
    getFormModel,
    setFormModel,
    clearValidate,
    getReactiveFormModel,
  };
}
