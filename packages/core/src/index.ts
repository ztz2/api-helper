import type {
  APIHelper,
  ReturnType,
} from './lib/types';

import * as utils from './lib/utils';
import ParserYapi from './lib/parser/parser-yapi';
import ParserSwagger from './lib/parser/parser-swagger';
import { PrettierOptions, FormatCodeConfig } from './lib/interface';

import {
  isSchemaObject,
  getErrorMessage,
  isSchemaPrimitiveValue,
  filterSchemaRoot,
  filterSchemaRequired,
  filterSchemaPrimitiveValue,
  randomChar,
} from './lib/utils/util';

import {
  getSchema,
  createDocument,
  createCategory,
  createApi,
  createSchema,
  transformType,
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
  FormatCodeConfig,
}

export {
  utils,
  getSchema,
  ParserYapi,
  ParserSwagger,
  isSchemaObject,
  getErrorMessage,
  createDocument,
  createCategory,
  randomChar,
  createApi,
  createSchema,
  transformType,
  isSchemaPrimitiveValue,
  filterSchemaPrimitiveValue,
  filterSchemaRoot,
  filterSchemaRequired,
  PrettierOptions,
}
