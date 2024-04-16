import { APIHelper } from '@api-helper/core/lib/types';
import { getSchema } from '@api-helper/core/lib/helpers';

import {
  renderInterface,
  renderInterfaceName,
} from '@/lib/render-interface';
import {
  renderRequestFunction,
  renderRequestFunctionName,
} from '@/lib/render-request-function';
import {
  renderRequestFunctionDeclare,
} from '@/lib/render-request-function-declare';

export function checkDocument(document: any) {
  return 'version' in document && 'documentVersion' in document && 'categoryList' in document;
}

export function renderAllApi(
  apiDocument: APIHelper.Document | APIHelper.CategoryList,
  options?: {
    dataKey?: string;
    codeType?: 'typescript' | 'javascript';
    // 生成的是类型申明代码，默认false
    isDeclare?: boolean;
    // 是否只生成接口请求数据和返回数据的 TypeScript 类型
    onlyTyping?: boolean;
    onRenderInterfaceName?: typeof renderInterfaceName,
    onRenderRequestFunctionName?: typeof renderRequestFunctionName,
  }
) {
  if (!apiDocument) {
    return '';
  }
  const codeType = options?.codeType || 'typescript';
  const dataKey = options?.dataKey;
  const onlyTyping = options?.onlyTyping && options.codeType === 'typescript';
  const isTS = codeType === 'typescript';
  const isDeclare = options?.isDeclare ?? false;

  const categoryList: APIHelper.CategoryList = checkDocument(apiDocument) ? (apiDocument as APIHelper.Document).categoryList : apiDocument as APIHelper.CategoryList;
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
        emptyBodyCode: 'Record<string, any>;',
        prefix: isDeclare ? 'declare ' : 'export ',
      }));
      // 2. 生成interface-请求数据（特殊不兼容数据类型）
      p.push(renderInterface(api.requestExtraDataSchema, api, {
        paramType: 'request',
        isExtraData: true,
        onRenderInterfaceName: options?.onRenderInterfaceName,
        prefix: isDeclare ? 'declare ' : 'export ',
      }));
      // 2. 生成interface-响应数据
      p.push(renderInterface(responseDataSchema, api, {
        paramType: 'response',
        onRenderInterfaceName: options?.onRenderInterfaceName,
        prefix: isDeclare ? 'declare ' : 'export ',
      }));
    }

    // 3. 生成请求函数
    if (onlyTyping !== true) {
      if (isDeclare) {
        p.push(renderRequestFunctionDeclare(api, {
          dataKey,
          onRenderInterfaceName: options?.onRenderInterfaceName,
          onRenderRequestFunctionName: options?.onRenderRequestFunctionName,
        }));
      }
    }
    if (!(onlyTyping && codeType === 'typescript')) {
      p.push(renderRequestFunction(api, {
        dataKey,
        codeType,
        onRenderInterfaceName: options?.onRenderInterfaceName,
        onRenderRequestFunctionName: options?.onRenderRequestFunctionName,
      }));
    }

    code.push(p.join(''));
  }

  return code.join('\n');
}
