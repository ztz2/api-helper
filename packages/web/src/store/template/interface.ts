import { nanoid } from 'nanoid';
import { FormatCodeConfig } from '@api-helper/cli/lib/tools/format-code';
import { merge } from 'lodash';

export class Template {
  // 模板名称
  label = '';
  // 唯一ID
  value = '';
  // 模板内容
  content = '';
  // 是否为内置模版
  builtIn = false;
  // 格式化代码的文件后缀名
  formatCodeExtension = '.ts' as FormatCodeConfig['formatCodeExtension'] | '';
  constructor(params?: Partial<Template>) {
    if (params) {
      this.label = params.label ?? '';
      this.value = params.value ?? nanoid();
      this.content = params.content ?? '';
      this.builtIn = params.builtIn ?? false;
      this.formatCodeExtension = params.formatCodeExtension ?? '.ts';
    }
  }
}

// 分组
export class TemplateCategory {
  id = nanoid();
  label;
  isGroup = true;
  options = [] as Array<Template>;
  constructor(label: string, options?: Partial<TemplateCategory>) {
    if (options) {
      for (const key in options) { // @ts-ignore
        this[key] = options[key];
      }
    }
    this.label = label;
  }
}
