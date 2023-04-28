import { join } from 'path';

import { readJsonFile } from './utils/file';
import { APIHelper } from '../src/lib/types';
import { filterSchema } from '../src/lib/utils/util';
import { ParserOpenAPI } from '../src/lib/parser';
import { generateClass } from '../src/lib/generate';


describe('生成 Class 类测试', () => {
  test('OpenAPI-2.0生成 Class 类测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-2.0.json'));
    const openAPIDocumentList = await new ParserOpenAPI(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[0];
    const schemaList = filterSchema(api.responseDataSchema?.params ? (api.responseDataSchema.params as APIHelper.SchemaList) : []);
    const code = generateClass(schemaList, api, {
      paramType: 'request'
    });
    expect(
      code,
    ).toMatchSnapshot('OpenAPI-2.0生成 Class 类测试');
  });

  test('OpenAPI-3.0生成 Class 类测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-3.0.json'));
    const openAPIDocumentList = await new ParserOpenAPI(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[1];
    const schemaList = filterSchema(api.requestDataSchema?.params ? (api.requestDataSchema.params as APIHelper.SchemaList) : []);
    const code = generateClass(schemaList, api, {
      paramType: 'response'
    });
    expect(
      code,
    ).toMatchSnapshot('OpenAPI-3.00生成 Class 类测试');
  });
});
