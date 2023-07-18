import { getSchema } from '@api-helper/core/lib/helpers';
import { APIHelper } from '@api-helper/core/lib/types';
import formatCode from '@/lib/utils/prettier';
import { renderInterface, renderInterfaceName } from '@/lib/render-interface';
import { renderRequestFunction, renderRequestFunctionName } from '@/lib/render-request-function';

export function renderAllApi(
  apiDocument: APIHelper.Document,
  options?: {
    codeType: 'typescript' | 'javascript';
    dataKey?: string;
    onRenderInterfaceName?: typeof renderInterfaceName,
    onRenderRequestFunctionName?: typeof renderRequestFunctionName,
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
      p.push(renderInterface(api.requestDataSchema, api, {
        paramType: 'request',
        onRenderInterfaceName: options?.onRenderInterfaceName,
      }));
      // 2. 生成interface-请求数据（特殊不兼容数据类型）
      p.push(renderInterface(api.requestExtraDataSchema, api, {
        paramType: 'request',
        isExtraData: true,
        onRenderInterfaceName: options?.onRenderInterfaceName,
      }));
      // 2. 生成interface-响应数据
      p.push(renderInterface(responseDataSchema, api, {
        paramType: 'response',
        onRenderInterfaceName: options?.onRenderInterfaceName,
      }));
    }
    // 3. 生成请求函数
    p.push(renderRequestFunction(api, {
      codeType,
      dataKey,
      onRenderInterfaceName: options?.onRenderInterfaceName,
      onRenderRequestFunctionName: options?.onRenderRequestFunctionName,
    }));

    code.push(p.join(''));
  }

  return formatCode(code.join('\n'), {
    parser: codeType !== 'typescript' ? 'babel' : 'typescript'
  });
}
