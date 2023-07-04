import { readFile } from 'fs-extra';
import { join, resolve } from 'path';

import { run } from '../src/lib';
import { createTempFile } from '../src/lib/tools/util';

describe('yapi文档', () => {

  test('基于yapi，生成 typescript api 代码', async () => {
    const configFile = createTempFile(`
import { resolve } from 'path';
export default {
  documentServers: [
    {
      url: 'https://yapi.pro',
      type: 'yapi',
      authToken: '7f41d29403ca222d88d74ef631e8905aa529d7aeeee42a80a12dbece872d8519',
      dataKey: ''
    }
  ],
  requestFunctionFilePath: '${join(process.cwd(), './test/__temp__/request.ts').replace(/\\/gim, '\\\\')}',
  output: {
    path: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}',
    filename: 'api.ts',
  }
};`);
    await run(null, configFile);
    const code = await readFile(resolve(__dirname, './__temp__/api.ts'));
    expect(code.toString()).toMatchSnapshot('基于yapi，生成 typescript api 代码');
  });
});
