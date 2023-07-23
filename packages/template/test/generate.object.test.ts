import { join } from 'path';
import { APIHelper } from '@api-helper/core/es/lib/types';
import ParserSwagger from '@api-helper/core/es/lib/parser/parser-swagger';
import { filterSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';

import { readJsonFile } from './utils/file';
import { renderObject } from '../src/lib/render-object';

describe('生成 javascript 对象测试', () => {
  test('OpenAPI-2.0生成对象测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-2.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[0];
    const schemaList = filterSchemaPrimitiveValue(api.responseDataSchema?.params ? (api.responseDataSchema.params) : []) as APIHelper.SchemaList;
    const code = renderObject(schemaList, api, {
      paramType: 'request',
      onlyBody: true
    });
    expect(
      code,
    ).toMatchSnapshot('OpenAPI-2.0生成 interface 测试');
  });

  test('OpenAPI-3.0生成对象测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-3.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[1];
    const schemaList = filterSchemaPrimitiveValue(api.requestDataSchema?.params ? (api.requestDataSchema.params) : []) as APIHelper.SchemaList;
    const code = renderObject(schemaList, api, {
      paramType: 'response'
    });
    expect(
      code,
    ).toMatchSnapshot('OpenAPI-3.00生成对象测试');
  });

  test('name - prefix - dropComment - onlyBody 属性测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-2.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[0];
    const schemaList = filterSchemaPrimitiveValue(api.responseDataSchema?.params ? (api.responseDataSchema.params) : []) as APIHelper.SchemaList;
    expect(
      renderObject(schemaList, api, {
        paramType: 'request',
        name: '自定义名称'
      }),
    ).toMatchSnapshot('OpenAPI-2.0生成 对象 name测试');
    expect(
      renderObject(schemaList, api, {
        paramType: 'request',
        prefix: 'export'
      }),
    ).toMatchSnapshot('OpenAPI-2.0生成 对象 prefix测试');
    expect(
      renderObject(schemaList, api, {
        paramType: 'request',
        dropComment: true
      }),
    ).toMatchSnapshot('OpenAPI-2.0生成 对象 dropComment测试');
    expect(
      renderObject(schemaList, api, {
        paramType: 'request',
        onlyBody: true
      }),
    ).toMatchSnapshot('OpenAPI-2.0生成 对象 onlyBody测试');
  });

  test('空属性', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-2.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[0];
    expect(
      renderObject(null, api),
    ).toMatchSnapshot('OpenAPI-2.0生成 对象 null 属性');
    expect(
      renderObject([], api),
    ).toMatchSnapshot('OpenAPI-2.0生成 对象 空数组');
  });
});
