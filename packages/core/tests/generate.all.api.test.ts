import { join } from 'path';

import { ParserOpenAPI } from '../src';
import { generateAllApi } from '../dist';
import { readJsonFile } from './utils/file';

describe('生成全部API函数', () => {
  test('OpenAPI-2.0生成全部API函数', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-2.0-source.json'));
    const ahDocumentList = await new ParserOpenAPI(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    const code = generateAllApi(ahDocument);
    expect(code).toMatchSnapshot('OpenAPI-2.0生成全部API函数');
  });

  test('OpenAPI-3.0生成全部API函数', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-3.0.json'));
    const ahDocumentList = await new ParserOpenAPI(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    const code = generateAllApi(ahDocument);
    expect(code).toMatchSnapshot('OpenAPI-3.0生成全部API函数');
  });

  // test('swaggerApi生成全部API函数', async () => {
  //   const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/swaggerApi.json'));
  //   const ahDocumentList = await new ParserOpenAPI(false).parser([openAPIDocumentJSON]);
  //   const ahDocument = ahDocumentList[0];
  //   const code = generateAllApi(ahDocument, { codeType: 'typescript', responseDataKey: 'data' });
  //   expect(code).toMatchSnapshot('swaggerApi生成全部API函数');
  // });
});
