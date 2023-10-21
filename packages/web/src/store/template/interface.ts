import { merge } from 'lodash';
import { checkType } from '@api-helper/core/lib/utils/util';
import type { SelectOptionData } from '@arco-design/web-vue';
import type { FormatCodeConfig } from '@api-helper/core/lib/interface';

export class Template implements SelectOptionData {
  // 模板名称
  title = '';
  // 唯一ID
  id = '';
  // 模板内容
  content = '';
  // 是否为内置模版
  builtIn = false;
  // 格式化代码的文件后缀名
  formatCodeExtension = '.ts' as FormatCodeConfig['formatCodeExtension'] | '';
  constructor(options?: Partial<Template>) {
    checkType(options, 'Object') && merge(this, options);
  }
}
