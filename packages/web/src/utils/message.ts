import { merge } from 'lodash';

import { Message, MessageConfig } from '@arco-design/web-vue';

import UniqueTask from '@/utils/unique-task';

type ModelFuncHook = null | undefined | Function;
type ModelFuncType = 'success' | 'error' | 'info' | 'warning' | 'warn' | 'loading';

const defaultConfig = {};

const uniqueTask = new UniqueTask(500);

const message = {
  success: (config: MessageConfig | string, onClick?: ModelFuncHook, onClose?: ModelFuncHook) => _message(config, 'success', onClick, onClose),
  error: (config: MessageConfig | string, onClick?: ModelFuncHook, onClose?: ModelFuncHook) => _message(config, 'error', onClick, onClose),
  info: (config: MessageConfig | string, onClick?: ModelFuncHook, onClose?: ModelFuncHook) => _message(config, 'info', onClick, onClose),
  warning: (config: MessageConfig | string, onClick?: ModelFuncHook, onClose?: ModelFuncHook) => _message(config, 'warning', onClick, onClose),
  warn: (config: MessageConfig | string, onClick?: ModelFuncHook, onClose?: ModelFuncHook) => _message(config, 'warn', onClick, onClose),
  loading: (config: MessageConfig | string, onClick?: ModelFuncHook, onClose?: ModelFuncHook) => _message(config, 'loading', onClick, onClose),
};

export default message;

function _message(config: MessageConfig | string, type: ModelFuncType, onClick: ModelFuncHook, onClose: ModelFuncHook): any {
  type = type === 'warn' ? 'warning' : type;
  let mergeConfig = {
    content: undefined as unknown,
    onClick: undefined as unknown,
    onClose: undefined as unknown,
    class: 'z-message',
  };

  if (typeof config === 'function' || typeof config === 'string' || '__v_isVNode' in config) {
    mergeConfig.content = config;
  } else if (Object.prototype.toString.call(config) === '[object Object]') {
    mergeConfig = config as unknown as typeof mergeConfig;
  }
  if (typeof onClick === 'function') {
    mergeConfig.onClick = onClick;
  }
  if (typeof onClose === 'function') {
    mergeConfig.onClose = onClose;
  }
  const currentConfig = merge(defaultConfig, mergeConfig) as MessageConfig;

  uniqueTask.dispatch(type, currentConfig.content, (closeTask: () => void) => {
    // 'success' | 'error' | 'info' | 'warning' | 'warn' | 'loading';
    const api = type === 'success'
      ? Message.success : type === 'error'
        ? Message.error : type === 'warning'
          ? Message.warning : type === 'loading'
            ? Message.loading : Message.info;

    const { onClose: _onClose } = currentConfig;

    currentConfig.onClose = function c() {
      closeTask();
      _onClose?.(1);
    } as any;

    api(currentConfig as any);
  });
}
