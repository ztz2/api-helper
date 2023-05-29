import type {
  FormDataItem,
  RequestFunctionConfig,
  RequestFunctionRestArgsType,
} from './lib/helpers';

import type {
  APIHelper,
  ReturnType,
} from './lib/types';

import * as utils from './lib/utils';
import ParserOpenAPI from './lib/parser/parser-open-api';

import {
  getSchema,
  processRequestFunctionConfig
} from './lib/helpers';

if (typeof window === 'object' && window != null && !window.process) {
  window.process = {
    cwd: function () {
      return ''
    }
  } as never;
}

export type {
  APIHelper,
  ReturnType,
  FormDataItem,
  RequestFunctionConfig,
  RequestFunctionRestArgsType
}

export {
  utils,
  getSchema,
  ParserOpenAPI,
  processRequestFunctionConfig
}
