import { ApiProperty } from '@nestjs/swagger';
import {
  Prettierrc,
  FormatCodeConfig,
} from '@api-helper/cli/lib/tools/format-code';

export class FormatCode implements FormatCodeConfig {
  @ApiProperty({
    description: '格式化代码源文件',
  })
  sourceCode: string;

  @ApiProperty({
    description: '基于该文件后缀名进行格式化代码',
  })
  formatCodeExtension: FormatCodeConfig['formatCodeExtension'] = '.ts';

  @ApiProperty({
    description: 'prettier配置信息',
  })
  prettierOptions: Prettierrc;
}
