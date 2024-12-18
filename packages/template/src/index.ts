import * as changeCase from 'change-case';
import * as utils from '@/lib/utils/util';
import artTemplate from '@/lib/art-template';
import type { ChangeCase } from '@/lib/types';
import formatCodeServer from '@/lib/utils/format-code-server';

import renderTemplate from '@/lib/render-template';
import { renderAllApi } from '@/lib/render-all-api';
import { renderClass, renderClassName } from '@/lib/render-class';
import { renderInterface, renderInterfaceName } from '@/lib/render-interface';
import { renderObject, renderComment, renderObjectName } from '@/lib/render-object';
import { renderRequestFunction, renderRequestFunctionName } from '@/lib/render-request-function';

export type { ChangeCase };
export {
  utils,
  artTemplate,
  changeCase,
  formatCodeServer,
  renderAllApi,
  renderClass,
  renderTemplate,
  renderClassName,
  renderInterface,
  renderInterfaceName,
  renderObject,
  renderComment,
  renderObjectName,
  renderRequestFunction,
  renderRequestFunctionName,
};
