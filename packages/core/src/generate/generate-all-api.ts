import { format } from '../utils';
import { APIHelper } from '../types';
import { getSchema } from '../helpers';
import { generateInterface } from './generate-interface';
import { generateRequestFunc } from './generate-request-func';

export function generateAllApi(
  apiDocument: APIHelper.Document,
  options?: {
    codeType: 'typescript' | 'javascript';
    responseDataKey?: string;
  }
) {
  if (!apiDocument) {
    return '';
  }
  const codeType = options?.codeType || 'typescript';
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
      const responseDataSchema = options?.responseDataKey ? getSchema(api.responseDataSchema, options.responseDataKey) : api.responseDataSchema;
      if (responseDataSchema) {
        responseDataSchema.keyName = '';
      }
      // 1. 生成interface-请求数据
      p.push(generateInterface(api.requestDataSchema, api, { paramType: 'request' }));
      // 2. 生成interface-请求数据（特殊不兼容数据类型）
      p.push(generateInterface(api.requestExtraDataSchema, api, { paramType: 'request', isExtraData: true }));
      // 2. 生成interface-响应数据
      p.push(generateInterface(responseDataSchema, api, { paramType: 'response' }));
    }
    // 3. 生成请求函数
    p.push(
      generateRequestFunc(api, {
        codeType
      })
    );

    code.push(p.join(''));
  }

  return format(code.join('\n'), {
    parser: codeType !== 'typescript' ? 'babel' : 'typescript'
  });
}
