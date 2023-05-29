import { join } from 'path';

import { readJsonFile } from './utils/file';
import { ParserOpenAPI } from '../';

describe('parser', () => {
  test('OpenAPI-2.0文档解析转换测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-2.0.json'));
    const ahDocumentList = await new ParserOpenAPI(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('OpenAPI-3.0文档解析转换测试');
  });
  test('OpenAPI-3.0文档解析转换测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-3.0.json'));
    const ahDocumentList = await new ParserOpenAPI(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('OpenAPI-3.0文档解析转换测试');
  });
  // test('swaggerApi.json文档解析转换测试', async () => {
  //   const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/swaggerApi.json'));
  //   const ahDocumentList = await new ParserOpenAPI(false).parser([openAPIDocumentJSON]);
  //   const ahDocument = ahDocumentList[0];
  //   expect(ahDocument).toMatchSnapshot('OpenAPI-3.0文档解析转换测试');
  // });
});
