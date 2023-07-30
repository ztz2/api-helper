import { merge } from 'lodash';
import type {
  SelectOptionGroup as ISelectOptionGroup,
  SelectOptionData as ISelectOptionData,
} from '@arco-design/web-vue';
import { randomChar } from '@api-helper/core/lib/utils/util';

export default class SelectOptionGroup implements ISelectOptionGroup {
  id = randomChar();
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
