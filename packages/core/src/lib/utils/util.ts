import { v4 as uuidv4 } from 'uuid';
import { APIHelper } from '../types';
import cloneDeep from 'lodash/cloneDeep';

export function checkType<T>(value: T, type: string): boolean{
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}

export function filterEmpty(value: any) {
  return (value !== '' && value != null) ? value : '';
}

export function Try<T>(fn: () => T, err: (e: Error) => any): T {
  try {
    return fn()
  } catch (e) {
    return err(e as Error)
  }
}

export function arrayUniquePush(array: Array<any>, item: any) {
  if (!array.includes(item)) {
    array.push(item);
  }
  return array.length;
}

export function randomId() {
  return uuidv4();
}

// 过滤 keyName 为空的数据，并且合并 array<object>
export function filterSchema(schemaList: APIHelper.Schema[], deepClone = false): APIHelper.Schema[] {
  if (deepClone) {
    schemaList = cloneDeep(schemaList);
  }
  return schemaList;
}
