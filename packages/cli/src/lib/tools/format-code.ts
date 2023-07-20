import to from 'await-to-js';
import merge from 'lodash/merge';

import cp from 'node:child_process';
import { remove, readFile } from 'fs-extra';

import {
  checkType,
  createTempFile,
  getErrorMessage,
} from '@/lib/tools/util';

import {
  FormatCodeExtension,
  FORMAT_CODE_EXTENSION,
} from '@/lib/constants';

import log from '@/lib/tools/log';
import PrettierrcOptions from './prettierrc-options';

export type Prettierrc = string | Partial<PrettierrcOptions>;

export type FormatCodeConfig = {
  sourceCode: string;
  formatCodeExtension: FormatCodeExtension;
  prettierrcOptions?: Prettierrc;
}

export default async function formatCode(config: FormatCodeConfig | FormatCodeConfig[]): Promise<string | string[]> {
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
function format(config: FormatCodeConfig): Promise<string> {
  return new Promise(async (resolve) => {
    const { sourceCode, formatCodeExtension } = config;
    if (!sourceCode) {
      return resolve(sourceCode);
    }

    if (!FORMAT_CODE_EXTENSION.includes(formatCodeExtension)) {
      const errorText = `@api-helper/cli/lib/tools/format.ts 未知的文件类型${formatCodeExtension}。允许的类型：${FORMAT_CODE_EXTENSION.toString()}`;
      log.warn('提示', errorText);
      return resolve(errorText);
    }

    const prettierrc = checkType(config.prettierrcOptions, 'Object') ?
      config.prettierrcOptions :
        checkType(config.prettierrcOptions, 'String') ? JSON.parse(config.prettierrcOptions as string) : {};
    const prettierrcOptions = JSON.stringify(merge(new PrettierrcOptions(), prettierrc));

    const filepath = createTempFile(sourceCode, { postfix: formatCodeExtension });
    const prettierrcFilePath = createTempFile(prettierrcOptions, { postfix: '.json' });

    const clearTempFile = async () => { await Promise.all([to(remove(filepath)), to(remove(prettierrcFilePath))]); }
    cp.exec(`npx prettier --write ${filepath} --config ${prettierrcFilePath}`, async (err) => {
      if (err) {
        const errorText = `@api-helper/cli/lib/tools/format.ts 格式化代码失败：${getErrorMessage(err as Error)}`;
        log.warn('提示', errorText);
        await clearTempFile();
        return resolve(errorText);
      }
      try {
        const formattedCode = (await readFile(filepath)).toString();
        resolve(formattedCode);
      } catch (e) {
        const errorText = `@api-helper/lib/tools/format.ts 读取临时文件失败：${getErrorMessage(e as Error)}`;
        log.warn('提示', errorText);
        return resolve(errorText);
      } finally {
        await clearTempFile();
      }
    });
  });
}
