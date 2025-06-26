import { readFile } from 'fs-extra';
import { join, resolve } from 'path';

import { run } from '../src/lib';
import { createTempFile, removeFolder, toUnixPath } from '../src/lib/tools/util';

const tempBasePath =  join(__dirname, 'test');

describe('swagger v3', () => {
  test('dot参数', async () => {
    const filepath = toUnixPath(join(__dirname, `../../core/test/resources/open-api/v3.0/unofficial-specification-dot-query-param.json`));
    const configFile = createTempFile(`
import { resolve } from 'path';
export default {
  documentServers: [
    {
      url: '${filepath}',
      type: 'swagger',
      dataKey: ''
    }
  ],
  requestFunctionFilePath: '${join(process.cwd(), './test/__temp__/request.ts').replace(/\\/gim, '\\\\')}',
  outputFilePath: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}'
};`, {
      folder: tempBasePath,
    });
    await run(null, { config: configFile }, true);
    const code = await readFile(resolve(__dirname, './__temp__/api.ts'));
    removeFolder(tempBasePath);
    expect(code.toString()).toMatchSnapshot('dot参数');
  });

  test('生成 typescript api 代码', async () => {
    const configFile = createTempFile(`
import { resolve } from 'path';
export default {
  requiredRequestField: true,
  requiredResponseField: false,
  documentServers: [
    {
      url: 'https://doc.xiaominfo.com/demo/doc.html',
      type: 'swagger',
      dataKey: ''
    }
  ],
  requestFunctionFilePath: '${join(process.cwd(), './test/__temp__/request.ts').replace(/\\/gim, '\\\\')}',
  outputFilePath: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}'
};`, { folder: tempBasePath });
    await run(null, { config: configFile }, true);
    const code = await readFile(resolve(__dirname, './__temp__/api.ts'));
    removeFolder(tempBasePath);
    expect(code.toString()).toMatchSnapshot('生成 typescript api 代码');
  });

  test('本地文件代码', async () => {
    const filepath = toUnixPath(join(__dirname, '../../core/test/resources/open-api/v3.0/petstore.json'));
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
