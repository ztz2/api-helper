import { getSchema } from '@api-helper/core/lib/helpers';
import { APIHelper } from '@api-helper/core/lib/types';
import formatCode from '@/lib/utils/prettier';
import { renderInterface } from '@/lib/render-interface';
import { renderRequestFunction } from '@/lib/render-request-function';

export function renderAllApi(
  apiDocument: APIHelper.Document,
  options?: {
    codeType: 'typescript' | 'javascript';
    dataKey?: string;
  }
) {
  if (!apiDocument) {
    return '';
  }
  const codeType = options?.codeType || 'typescript';
  const dataKey = options?.dataKey;
  const isTS = codeType === 'typescript';

  const categoryList: APIHelper.CategoryList = apiDocument.categoryList;
  let allApi: APIHelper.APIList = [];

  for (const category of categoryList) {
    allApi = [...allApi, ...category.apiList];
  }

  const code: string[] = [];
  for (const api of allApi) {
    const p: string[] = [];
    if (isTS) {
      let responseDataSchema = api.responseDataSchema;
      if (dataKey) {
        responseDataSchema = getSchema(api.responseDataSchema, dataKey)
      }
      // 1. 生成interface-请求数据
      p.push(renderInterface(api.requestDataSchema, api, { paramType: 'request' }));
      // 2. 生成interface-请求数据（特殊不兼容数据类型）
      p.push(renderInterface(api.requestExtraDataSchema, api, { paramType: 'request', isExtraData: true }));
      // 2. 生成interface-响应数据
      p.push(renderInterface(responseDataSchema, api, { paramType: 'response' }));
    }
    // 3. 生成请求函数
    p.push(renderRequestFunction(api, { codeType, dataKey }));

    code.push(p.join(''));
  }

  return formatCode(code.join('\n'), {
    parser: codeType !== 'typescript' ? 'babel' : 'typescript'
  });
}
