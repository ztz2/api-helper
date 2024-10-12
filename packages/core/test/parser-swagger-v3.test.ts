import { join } from 'path';

import { ParserSwagger } from '../src';
import { readJsonFile } from './utils/file';

describe('swagger-parser v3', () => {
  test('cookie-param.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/cookie-param.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('cookie-param.json');
  });
  test('enum-param.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/enum-param.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('enum-param.json');
  });
  test('form-data-param.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/form-data-param.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('form-data-param.json');
  });
  test('header-param.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/header-param.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('header-param.json');
  });
  test('json-param.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/json-param.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('json-param.json');
  });
  test('octet-stream-param.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/octet-stream-param.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('octet-stream-param.json');
  });
  test('path-param.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/path-param.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('path-param.json');
  });
  test('petstore.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/petstore.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('petstore.json');
  });
  test('query-param.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/query-param.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('query-param.json');
  });
  test('resp-array.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/resp-array.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('resp-array.json');
  });
  test('text-plain-param.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/text-plain-param.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('text-plain-param.json');
  });
  test('unofficial-specification-dot-query-param.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/unofficial-specification-dot-query-param.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('unofficial-specification-dot-query-param.json');
  });
  test('unofficial-specification-key-name.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/unofficial-specification-key-name.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('unofficial-specification-key-name.json');
  });
  test('wrong-issues-2.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/wrong-issues-2.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('wrong-issues-2.json');
  });
  test('x-www-form-urlencoded-param.json', async () => {
    const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api/v3.0/x-www-form-urlencoded-param.json'));
    const ahDocumentList = await new ParserSwagger(false).parser([openAPIDocumentJSON]);
    const ahDocument = ahDocumentList[0];
    expect(ahDocument).toMatchSnapshot('x-www-form-urlencoded-param.json');
  });
});
