import { ApiProperty } from '@nestjs/swagger';
import { FileDirectoryConfig } from './file-directory-config';

export class FileDirectory {
  @ApiProperty({
    description: '文件模块导出路径',
  })
  fileDirectoryExportPath: string;

  @ApiProperty({
    description: '文件目录配置信息',
  })
  fileDirectoryConfigList: Array<FileDirectoryConfig>;

  @ApiProperty({
    description: '文档配置信息',
  })
  documentConfig: Recordable;
}
