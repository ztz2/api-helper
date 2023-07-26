import { merge } from 'lodash';
import { nanoid } from 'nanoid';
import type {
  SelectOptionGroup as ISelectOptionGroup,
  SelectOptionData as ISelectOptionData,
} from '@arco-design/web-vue';

export default class SelectOptionGroup implements ISelectOptionGroup {
  id = nanoid();
  label = '';
  isGroup = true as const;
  options: Array<ISelectOptionData> = [];
  constructor(label: string, options?: Partial<SelectOptionGroup>) {
    if (options) {
      merge(this, options);
    }
    this.label = label;
  }
}
