import { join } from 'path';
import ParserSwagger from '@api-helper/core/es/lib/parser/parser-swagger';

import { readJsonFile } from './utils/file';
import { renderRequestFunction } from '../src/lib/render-request-function';

describe('生成接口函数测试', () => {
  test('OpenAPI-2.0生成接口函数测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api/v2.0/petstore.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const codeBox: string[] = [];
    for (const api of category.apiList) {
      codeBox.push(renderRequestFunction(api));
    }
    expect(
      codeBox.join('\n'),
    ).toMatchSnapshot('OpenAPI-2.0生成接口函数测试');
  });

  test('生成 header', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api/v2.0/header-param.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[0];
    const codeBox: string[] = [];
    for (const api of category.apiList) {
      codeBox.push(renderRequestFunction(api, { genHeaders: true }));
    }
    expect(
      codeBox.join('\n'),
    ).toMatchSnapshot('header-param.json');
  });
  test('生成 cookie', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api/v2.0/cookie-param.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[0];
    const codeBox: string[] = [];
    for (const api of category.apiList) {
      codeBox.push(renderRequestFunction(api, { genCookies: true }));
    }
    expect(
      codeBox.join('\n'),
    ).toMatchSnapshot('header-param.json');
  });
  test('生成 content-type', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api/v2.0/query-param.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[0];
    const codeBox: string[] = [];
    for (const api of category.apiList) {
      codeBox.push(renderRequestFunction(api, { genRequestContentType: true, genResponseContentType: true }));
    }
    expect(
      codeBox.join('\n'),
    ).toMatchSnapshot('header-param.json');
  });

  test('OpenAPI-3.0生成接口函数测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api/v3.0/petstore.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const codeBox: string[] = [];
    for (const api of category.apiList) {
      codeBox.push(renderRequestFunction(api));
    }
    expect(
      codeBox.join('\n'),
    ).toMatchSnapshot('OpenAPI-3.0生成接口函数测试');
  });
});
