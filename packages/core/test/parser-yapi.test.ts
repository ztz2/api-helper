import { join } from 'path';

import { ParserYapi } from '../';
import { readJsonFile } from './utils/file';

describe('yapi-parser', () => {
  test('yapi-parser文档解析转换测试', async () => {
    const projectInfo = await readJsonFile(join(__dirname, './resources/yapi/project-info.json'));
    const categoryList = await readJsonFile(join(__dirname, './resources/yapi/category-list.json'));
    const apiList = await readJsonFile(join(__dirname, './resources/yapi/api-list.json'));
    expect(await new ParserYapi({
      projectInfo,
      categoryList,
      apiList,
      autoGenerateId: false,
    }).parser()).toMatchSnapshot('yapi-parser文档解析转换测试');
  });
});
