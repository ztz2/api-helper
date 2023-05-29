import { APIHelper } from './types';

export const LINE_FEED_CODE = String.fromCharCode(57344);
export const COMMENT_START_CODE = String.fromCharCode(57345);
export const COMMENT_END_CODE = String.fromCharCode(57346);
export const TS_TYPE: APIHelper.SchemaType[] = [
  'string',
  'number',
  'object',
  'array',
  'boolean',
  'null',
  'any',
  'unknown',
];
