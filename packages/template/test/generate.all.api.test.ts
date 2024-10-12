import { join } from 'path';
import ParserSwagger from '@api-helper/core/es/lib/parser/parser-swagger';

import { readJsonFile } from './utils/file';
import { renderAllApi } from '../src/lib/render-all-api';

describe('生成全部API函数', () => {
  test('OpenAPI-2.0生成全部类型申明', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api/v2.0/petstore.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    const code = renderAllApi(ahDocument, {
      isDeclare: true
    });
    expect(code).toMatchSnapshot('OpenAPI-2.0生成全部类型申明');
  });

  test('OpenAPI-2.0生成全部API函数', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api/v2.0/petstore.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    const code = renderAllApi(ahDocument);
    expect(code).toMatchSnapshot('OpenAPI-2.0生成全部API函数');
  });

  test('OpenAPI-3.0生成全部API函数', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, '../../core/test/resources/open-api/v3.0/petstore.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    const code = renderAllApi(ahDocument);
    expect(code).toMatchSnapshot('OpenAPI-3.0生成全部API函数');
  });
});
