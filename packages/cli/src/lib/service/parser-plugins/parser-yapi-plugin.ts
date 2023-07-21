import to from 'await-to-js';
import { ParserYapi } from '@api-helper/core';
import { mergeUrl, getErrorMessage } from '@api-helper/core/lib/utils/util';

import { Config } from '@/lib';
import log from '@/lib/tools/log';
import request from '@/lib/tools/request';
import { processRequestConfig } from '@/lib/tools/util';
import {AbstractParserPlugin, ParserPluginOptions, ParserPluginRunResult} from '@/lib/types';

type DocumentServers = Config['documentServers'];
type DocumentServer = DocumentServers[number];

const PROJECT_API = '/api/project/get';
const MENU_API = '/api/interface/getCatMenu';
const API_List = '/api/interface/list';
const API_DETAIL = '/api/interface/get';

export default class ParserYapiPlugin implements AbstractParserPlugin {
  name = 'yapi';
  async run(documentServers: DocumentServers, options: ParserPluginOptions = {}){
    const result: ParserPluginRunResult = [];

    if (documentServers.length === 0) {
      return result;
    }

    const dsTasks = [];
    for (const documentServer of documentServers) {
      const errorServerText = `【${documentServer.url}】`;
      const requestConfig = processRequestConfig(documentServer);
      dsTasks.push((async () => {
        // 获取项目基本信息
        const projectInfo: Recordable = await fetchProjectInfo(documentServer).catch((e) => {
          log.error('提示', `获取项目基本信息失败${getErrorMessage(e, ': ')}${errorServerText}`);
          return Promise.reject(e);
        });

        const projectId = projectInfo._id;

        // 获取所有分类
        const categoryList = await fetchMenuList(documentServer, { projectId }).catch((e) => {
          log.error('提示', `获取菜单列表失败${getErrorMessage(e, ': ')}${errorServerText}`);
          return Promise.reject(e);
        });

        // 获取所有接口
        const apiList = await fetchApiList(documentServer, { projectId }).catch((e) => {
          log.error('提示', `获取接口列表数据失败${getErrorMessage(e, ': ')}${errorServerText}`);
          return Promise.reject(e);
        });

        if (apiList.length === 0) {
          return Promise.reject(`项目接口为空${errorServerText}`);
        }

        // 获取所有接口的详情
        const tasks = [];
        const errorApi = [];
        for (const api of apiList) {
          api.docURL = mergeUrl(requestConfig.origin, `/project/${projectId}/interface/api/${api._id}`);
          tasks.push(
            fetchApiDetail(documentServer, { id: api._id }).then((res) => {
              api.content = res;
            }).catch((e) => {
              errorApi.push([api, e]);
              return Promise.reject(e);
            })
          );
        }

        await to(Promise.all(tasks));

        if (errorApi.length === apiList.length) {
          log.verbose('error', `接口详情获取失败${errorServerText}`);
          return Promise.reject(`接口详情获取失败${errorServerText}`);
        }

        const parsedDocumentList = await new ParserYapi({
          ...options,
          apiList,
          projectInfo: projectInfo as any,
          categoryList: categoryList as any,
        }).parser();

        if (parsedDocumentList.length === 0) {
          log.error('提示', `${documentServer.url} 解析yapi配置失败${errorServerText}`);
        }

        result.push({
          documentServer,
          parsedDocumentList
        });
      })());
    }

    await to(Promise.all(dsTasks));

    return result;
  }
}

function fetchProjectInfo(documentServer: DocumentServer) {
  return request(processRequestConfig(documentServer, { path: PROJECT_API, dataKey: 'data' }));
}

function fetchMenuList(documentServer: DocumentServer, params: Recordable) {
  return request(processRequestConfig(documentServer, {
    path: MENU_API,
    dataKey: 'data',
    queryParams: {
      project_id: params.projectId
    },
  }));
}

function fetchApiList(documentServer: DocumentServer, params: Recordable) {
  return request(processRequestConfig(documentServer, {
    path: API_List,
    dataKey: 'data',
    queryParams: {
      page: 1,
      limit: 10000,
      project_id: params.projectId,
    },
  })).then((res) => {
    return (res as Recordable)?.list ?? [];
  });
}

function fetchApiDetail(documentServer: DocumentServer, params: Recordable) {
  return request(processRequestConfig(documentServer, {
    path: API_DETAIL,
    dataKey: 'data',
    queryParams: {
      id: params.id,
    },
  }));
}
