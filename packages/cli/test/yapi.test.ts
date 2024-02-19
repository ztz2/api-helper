import { readFile } from 'fs-extra';
import { join, resolve } from 'path';

import { run } from '../src/lib';
import { createTempFile, removeFolder } from '../src/lib/tools/util';

const tempBasePath =  join(__dirname, 'test');
describe('yapi文档', () => {
  test('yapi 接口无法访问，暂时无法测试', async () => {});
//   test('生成 typescript api 代码', async () => {
//     const configFile = createTempFile(`
// import { resolve } from 'path';
// export default {
//   documentServers: [
//     {
//       url: 'https://yapi.pro',
//       type: 'yapi',
//       authToken: '7f41d29403ca222d88d74ef631e8905aa529d7aeeee42a80a12dbece872d8519',
//       dataKey: ''
//     }
//   ],
//   requestFunctionFilePath: '${join(process.cwd(), './test/__temp__/request.ts').replace(/\\/gim, '\\\\')}',
//   output: {
//     path: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}',
//     filename: 'api.ts',
//   }
// };`, {
//       folder: tempBasePath,
//     });
//     await run(null, configFile, true);
//     const code = await readFile(resolve(__dirname, './__temp__/api.ts'));
//     removeFolder(tempBasePath);
//     expect(code.toString()).toMatchSnapshot('生成 typescript api 代码');
//   });
//   test('只生成类型', async () => {
//     const configFile = createTempFile(`
// import { resolve } from 'path';
// export default {
//   onlyTyping: true,
//   documentServers: [
//     {
//       url: 'https://yapi.pro',
//       type: 'yapi',
//       authToken: '7f41d29403ca222d88d74ef631e8905aa529d7aeeee42a80a12dbece872d8519',
//       dataKey: ''
//     }
//   ],
//   requestFunctionFilePath: '${join(process.cwd(), './test/__temp__/request.ts').replace(/\\/gim, '\\\\')}',
//   output: {
//     path: '${join(process.cwd(), './test/__temp__').replace(/\\/gim, '\\\\')}',
//     filename: 'api.ts',
//   }
// };`, {
//       folder: tempBasePath,
//     });
//     await run(null, configFile, true);
//     const code = await readFile(resolve(__dirname, './__temp__/api.ts'));
//     removeFolder(tempBasePath);
//     expect(code.toString()).toMatchSnapshot('只生成类型');
//   });
});
