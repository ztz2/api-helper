import { join } from 'path';
import ParserSwagger from '@api-helper/core/es/lib/parser/parser-swagger';

import { readJsonFile } from './utils/file';
import { renderInterface } from '../src/lib/render-interface';

describe('生成 interface 测试', () => {
  test('OpenAPI-2.0生成 interface 测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-2.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[0];
    const responseCode = renderInterface(api.responseDataSchema, api, {
      paramType: 'request'
    });
    expect(
      responseCode,
    ).toMatchSnapshot('OpenAPI-2.0生成 interface 测试');
  });

  test('OpenAPI-3.0生成 interface 测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-3.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[1];
    const responseCode = renderInterface(api.requestDataSchema, api, {
      paramType: 'response'
    });
    expect(
      responseCode,
    ).toMatchSnapshot('OpenAPI-3.0生成 interface 测试');
  });
});
