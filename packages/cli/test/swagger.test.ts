import { readFile } from 'fs-extra';
import path, { join, resolve } from 'path';

import { run } from '../src/lib';
import { createTempFile, toUnixPath } from '../src/lib/tools/util';

describe('swagger文档', () => {
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
  output: {
    path: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}',
    filename: 'api.ts',
  }
};`);
    await run(null, configFile, true);
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
    await run(null, configFile, true);
    const code1 = await readFile(resolve(__dirname, './__temp__/api.js'));
    const code2 = await readFile(resolve(__dirname, './__temp__/api.d.ts'));
    expect([code1, code2].join('\n\n')).toMatchSnapshot('基于swagger2.0，生成 javascript api 代码');
  });

  test('基于swagger3.0.1，生成 typescript api 代码', async () => {
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
  output: {
    path: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}',
    filename: 'api.ts',
  }
};`);
    await run(null, configFile, true);
    const code = await readFile(resolve(__dirname, './__temp__/api.ts'));
    expect(code.toString()).toMatchSnapshot('基于swagger3.0.1，生成 typescript api 代码');
  });

  test('本地文件代码', async () => {
    const filepath = toUnixPath(join(__dirname, `../test/resources/open-api-2.0.json`));
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
  output: {
    path: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}',
    filename: 'api.ts',
  }
};`);
    await run(null, configFile, true);
    const code = await readFile(resolve(__dirname, './__temp__/api.ts'));
    expect(code.toString()).toMatchSnapshot('本地文件代码');
  });

  test('只生成类型', async () => {
    const configFile = createTempFile(`
import { resolve } from 'path';
export default {
  onlyTyping: true,
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
    await run(null, configFile, true);
    const code = await readFile(resolve(__dirname, './__temp__/api.ts'));
    expect(code.toString()).toMatchSnapshot('只生成类型');
  });
});
