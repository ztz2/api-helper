import { Config } from '@api-helper/cli';
import { ApiProperty } from '@nestjs/swagger';

type DocumentServer = Config['documentServers'][number];
class Auth {
  @ApiProperty({
    description: '用户名',
  })
  username: DocumentServer['auth']['username'];
  @ApiProperty({
    description: '密码',
  })
  password: DocumentServer['auth']['password'];
}
export class Docs {
  @ApiProperty({
    description: `文档地址【当下面的type为'swagger'类型时，可以读取本地文件，这里就是一个本地文件路径】`,
  })
  url: DocumentServer['url'];

  @ApiProperty({
    description:
      "文档类型，根据文档类型，调用内置的解析器，默认值: 'swagger'【内置yapi和swagger的解析，其他文档类型，添加parserPlugins自行实现文档解析】",
  })
  type: DocumentServer['type'];

  @ApiProperty({
    description: '获取响应数据的key，body[dataKey]',
  })
  dataKey: DocumentServer['dataKey'];

  @ApiProperty({
    description: '访问文档可能需要认证信息，http auth验证方式',
  })
  auth: Auth;

  @ApiProperty({
    description: `访问文档可能需要认证信息，通过使用token访问`,
  })
  authToken: DocumentServer['authToken'];

  @ApiProperty({
    description: '自定义一些请求头',
  })
  headers: Recordable;
}
