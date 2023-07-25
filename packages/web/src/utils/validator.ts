import { get } from 'lodash';
import { useProject } from '@/store';

export function validatorProjectConfig(keyName: string, value: unknown, callback: Function) {
  const { currentProject } = useProject();
  if (!get(currentProject, keyName)) {
    return callback('必选项');
  }
  callback();
}

export function validatorObject(object: Recordable, keyName: string, message: string, value: unknown, callback: Function) {
  if (!get(object, keyName)) {
    return callback(message);
  }
  callback();
}
