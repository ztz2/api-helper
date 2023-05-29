import template from '@/lib/template';
import * as changeCase from 'change-case';
import formatCode from '@/lib/utils/prettier';
import { renderAllApi } from '@/lib/render-all-api';
import { renderClass, renderClassName } from '@/lib/render-class';
import { renderInterface, renderInterfaceName } from '@/lib/render-interface';
import { renderObject, renderObjectComment, renderObjectName } from '@/lib/render-object';
import { renderRequestFunction, renderRequestFunctionName } from '@/lib/render-request-function';

export {
  template,
  changeCase,
  formatCode,
  renderAllApi,
  renderClass, renderClassName,
  renderInterface, renderInterfaceName,
  renderObject, renderObjectComment, renderObjectName,
  renderRequestFunction, renderRequestFunctionName
};
