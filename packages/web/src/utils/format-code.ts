import to from 'await-to-js';
import { FormatCodeConfig } from '@api-helper/cli/lib/tools/format-code';

import { fetchFormatCode } from '@/api';
import { getErrorMessage } from '@/utils';

export default function formatCode(config: FormatCodeConfig): Promise<string | string[]> {
  return new Promise(async (resolve) => {
    const configList = (Array.isArray(config) ? config : [config]) as FormatCodeConfig[];
    const formattedCodeList: string[] = [];
    await to(fetchFormatCode(configList).then((res) => {
      [].push.apply(formattedCodeList, res as []);
    }).catch((error) => {
      for (let i = 0; i < configList.length; i++) {
        formattedCodeList.push(getErrorMessage(error as Error));
      }
      return Promise.reject(error);
    }));
    resolve(Array.isArray(config) ? formattedCodeList : formattedCodeList[0]);
  });
}
