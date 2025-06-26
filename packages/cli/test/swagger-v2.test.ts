import { readFile } from 'fs-extra';
import { join, resolve } from 'path';

import { run } from '../src/lib';
import { createTempFile, removeFolder, toUnixPath } from '../src/lib/tools/util';

const tempBasePath =  join(__dirname, 'test');

describe('swagger v2', () => {
  /**
   // 是否只生成接口请求数据和返回数据的 TypeScript 类型，是则请求文件和请求函数都不会生成。
   onlyTyping?: boolean;
   */
  test('基于swagger2.0，生成 typescript api 代码', async () => {
    const configFile = createTempFile(`
import { resolve } from 'path';
export default {
  documentServers: [
    {
      url: 'https://petstore.swagger.io/v2/swagger.json',
      type: 'swagger',
      dataKey: ''
    }
  ],
  requestFunctionFilePath: '${join(process.cwd(), './test/__temp__/request.ts').replace(/\\/gim, '\\\\')}',
  outputFilePath: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}',
  transformType: { 'int64': 'number' },
};`, {
      folder: tempBasePath,
    });
    await run(null, { config: configFile }, true);
    const code = await readFile(resolve(__dirname, './__temp__/api.ts'));
    removeFolder(tempBasePath);
    expect(code.toString()).toMatchSnapshot('基于swagger2.0，生成 typescript api 代码');
  });

  test('基于swagger2.0，生成 javascript api 代码', async () => {
    const configFile = createTempFile(`
import { resolve } from 'path';
export default {
  documentServers: [
    {
      url: 'https://petstore.swagger.io/v2/swagger.json',
      type: 'swagger',
      dataKey: ''
    }
  ],
  requestFunctionFilePath: '${join(process.cwd(), './test/__temp__/request.ts').replace(/\\/gim, '\\\\')}',
  outputFilePath: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}',
  transformType: { 'int64': 'number' },
};`, {
      folder: tempBasePath,
    });
    await run(null, { config: configFile }, true);
    const code1 = await readFile(resolve(__dirname, './__temp__/api.js'));
    const code2 = await readFile(resolve(__dirname, './__temp__/api.d.ts'));
    removeFolder(tempBasePath);
    expect([code1, code2].join('\n\n')).toMatchSnapshot('基于swagger2.0，生成 javascript api 代码');
  });

  test('本地文件代码', async () => {
    const filepath = toUnixPath(join(__dirname, '../../core/test/resources/open-api/v2.0/petstore.json'));
    const configFile = createTempFile(`
import { resolve } from 'path';
export default {
  requiredRequestField: true,
  requiredResponseField: false,
  documentServers: [
    {
      url: '${filepath}',
      type: 'swagger',
      dataKey: ''
    }
  ],
  requestFunctionFilePath: '${join(process.cwd(), './test/__temp__/request.ts').replace(/\\/gim, '\\\\')}',
  outputFilePath: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}',
  transformType: { 'int64': 'number' },
};`, {
      folder: tempBasePath,
    });
    await run(null, { config: configFile }, true);
    const code = await readFile(resolve(__dirname, './__temp__/api.ts'));
    removeFolder(tempBasePath);
    expect(code.toString()).toMatchSnapshot('本地文件代码');
  });
});
