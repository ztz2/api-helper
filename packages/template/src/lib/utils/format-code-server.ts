import to from 'await-to-js';
import type { AxiosRequestConfig } from 'axios';
import { getErrorMessage } from '@api-helper/core/lib/utils/util';
import { FormatCodeConfig } from '@api-helper/core/lib/interface';

import request from '@/lib/utils/format-code-request';

export default function formatCodeServer(config: FormatCodeConfig, options?: AxiosRequestConfig): Promise<string | string[]> {
  return new Promise(async (resolve) => {
    const configList = (Array.isArray(config) ? config : [config]) as FormatCodeConfig[];
    const formattedCodeList: string[] = [];
    await to(request({
      url: '/app/formatCode',
      method: 'post',
      data: configList,
      ...options,
    }).then((res: any) => {
      [].push.apply(formattedCodeList, res as any);
    }).catch((error: Error) => {
      for (let i = 0; i < configList.length; i++) {
        formattedCodeList.push(getErrorMessage(error as Error));
      }
      return Promise.reject(error);
    }));
    resolve(Array.isArray(config) ? formattedCodeList : formattedCodeList[0]);
  });
}
