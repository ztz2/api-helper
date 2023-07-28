export function getLabelUtil<T extends Recordable>(target: T, valueKey = ''): string {
  const keys = [valueKey, 'title', 'name', 'label'];
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      return target[key];
    }
  }
  return '';
}

export function getValueUtil<T extends Recordable>(target: T, valueKey = ''): string {
  const keys = [valueKey, 'id', 'key', 'value'];
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      return target[key];
    }
  }
  return '';
}
