import { join } from 'path';

import { ParserOpenAPI } from '../src';
import { generateAllApi } from '../dist';
import { readJsonFile } from './utils/file';
import { format } from '../src';


describe('生成全部API函数', () => {
  test('OpenAPI-2.0生成全部API函数', async () => {
    console.log(format(`import request from '@/utils/request';/**
 * @描述 账户登录、账户登录
 * @请求信息 [ POST ] /api/tenant/auth
 */
export function apiTenantAuthByPost(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      apiTenantAuthByPost.requestConfig
    ),
    ...args
  );
}
apiTenantAuthByPost.requestConfig = {
  path: '/api/tenant/auth',
  method: 'post',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: []
};

/**
 * @描述 登录确认、登录确认
 * @请求信息 [ GET ] /api/tenant/auth
 */
export function apiTenantAuthByGet(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      apiTenantAuthByGet.requestConfig
    ),
    ...args
  );
}
apiTenantAuthByGet.requestConfig = {
  path: '/api/tenant/auth',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['tenantId', 'submitToken']
};

/**
 * @描述 手机验证码获取、手机验证码获取
 * @请求信息 [ GET ] /api/tenant/auth/verification-code
 */
export function apiTenantAuthVerificationCodeByGet(data, extraData, ...args) {
  return request(
    processRequestFunctionConfig(
      data,
      extraData,
      apiTenantAuthVerificationCodeByGet.requestConfig
    ),
    ...args
  );
}
apiTenantAuthVerificationCodeByGet.requestConfig = {
  path: '/api/tenant/auth/verification-code',
  method: 'get',
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: ['code', 'phone', 'uuid']
};
`, {
      parser: 'javascript'
    }))
    // const openAPIDocumentJSON = await readJsonFile(join(__dirname, './resources/open-api-2.0-source.json'));
    // const ahDocumentList = await new ParserOpenAPI(false).parser([openAPIDocumentJSON]);
    // const ahDocument = ahDocumentList[0];
    // const code = generateAllApi(ahDocument);
    // expect(code).toMatchSnapshot('OpenAPI-2.0生成全部API函数');
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
