import { v4 as uuidv4 } from 'uuid';

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
