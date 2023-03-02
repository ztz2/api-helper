import { join } from 'path';

import { ParserOpenAPI } from '../src';
import { generateRequestFunc } from '../src';
import { readJsonFile } from './utils/file';

describe('生成接口函数测试', () => {
  test('OpenAPI-2.0生成接口函数测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-2.0.json'));
    const openAPIDocumentList = await new ParserOpenAPI(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const codeBox: string[] = [];
    for (const api of category.apiList) {
      codeBox.push(generateRequestFunc(api));
    }
    expect(
      codeBox.join('\n'),
    ).toMatchSnapshot('OpenAPI-2.0生成接口函数测试');
  });

  test('OpenAPI-3.0生成接口函数测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-3.0.json'));
    const openAPIDocumentList = await new ParserOpenAPI(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const codeBox: string[] = [];
    for (const api of category.apiList) {
      codeBox.push(generateRequestFunc(api));
    }
    expect(
      codeBox.join('\n'),
    ).toMatchSnapshot('OpenAPI-3.0生成接口函数测试');
  });
});
