import to from 'await-to-js';
import { getErrorMessage } from '@api-helper/core/lib/utils/util';
import { FormatCodeConfig } from '@api-helper/cli/lib/tools/format-code';

import request from '@/lib/utils/format-code-request';

export default function formatCodeServer(config: FormatCodeConfig): Promise<string | string[]> {
  return new Promise(async (resolve) => {
    const configList = (Array.isArray(config) ? config : [config]) as FormatCodeConfig[];
    const formattedCodeList: string[] = [];
    await to(request({
      url: '/app/formatCode',
      method: 'post',
      data: configList,
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
