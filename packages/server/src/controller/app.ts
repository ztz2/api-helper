import to from 'await-to-js';
import { Response } from 'express';
import { stat, outputFile } from 'fs-extra';
import { ExportFile } from '@api-helper/template';
import { Get, Res, Post, Body, Controller } from '@nestjs/common';
import { formatCode, FormatCodeConfig } from '@api-helper/cli/lib';

import { swagger20 } from '../mock/api';
import { Result } from '../utils/result';
import { AppService } from '../service/app';
import { getLocalIPV4List, ClientIP } from '../utils/ip';
import { getTreePath } from '../utils';
import { mergeUrl } from '@api-helper/core/lib/utils/util';

const JSZip = require('jszip');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  async getHello() {
    return await this.appService.getHello();
  }

  @Get('/app/swagger/mock')
  async test() {
    return swagger20;
  }

  @Post('/app/docs')
  async getDocs(@Body() body: any) {
    const res = await this.appService.getDocs(body);
    if (res.length === 0) {
      return Result.fail('没有找到可以生成swagger配置文件');
    }
    return Result.success(res);
  }

  @Post('/app/formatCode')
  async formatCode(@Body() body: FormatCodeConfig) {
    return Result.success(await formatCode(body));
  }

  @Post('/app/export-file')
  async exportFile(
    @Body() body: ExportFile,
    @ClientIP() clientIP: string,
    @Res() res: Response,
  ) {
    const localIPV4List = getLocalIPV4List();
    if (body.fileDirectory.length === 0) {
      return Result.fail('文件模块不能为空');
    }
    body.exportFilePath = undefined;
    const exportFileList = getTreePath(body.fileDirectory);
    // 本地IP地址，配置里面有输出目录，将文件输出到输出目录
    if (
      localIPV4List &&
      clientIP &&
      localIPV4List.includes(clientIP) &&
      body.exportFilePath
    ) {
      const [ex] = await to(stat(body.exportFilePath));
      if (ex) {
        return Result.fail('文件模块导出路径访问异常，请检查目录是否正确。');
      }
      const tasks = [];
      for (const exportFile of exportFileList) {
        const [path, { templateContent }] = exportFile;
        tasks.push(
          outputFile(
            mergeUrl(`${body.exportFilePath}/${path}`),
            templateContent,
          ),
        );
      }
      await to(Promise.all(tasks));
      return Result.success({
        isExportFilePath: true,
      });
    }
    // 其他IP地址访问，执行zip文件导出
    const zip = new JSZip();
    for (const exportFile of exportFileList) {
      const [path, { isFolder, templateContent }] = exportFile;
      if (isFolder) {
        zip.folder(templateContent);
      } else {
        zip.file(path, templateContent);
      }
    }
    const blobZip = await zip.generateAsync({
      type: 'nodebuffer',
      compression: 'DEFLATE',
      platform: process.platform,
      streamFiles: true,
      compressionOptions: {
        level: 5,
      },
    });
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader(
      'Content-Disposition',
      `attachment;filename=${encodeURIComponent('导出文件模块.zip')}`,
    );
    res.send(blobZip);
  }
}
