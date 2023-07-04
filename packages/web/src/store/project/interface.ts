import { nanoid } from 'nanoid';
import { APIHelper } from '@api-helper/core/es/lib/types';

export interface IProject {
  id: string;
  // 项目名称
  title: string;
  // 文档类型，默认可以解析 swagger
  type: 'swagger' | 'yapi' | string;
  // 文档地址【当下面的type为swagger类型时，可以读取本地文件，这里就是一个本地文件路径】
  url?: string;
  // yapi Token
  token?: string;
  // 获取数据的key，body[dataKey]
  dataKey?: string;
  // 访问文档可能需要认证信息，http auth验证方式
  auth?: {
    username: string;
    password: string;
  };
  // 访问文档可能需要认证信息，通过使用token访问
  authToken?: string;
}

export class Project implements IProject {
  id = '';

  title = '';

  url = 'http://localhost:3210/app/swagger/test';

  type = 'swagger';

  authToken = '';

  auth = {
    username: '',
    password: '',
  }

  dataKey = '';

  constructor(id?: string) {
    if (typeof id === 'string') {
      this.id = id;
    }
  }
}

// 项目
export class APIHDocument implements APIHelper.Document {
  id = nanoid();

  title = '';

  description = '';

  version = '';

  openapiVersion = '';

  basePath = '';

  host = '';

  categoryList = [];
}
