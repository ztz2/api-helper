import { isRef } from 'vue';
import md5 from 'crypto-js/md5';
import { cloneDeep } from 'lodash';
import {
  Modal,
  ModalConfig,
  SelectOptionData,
} from '@arco-design/web-vue';

import { aes } from './crypto';
import SelectOptionGroup from '@/constants/select-option-group';

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

export function getSelectOptionList(selectOptionGroup: Array<SelectOptionGroup>): Array<SelectOptionData> {
  const result = [];
  for (let j = 0; j < selectOptionGroup.length; j++) {
    for (let i = 0; i < selectOptionGroup[j].options.length; i++) {
      result.push(selectOptionGroup[j].options[i]);
    }
  }
  return result;
}

export const noop = () => undefined;

export function log(...args: any) {
  const console = aes.decrypt(aes.encrypt('console', 'console'), 'console');
  // @ts-ignore
  window[console]?.log?.apply(window[console]?.log, args);
}

export function isWindowsSystem() {
  return /windows|win32|win64|wow32|wow64/g.test(navigator.userAgent.toLowerCase());
}

export function toUnixPath(path: string) {
  return path.replace(/[/\\]+/g, '/');
}
