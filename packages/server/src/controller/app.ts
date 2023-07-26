import to from 'await-to-js';
import { Response } from 'express';
import { stat, outputFile } from 'fs-extra';
import { formatCode } from '@api-helper/cli/lib';
import { renderTemplate } from '@api-helper/template';
import { mergeUrl } from '@api-helper/core/lib/utils/util';
import { treeForEach } from '@api-helper/core/lib/utils/tree';
import { Get, Res, Post, Body, Controller } from '@nestjs/common';

import { Docs } from '../dto/docs';
import { getTreePath } from '../utils';
import { swagger20 } from '../mock/api';
import { Result } from '../utils/result';
import { AppService } from '../service/app';
import { FormatCode } from '../dto/format-code';
import { FileDirectory } from '../dto/file-directory';
import { ClientIP, getLocalIPV4List } from '../utils/ip';
import { FileDirectoryConfig } from '../dto/file-directory-config';
import { clearDir } from '../utils/file';

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
  async getDocs(@Body() docs: Docs) {
    const res = await this.appService.getDocs(docs);
    if (res.length === 0) {
      return Result.fail('没有找到可以生成swagger配置文件');
    }
    return Result.success(res);
  }

  @Post('/app/formatCode')
  async formatCode(@Body() body: Array<FormatCode> | FormatCode) {
    return Result.success(await formatCode(body));
  }

  @Post('/app/fileDirectory')
  async exportFile(
    @Body() fileDirectory: FileDirectory,
    @ClientIP() clientIP: string,
    @Res() res: Response,
  ) {
    const localIPV4List = getLocalIPV4List();
    if (fileDirectory.fileDirectoryConfigList.length === 0) {
      return Result.fail('文件模块不能为空');
    }
    const fileDirectoryConfigPathList = getTreePath(
      fileDirectory.fileDirectoryConfigList,
    );
    const templateContentRecordMap = new Map<string, string>();
    // 模版生成
    const renderTemplateTasks = [];
    treeForEach(
      fileDirectory.fileDirectoryConfigList,
      (fileDirectoryConfig: FileDirectoryConfig) => {
        if (!fileDirectoryConfig.isFolder) {
          renderTemplateTasks.push(
            renderTemplate(
              fileDirectoryConfig.template as any,
              {
                api: fileDirectoryConfig.api,
                requestDataSchemaList:
                  fileDirectoryConfig.requestDataSchemaList,
                responseDataSchemaList:
                  fileDirectoryConfig.responseDataSchemaList,
              },
              fileDirectory.documentConfig as any,
              formatCode as any,
            ).then((content) => {
              templateContentRecordMap.set(
                fileDirectoryConfig.id,
                content[fileDirectoryConfig.templateContentIndex ?? 0]
                  ?.content ?? '',
              );
            }),
          );
        }
      },
    );
    await to(Promise.all(renderTemplateTasks));

    // 本地IP地址，配置里面有输出目录，将文件输出到输出目录
    if (
      localIPV4List &&
      clientIP &&
      localIPV4List.includes(clientIP) &&
      fileDirectory.fileDirectoryExportPath
    ) {
      const [ex] = await to(stat(fileDirectory.fileDirectoryExportPath));
      if (ex) {
        return Result.fail('文件模块导出路径访问异常，请检查目录是否正确。');
      }
      // 删除
      clearDir(fileDirectory.fileDirectoryExportPath);
      const outputFileTasks = [];
      for (const [path, { id }] of fileDirectoryConfigPathList) {
        const templateContent = templateContentRecordMap.get(id) ?? '';
        outputFileTasks.push(
          outputFile(
            mergeUrl(`${fileDirectory.fileDirectoryExportPath}/${path}`),
            templateContent,
          ),
        );
      }
      await to(Promise.all(outputFileTasks));
      return res.send(
        Result.success({
          isOutputFile: true,
        }),
      );
    }
    // 其他IP地址访问，执行zip文件导出
    const zip = new JSZip();
    for (const exportFile of fileDirectoryConfigPathList) {
      const [path, { id, isFolder }] = exportFile;
      const templateContent = templateContentRecordMap.get(id) ?? '';
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
