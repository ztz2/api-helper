import * as template from '@api-helper/template';
import { getSchema } from '@api-helper/core/lib/helpers';
import {
  isSchemaPrimitiveValue,
  filterSchemaPrimitiveValue,
} from '@api-helper/core/lib/utils/util';

export { checkType } from '@/utils';

export default {
  template,
  core: {
    getSchema,
    isSchemaPrimitiveValue,
    filterSchemaPrimitiveValue,
  },
};
