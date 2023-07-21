import { join } from 'path';
import { APIHelper } from '@api-helper/core/es/lib/types';
import ParserSwagger from '@api-helper/core/es/lib/parser/parser-swagger';
import { filterSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';

import { readJsonFile } from './utils/file';
import { renderObject } from '../src/lib/render-object';

describe('生成 Map 对象测试', () => {
  test('OpenAPI-2.0生成Map对象测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-2.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[0];
    const schemaList = filterSchemaPrimitiveValue(api.responseDataSchema?.params ? (api.responseDataSchema.params as APIHelper.SchemaList) : []);
    const code = renderObject(schemaList, api, {
      paramType: 'request',
      onlyMap: true
    });
    expect(
      code,
    ).toMatchSnapshot('OpenAPI-2.0生成 interface 测试');
  });

  test('OpenAPI-3.0生成Map对象测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-3.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[1];
    const schemaList = filterSchemaPrimitiveValue(api.requestDataSchema?.params ? (api.requestDataSchema.params as APIHelper.SchemaList) : []);
    const code = renderObject(schemaList, api, {
      paramType: 'response'
    });
    expect(
      code,
    ).toMatchSnapshot('OpenAPI-3.00生成Map对象测试');
  });
});
