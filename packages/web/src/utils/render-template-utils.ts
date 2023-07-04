import * as apiht from '@api-helper/template';
import { getSchema } from '@api-helper/core/lib/helpers';

export { checkType } from '@/utils';

export const apihTemplate = {
  ...apiht,
  getSchema,
};
