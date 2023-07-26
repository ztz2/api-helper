import { ApiProperty } from '@nestjs/swagger';
import { APIHelper } from '@api-helper/core';

export class FileDirectoryConfig {
  @ApiProperty({
    description: '文件(夹)标题',
  })
  title = '';

  @ApiProperty({
    description: '文件(夹)ID',
  })
  id = '';

  @ApiProperty({
    description: '是否为文件夹',
  })
  isFolder: boolean;

  @ApiProperty({
    description: '选择的模版',
  })
  template: Recordable;

  @ApiProperty({
    description: '选择的模版内容索引',
  })
  templateContentIndex: number = 0;

  @ApiProperty({
    description: '选择的API',
  })
  api: APIHelper.API;

  @ApiProperty({
    description: '选择的请求数据字段集合',
  })
  requestDataSchemaList: Array<APIHelper.Schema>;

  @ApiProperty({
    description: '选择的响应数据字段集合',
  })
  responseDataSchemaList: Array<APIHelper.Schema>;

  @ApiProperty({
    description: '子文件(夹)-文件目录配置信息',
  })
  children: FileDirectoryConfig;
}
