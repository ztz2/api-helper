import { merge } from 'lodash';
import PrettierrcOptions from '@api-helper/cli/lib/tools/prettierrc-options';

import {
  DEFAULT_SELECT_API_TPL_ID,
  DEFAULT_SELECT_MODEL_TPL_ID,
} from '@/constants';

export class Project {
  id = '';
  // 项目名称
  title = '';
  // 文档地址
  url = 'http://localhost:3210/app/swagger/mock';
  // 文档类型，默认可以解析 swagger
  type = 'swagger';
  // 访问文档可能需要认证信息，http auth验证方式
  auth = {
    username: '',
    password: '',
  }
  // 访问文档可能需要认证信息，通过使用token访问
  authToken = '';
  // 获取数据的key，body[dataKey]
  dataKey = '';

  /** 以下属性是基于项目级别的通用配置项 - 开始 * */
  // 选择的文件模块ID
  exportFileId = '';
  // 文件模块导出路径
  exportFilePath = '';
  // API选择的模版ID
  apiTplId = DEFAULT_SELECT_API_TPL_ID;
  // 模型选择的模版ID
  modelTplId = DEFAULT_SELECT_MODEL_TPL_ID;
  // 头部代码
  headCodeText = 'import request from \'@/api/request\';\n';
  // 只生成API函数
  onlyApiFunc = false;
  // 输入框属性：maxlength
  maxlength = 128;
  // 输入框属性：placeholder
  placeholder = true;
  // 是否使用栅格布局
  grid = false;
  // Form表单项是否生成label
  generateLabel = false;
  // prettier配置对象
  prettierrcOptions = new PrettierrcOptions();
  /** 以下属性是基于项目级别的通用配置项 - 结束 * */
  constructor(id?: string | Partial<Project>) {
    if (typeof id === 'string') {
      this.id = id;
    }
    if (Object.prototype.toString.call(id) === '[object Object]') {
      merge(this, id);
    }
  }
}
