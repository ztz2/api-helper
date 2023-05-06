import { join } from 'path';

import { readJsonFile } from './utils/file';
import { APIHelper } from '../src/lib/types';
import { filterSchema } from '../src/lib/utils/util';
import { generateMap } from '../src/lib/generate';
import { ParserOpenAPI } from '../src/lib/parser';

describe('生成 Map 对象测试', () => {
  test('OpenAPI-2.0生成Map对象测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-2.0.json'));
    const openAPIDocumentList = await new ParserOpenAPI(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[0];
    const schemaList = filterSchema(api.responseDataSchema?.params ? (api.responseDataSchema.params as APIHelper.SchemaList) : []);
    const code = generateMap(schemaList, api, {
      paramType: 'request',
      onlyMap: true
    });
    expect(
      code,
    ).toMatchSnapshot('OpenAPI-2.0生成 interface 测试');
  });

  test('OpenAPI-3.0生成Map对象测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-3.0.json'));
    const openAPIDocumentList = await new ParserOpenAPI(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[1];
    const schemaList = filterSchema(api.requestDataSchema?.params ? (api.requestDataSchema.params as APIHelper.SchemaList) : []);
    const code = generateMap(schemaList, api, {
      paramType: 'response'
    });
    expect(
      code,
    ).toMatchSnapshot('OpenAPI-3.00生成Map对象测试');
  });
});