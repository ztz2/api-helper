import { get } from 'lodash';
import { useDocumentConfig } from '@/store';

export function validatorProjectConfig(keyName: string, value: unknown, callback: Function) {
  const { currentDocumentConfig } = useDocumentConfig();
  if (!get(currentDocumentConfig, keyName)) {
    return callback('必选项');
  }
  callback();
}

export function validatorObject(object: Recordable, keyName: string, message: string, value: unknown, callback: Function) {
  const val = get(object, keyName);
  if (val == null || val === '' || val?.trim?.() === '') {
    return callback(message);
  }
  callback();
}
