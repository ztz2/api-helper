export interface IProject {
  id: string;
  // 项目名称
  name: string;
  // swagger-ui文档地址
  url?: string;
  // yapi Token
  token?: string;
  // 用户名
  username?: string;
  // 密码
  password?: string;
}

export class Project implements IProject {
  id = '';
  name = '';
  url = 'http://localhost:3210/app/swagger/test';
  token = '';
  username = '';
  password = '';
  constructor(id?: string) {
    if (typeof id === 'string') {
      this.id = id;
    }
  }
}
