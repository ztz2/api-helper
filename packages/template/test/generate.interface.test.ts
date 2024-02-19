import { join } from 'path';
import ParserSwagger from '@api-helper/core/es/lib/parser/parser-swagger';

import { readJsonFile } from './utils/file';
import { renderInterface } from '../src/lib/render-interface';

describe('生成 interface 测试', () => {
  test('open-api-响应参数为List', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api-response-array.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[0];
    const api = category.apiList[0];
    const responseCode = [
      renderInterface(api.requestDataSchema, api),
      renderInterface(api.responseDataSchema, api),
    ].join('\n');
    expect(
      responseCode,
    ).toMatchSnapshot('open-api-响应参数为List');
  });

  test('open-api-2.0-dot.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api-2.0-dot.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[0];
    const api = category.apiList[0];
    const responseCode = [
      renderInterface(api.requestDataSchema, api),
      renderInterface(api.responseDataSchema, api),
    ].join('\n');
    expect(
      responseCode,
    ).toMatchSnapshot('open-api-2.0-dot.json');
  });

  test('OpenAPI-2.0-source生成 interface 测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api-2.0-source.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[0];
    const api = category.apiList[0];
    const responseCode = renderInterface(api.responseDataSchema, api, {
      paramType: 'request',
      name: '安逗和黑子',
    });
    expect(
      responseCode,
    ).toMatchSnapshot('OpenAPI-2.0-source生成 interface 测试');
  });

  test('OpenAPI-2.0生成 interface 测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api-2.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[0];
    const responseCode = renderInterface(api.responseDataSchema, api, {
      paramType: 'request',
      name: '安逗和黑子',
    });
    expect(
      responseCode,
    ).toMatchSnapshot('OpenAPI-2.0生成 interface 测试');
  });

  test('OpenAPI-3.0生成 interface 测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api-3.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[1];
    const responseCode = renderInterface(api.requestDataSchema, api, {
      paramType: 'response',
    });
    expect(
      responseCode,
    ).toMatchSnapshot('OpenAPI-3.0生成 interface 测试');
  });

  test('name - prefix - dropComment - onlyBody 属性测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api-2.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[0];
    expect(
      renderInterface(api.responseDataSchema, api, {
        paramType: 'request',
        name: '自定义名称',
      }),
    ).toMatchSnapshot('OpenAPI-2.0生成 interface - name属性测试');
    expect(
      renderInterface(api.responseDataSchema, api, {
        paramType: 'request',
        prefix: '',
      }),
    ).toMatchSnapshot('OpenAPI-2.0生成 interface - prefix属性测试');
    expect(
      renderInterface(api.responseDataSchema, api, {
        paramType: 'request',
        dropComment: true,
      }),
    ).toMatchSnapshot('OpenAPI-2.0生成 interface - dropComment属性测试');
    expect(
      renderInterface([{ "id":"db90e419-44ff-4ea9-95e1-c68f00b78273","type":"string","keyName":"phone","title":"","description":"手机号","label":"手机号","rules":{ "required":true },"examples":[],"params":[],"enum":[] },{ "id":"919d1555-82af-4b01-b4b4-4e16062a0a42","type":"string","keyName":"username","title":"","description":"账户名","label":"账户名","rules":{ "required":true },"examples":[],"params":[],"enum":[] }], api, {
        prefix: '',
        name: 'RuleForm',
        onlyBody: true,
      }),
    ).toMatchSnapshot('OpenAPI-2.0生成 interface - onlyBody属性测试');
  });
});
