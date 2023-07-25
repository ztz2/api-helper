import { merge } from 'lodash';
import { nanoid } from 'nanoid';
import { Template, ExportFile } from '@api-helper/template';

// 分组
export class TemplateCategory {
  id = nanoid();
  label;
  isGroup = true;
  options = [] as Array<Template | ExportFile>;
  constructor(label: string, options?: Partial<TemplateCategory>) {
    if (options) {
      merge(this, options);
    }
    this.label = label;
  }
}
