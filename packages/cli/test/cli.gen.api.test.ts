import { join } from 'path';
import { readFile } from 'fs-extra';

import { run } from '../src';
import { temporaryFile } from './utils/temporary';

describe('CLI测试-API代码生成', () => {
  // test('生成 Javascript 配置文件', async () => {
  //   await run('init');
  // });

  test('代码生成-ts', async () => {

    const outputTemporaryFile = await temporaryFile('', {
      extension: '.ts'
    });
    const outputClear = outputTemporaryFile.clear;
    const outputPath = outputTemporaryFile.path;
    const outputFullPath = outputTemporaryFile.fullPath;
    const outputFileName = outputTemporaryFile.fileName;

    const configTemporaryFile = await temporaryFile(`
import { join } from 'path';
import { defineConfig } from '../../src';

export default defineConfig({
  documentServers: [{
    url: 'https://petstore.swagger.io/v2/swagger.json',
    type: 'swagger',
  }],
  requestFunctionFilePath: join(__dirname, '../utils/request'),
  output: {
    path: '${outputPath}',
    filename: '${outputFileName}',
  }
});
`,{ extension: '.ts' });
    const configFullPath = configTemporaryFile.fullPath;
    const configClear = configTemporaryFile.clear;

    await run('', configFullPath);
    const code = await readFile(outputFullPath, 'utf-8');
    expect(code).toMatchSnapshot('代码生成-ts');

    await outputClear();
    await configClear();
  });

  test('代码生成-JS', async () => {

    const outputTemporaryFile = await temporaryFile('', {
      extension: '.js'
    });
    const outputClear = outputTemporaryFile.clear;
    const outputPath = outputTemporaryFile.path;
    const outputFullPath = outputTemporaryFile.fullPath;
    const outputFileName = outputTemporaryFile.fileName;

    const configTemporaryFile = await temporaryFile(`
import { join } from 'path';
import { defineConfig } from '../../src';

export default defineConfig({
  documentServers: [{
    url: 'https://petstore.swagger.io/v2/swagger.json',
    type: 'swagger',
  }],
  requestFunctionFilePath: join(__dirname, '../utils/request'),
  output: {
    path: '${outputPath}',
    filename: '${outputFileName}',
  }
});
`,{ extension: '.js' });
    const configFullPath = configTemporaryFile.fullPath;
    const configClear = configTemporaryFile.clear;

    await run('', configFullPath);
    const code = await readFile(outputFullPath, 'utf-8');
    expect(code).toMatchSnapshot('代码生成-JS');

    await outputClear();
    await configClear();
  });
});
