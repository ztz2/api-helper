import { readFile } from 'fs-extra';
import { join, resolve } from 'path';

import { run } from '../src/lib';
import { createTempFile } from '../src/lib/tools/util';

describe('swagger文档', () => {

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
  output: {
    path: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}',
    filename: 'api.ts',
  }
};`);
    await run(null, configFile);
    const code = await readFile(resolve(__dirname, './__temp__/api.ts'));
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
  output: {
    path: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}',
    filename: 'api.js',
  }
};`);
    await run(null, configFile);
    const code = await readFile(resolve(__dirname, './__temp__/api.js'));
    expect(code.toString()).toMatchSnapshot('基于swagger2.0，生成 javascript api 代码');
  });


  test('基于swagger3.0.1，生成 typescript api 代码', async () => {
    const configFile = createTempFile(`
import { resolve } from 'path';
export default {
  documentServers: [
    {
      url: 'https://doc.xiaominfo.com/demo/doc.html',
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
    await run(null, configFile);
    const code = await readFile(resolve(__dirname, './__temp__/api.ts'));
    expect(code.toString()).toMatchSnapshot('基于swagger3.0.1，生成 typescript api 代码');
  });
});
