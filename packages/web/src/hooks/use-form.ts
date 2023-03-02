import type { Ref } from 'vue';
import { ref, isRef, watch } from 'vue';
import { cloneDeep, merge } from 'lodash';
import { Message, FieldRule } from '@arco-design/web-vue';

import { assignDeep } from '@/utils';

type UseFormConfig<T> = {
  // 表单校验规则
  rules?: { [propName: string]: Array<FieldRule> };

  // 外部传递过来的表单实体对象Ref，监听其变化，更新内部formModel，用于数据回显
  watchFormModel?: Ref<T>;
  // 是否深度监听表单数据
  watchFormModelDeep?: boolean;
  // 是否立即监听表单数据
  watchFormModelImmediate?: boolean;

  // validate函数执行，校验失败提示消息，null或者false不提示
  validateFailMsg?: string | null | undefined | false;
};
export function useForm<T extends object>(
  // 默认的表单模型数据
  defaultFormModel: T,
  // 可选的配置项，详情参考类型：UseFormConfig
  config?: UseFormConfig<T>
) {
  const currentConfig = merge(
    {
      rules: {},

      watchFormModelDeep: false,
      watchFormModelImmediate: false,

      validateFailMsg: '请完善表单数据'
    },
    config ?? {}
  ) as Required<UseFormConfig<T>>;

  const formRef = ref();
  const formModel = ref<T>(defaultFormModel);
  const formRules = ref(currentConfig.rules);
  const resourceFormModel = cloneDeep(defaultFormModel);

  function getReactiveFormModel() {
    return formModel;
  }

  function getFormModel() {
    return cloneDeep(formModel.value);
  }

  function setFormModel(value: T) {
    assignDeep(formModel, value);
  }

  function clearValidate(field: string | string[]) {
    formRef.value?.clearValidate?.(
      typeof field === 'string' || Array.isArray(field) ? field : undefined
    );
  }

  function resetFields(field: string | string[]) {
    formRef.value?.resetFields?.(
      typeof field === 'string' || Array.isArray(field) ? field : undefined
    );
  }

  async function validate() {
    const error = await formRef.value?.validate?.();
    if (error) {
      if (currentConfig.validateFailMsg) {
        Message.error(currentConfig.validateFailMsg as string);
      }
      return Promise.reject(error);
    }
    return getFormModel();
  }

  async function validateField(field: string | string[]) {
    const error = await formRef.value?.validateField?.(field);
    return error ? error : undefined;
  }

  async function setFields(data: Recordable) {
    formRef.value?.setFields?.(data);
  }

  // 外部传递过来的表单实体对象Ref，监听其变化，更新内部formModel，用于数据回显
  if (isRef(currentConfig?.watchFormModel)) {
    watch(
      () => currentConfig.watchFormModel.value,
      (val) => {
        formModel.value = merge(cloneDeep(resourceFormModel), cloneDeep(val));
      },
      {
        deep: currentConfig.watchFormModelDeep,
        immediate: currentConfig.watchFormModelImmediate
      }
    );
  }

  return {
    formRef,
    formModel,
    formRules,

    validate,
    validateField,
    setFields,
    resetFields,
    getFormModel,
    setFormModel,
    clearValidate,
    getReactiveFormModel
  };
}
