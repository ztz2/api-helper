import { run } from '../src';


describe('CLI测试', () => {
  test('生成 Javascript 配置文件', async () => {
    await run('init');
  });
});
