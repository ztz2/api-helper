import { join } from 'path';
import { APIHelper } from '@api-helper/core';
import ParserSwagger from '@api-helper/core/es/lib/parser/parser-swagger';
import { filterSchemaPrimitiveValue } from '@api-helper/core/lib/utils/util';

import { readJsonFile } from './utils/file';
import { renderClass } from '../src/lib/render-class';

describe('生成 Class 类测试', () => {
  test('OpenAPI-2.0生成 Class 类测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api-2.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[0];
    const schemaList = filterSchemaPrimitiveValue<APIHelper.Schema>(api.responseDataSchema);
    const code = renderClass(schemaList, api, {
      paramType: 'request'
    });
    expect(
      code,
    ).toMatchSnapshot('OpenAPI-2.0生成 Class 类测试');
  });

  test('OpenAPI-3.0生成 Class 类测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api-3.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[1];
    const schemaList = filterSchemaPrimitiveValue<APIHelper.Schema>(api.requestDataSchema);
    const code = renderClass(schemaList, api, {
      paramType: 'response'
    });
    expect(
      code,
    ).toMatchSnapshot('OpenAPI-3.00生成 Class 类测试');
  });
  test('空属性', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api-2.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[0];

    expect(
      renderClass(null, api),
    ).toMatchSnapshot('OpenAPI-2.0生成 Class null测试');
    expect(
      renderClass([], api),
    ).toMatchSnapshot('OpenAPI-2.0生成 Class 空数组测试');
  });
  test('name - prefix - dropComment - onlyBody 属性测试', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api-2.0.json'));
    const openAPIDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const openAPIDocument = openAPIDocumentList[0];
    const category = openAPIDocument.categoryList[1];
    const api = category.apiList[0];
    const schema = filterSchemaPrimitiveValue(api.responseDataSchema) as APIHelper.Schema;
    expect(
      renderClass(schema, api, {
        paramType: 'request',
        name: '自定义名称',
      }),
    ).toMatchSnapshot('OpenAPI-2.0生成 Class name属性测试');
    expect(
      renderClass(schema, api, {
        paramType: 'request',
        prefix: 'export',
      }),
    ).toMatchSnapshot('OpenAPI-2.0生成 Class prefix属性测试');
    expect(
      renderClass(schema, api, {
        paramType: 'request',
        dropComment: true,
      }),
    ).toMatchSnapshot('OpenAPI-2.0生成 Class dropComment属性测试');
    expect(
      renderClass(schema, api, {
        paramType: 'request',
        onlyBody: true,
      }),
    ).toMatchSnapshot('OpenAPI-2.0生成 Class onlyBody属性测试');
  });
});
