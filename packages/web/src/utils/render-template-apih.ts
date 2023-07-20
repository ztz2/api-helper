import * as template from '@api-helper/template';
import { getSchema } from '@api-helper/core/lib/helpers';

export { checkType } from '@/utils';

export default {
  template,
  core: {
    getSchema,
  },
};
