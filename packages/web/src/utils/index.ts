import { isRef } from 'vue';
import md5 from 'crypto-js/md5';
import { cloneDeep } from 'lodash';
import { Modal, ModalConfig } from '@arco-design/web-vue';
import { APIHelper } from '@api-helper/core/es/lib/types';
import { Template, TemplateCategory } from '@/store/template/interface';

export const checkType = (value: any, target: string) => Object.prototype.toString.call(value) === `[object ${target}]`;

export function confirm(content: string, fn: () => void, title = '提示') {
  Modal.open({
    title,
    content,
    simple: false,
    onOk: () => {
      fn();
    },
  });
}

export function getMethodRgbaColor(method: HttpMethod = 'GET', alpha = 1) {
  const upc = method.toUpperCase() as HttpMethod;
  const emptyColor = 'rgb(22, 140, 255)';
  const color: Record<HttpMethod, string> = {
    GET: 'rgb(97, 175, 254)',
    POST: 'rgb(73, 204, 144)',
    PUT: 'rgb(252, 161, 48)',
    DELETE: 'rgb(249, 62, 62)',
    OPTIONS: 'rgb(15, 198, 194)',
    HEAD: 'rgb(183, 29, 232)',
    CONNECT: 'rgb(255, 87, 34)',
    TRACE: 'rgb(120, 22, 255)',
    PATCH: 'rgb(134, 144, 156)',
  };
  const value = color[upc] ? color[upc] : emptyColor;
  return `${value.slice(0, value.length - 1)}, ${alpha})`;
}

export function modalConfirm(modalConfig: ModalConfig | string) {
  return new Promise((resolve, reject) => {
    const defaultConfig = {
      title: '提示',
      simple: false,
    };

    const config = typeof modalConfig === 'string' ? {
      content: modalConfig,
    } : modalConfig;

    Modal.open({
      ...defaultConfig,
      ...config,
      onOk: () => {
        config?.onOk?.();
        resolve(true);
      },
      onClose() {
        config?.onClose?.();
        reject();
      },
    });
  });
}

export function assignDeep<T>(
  target: T,
  ...copyItemList: Array<{ [propName: string]: any }>
): T {
  copyItemList.forEach((obj) => {
    if (!checkType(obj, 'Object')) {
      return;
    }
    for (const [k, v] of Object.entries(cloneDeep(obj))) {
      if (isRef(target)) {
        // @ts-ignore
        target.value[k] = v;
      } else {
        // @ts-ignore
        target[k] = v;
      }
    }
  });
  return target;
}

export function getTemplateList(templateList: Array<TemplateCategory>): Template[] {
  const result = [];
  for (let j = 0; j < templateList.length; j++) {
    for (let i = 0; i < templateList[j].options.length; i++) {
      result.push(templateList[j].options[i]);
    }
  }
  return result;
}

export const noop = () => undefined;

export function randomChar(size = 4) {
  const str = md5(Date.now().toString()).toString();
  size = Number.parseInt((size > str.length ? str.length : size < 1 ? 1 : size) as unknown as string, 10);
  return str.slice(str.length - size);
}
