import { readFile } from 'fs-extra';
import { join, resolve } from 'path';

import { run } from '@root/src/lib';
import { createTempFile } from '@root/src/lib/tools/util';

describe('Service', () => {

  test('生成 typescript api 代码', async () => {
    const configFile = createTempFile(`
import { resolve } from 'path';
export default {
  documentServers: [
    {
      url: 'https://yapi.pro',
      type: 'yapi',
      authToken: '2e7e8af1073feb9e629a743884529ddc7b6e67a1decaa52e28757f24739fab28',
      dataKey: ''
    }
  ],
  requestFunctionFilePath: '${join(process.cwd(), './test/__temp__/request.ts').replace(/\\/gim, '\\\\')}',
  output: {
    path: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}',
    filename: 'api.ts',
  }
};`);
    await run('root', configFile);
    const code = await readFile(resolve(__dirname, './__temp__/api.ts'));
    expect(code.toString()).toMatchSnapshot('生成 typescript api 代码');
  });
});
