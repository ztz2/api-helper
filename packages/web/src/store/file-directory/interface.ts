import { merge } from 'lodash';
import { APIHelper } from '@api-helper/core';
import type { SelectOptionData } from '@arco-design/web-vue';

import { randomChar } from '@/utils';
import { Template } from '@/store/template/interface';
import { DocumentConfig } from '../document-config/interface';

export class FileDirectory {
  // 唯一ID
  id = '';
  // 名称
  title = '';
  // 文件模块生成路径
  fileDirectoryExportPath = '';
  // 文件目录配置信息
  fileDirectoryConfigList: Array<FileDirectoryConfig> = [];
  // 是否内置模板
  builtIn = false;
  // 文档配置信息
  documentConfig: DocumentConfig = new DocumentConfig();
  constructor(options?: Partial<FileDirectory>) {
    options && merge(this, options);
  }
}

export class FileDirectoryConfig implements SelectOptionData {
  // 文件(夹)ID
  id = '';
  // 文件(夹)标题
  title = '';
  // 是否为文件夹
  isFolder = false;
  // 选择的模版内容索引
  templateContentIndex = 0;
  // 选择的api对象
  api = {} as APIHelper.API;
  // 选择的apiId
  apiId = '';
  // 选择的模版
  template = {} as Template;
  // 选择的模版的id
  templateId = '';
  // 选择的请求数据字段集合
  requestDataSchemaIds: string[] = [];
  requestDataSchemaList: Array<APIHelper.Schema> = [];
  // 选择的响应数据字段集合
  responseDataSchemaIds: string[] = [];
  responseDataSchemaList: Array<APIHelper.Schema> = [];
  // 子文件(夹)-文件目录配置信息
  children: Array<FileDirectoryConfig> = [];
  constructor(options?: Partial<FileDirectoryConfig>) {
    options && merge(this, options);
  }
}

export function createFileDirectory(options?: Partial<FileDirectory>, autoGenId = false) {
  const model = new FileDirectory(options);
  if (autoGenId) {
    model.id = randomChar(16);
  }
  return model;
}

export function createFileDirectoryConfig(options?: Partial<FileDirectoryConfig>, autoGenId = false) {
  const model = new FileDirectoryConfig(options);
  if (autoGenId) {
    model.id = randomChar(16);
  }
  return model;
}
