import to from 'await-to-js';
import merge from 'lodash/merge';
import * as prettier from 'prettier';

import cp from 'node:child_process';
import fsExtra, { remove, readFile } from 'fs-extra';
import { getErrorMessage } from '@api-helper/core/lib/utils/util';
import { FORMAT_CODE_EXTENSION } from '@api-helper/core/lib/constant';
import { PrettierOptions, FormatCodeConfig } from '@api-helper/core/lib/interface';

import {
  checkType, createFolder,
  createTempFileByTMP, removeFolder,
} from '@/lib/tools/util';

import log from '@/lib/tools/logger';
import path from 'path';

type OnlyClearTempFolder = {
  onlyClearTempFolder?: boolean
  tempFilePath?: string
  tempPrettierFilePath?: string
};
export default async function formatCode(config: FormatCodeConfig & OnlyClearTempFolder  | Array<FormatCodeConfig & OnlyClearTempFolder>): Promise<string | string[]> {
  if (Array.isArray(config)) {
    const codeList: string[] = [];
    const tasks = [];
    for (let i = 0; i < config.length; i++) {
      tasks.push(format(config[i]).then((c) => codeList[i] = c));
    }
    await to(Promise.all(tasks));
    return codeList;
  }
  return await format(config);
}
async function format(config: FormatCodeConfig & OnlyClearTempFolder): Promise<string> {
  return new Promise(async (resolve) => {
    const { sourceCode, formatCodeExtension } = config;
    const baseFolder = config.tempFilePath ? config.tempFilePath : createFolder(path.join(__dirname, './.cache.format.code'));
    let prettierOptions = {};

    try{
      prettierOptions = checkType(config.prettierOptions, 'Object') ?
        config.prettierOptions :
        checkType(config.prettierOptions, 'String') ? JSON.parse(config.prettierOptions as string) : {};
    } catch {}

    if (!config.tempFilePath && config?.onlyClearTempFolder) {
      removeFolder(baseFolder);
      return '';
    }

    if (!sourceCode) {
      return resolve(sourceCode);
    }

    if (!FORMAT_CODE_EXTENSION.includes(formatCodeExtension)) {
      const errorText = `@api-helper/cli/lib/tools/format.ts 未知的文件类型${formatCodeExtension}。允许的类型：${FORMAT_CODE_EXTENSION.toString()}`;
      log.warn('提示', errorText);
      return resolve(errorText);
    }

    const prettierOptionsStr = JSON.stringify(merge(new PrettierOptions(), prettierOptions));
    const filepath = config.tempFilePath ? config.tempFilePath : createTempFileByTMP(sourceCode, { postfix: formatCodeExtension });
    const prettierFilePath = config.tempPrettierFilePath ? config.tempPrettierFilePath : createTempFileByTMP(prettierOptionsStr, { postfix: '.json' });
    const clear = () => {
      !config.tempFilePath && removeFolder(filepath);
      !config.tempPrettierFilePath && removeFolder(prettierFilePath);
    }
    cp.exec(`npx prettier --write ${filepath} --config ${prettierFilePath}`, async (err) => {
      if (err) {
        resolve(config.sourceCode);
        const errorText = `\n@api-helper/cli/lib/tools/format.ts 格式化代码失败：\n${getErrorMessage(err as Error)}`;
        console.log('\n');
        log.warn('提示', errorText);
        return clear();
      }
      try {
        const formattedCode = (await readFile(filepath)).toString();
        resolve(formattedCode);
      } catch (e) {
        resolve(config.sourceCode);
        const errorText = `\n@api-helper/lib/tools/format.ts 读取临时文件失败：\n${getErrorMessage(e as Error)}`;
        console.log('\n');
        log.warn('提示', errorText);
      } finally {
        clear();
      }
    });
  });
}
