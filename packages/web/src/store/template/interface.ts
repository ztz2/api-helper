import { nanoid } from 'nanoid';
import { FormatCodeConfig } from '@api-helper/cli/lib/tools/format-code';

export class Template {
  // 模板名称
  value = '';
  // 唯一ID
  label = '';
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
  constructor(label: string, options?: Array<Template> | string) {
    this.label = label;
    if (typeof options === 'string') {
      this.id = options;
    } else if (Array.isArray(options)) {
      this.options = options;
    }
  }
}
