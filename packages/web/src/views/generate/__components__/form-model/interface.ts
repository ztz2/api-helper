import { APIHelper } from '@api-helper/core/es';

export class FormModel {
  api = {} as APIHelper.API;
  apiId = '';
  requestDataSchemaList = [] as APIHelper.SchemaList
  requestDataSchemaIdList = [] as string[]
  responseDataSchemaList = [] as APIHelper.SchemaList
  responseDataSchemaIdList = [] as string[]
  constructor(options?: Partial<FormModel>) {
    if (options) {
      for (const [key, value] of Object.entries(options)) {
        if (key in this) { // @ts-ignore
          this[key] = value;
        }
      }
    }
  }
}
