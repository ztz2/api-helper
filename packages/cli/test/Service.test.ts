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
      url: 'https://petstore.swagger.io/v2/swagger.json',
      type: 'swagger',
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


  test('生成 javascript api 代码', async () => {
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
  output: {
    path: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}',
    filename: 'api.js',
  }
};`);
    await run('root', configFile);
    const code = await readFile(resolve(__dirname, './__temp__/api.js'));
    expect(code.toString()).toMatchSnapshot('生成 javascript api 代码');
  });
});
