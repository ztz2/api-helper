import { join } from 'path';

import { ParserSwagger } from '../src';
import { readJsonFile } from './utils/file';


describe('swagger-parser', () => {
  test('OpenAPI-2.0文档解析转换测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-2.0.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('OpenAPI-3.0文档解析转换测试');
  });
  test('OpenAPI-3.0文档解析转换测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-3.0.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('OpenAPI-3.0文档解析转换测试');
  });
  test('OpenAPI-3.0.1文档解析转换测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-3.0.1.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('OpenAPI-3.1文档解析转换测试');
  });
});
