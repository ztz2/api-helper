import { ParserYapi } from '@api-helper/core';

import { Config } from '@/lib';
import log from '@/lib/tools/log';
import request from '@/lib/tools/request';
import { processRequestConfig } from '@/lib/tools/util';
import { AbstractParserPlugin, ParserPluginRunResult } from '@/lib/types';

type DocumentServers = Config['documentServers'];
type DocumentServer = DocumentServers[number];

const PROJECT_API = '/api/project/get';
const MENU_API = '/api/interface/getCatMenu';
const API_List = '/api/interface/list';
const API_DETAIL = '/api/interface/get';

export default class ParserYapiPlugin implements AbstractParserPlugin {
  name = 'yapi';
  async run(documentServers: DocumentServers){
    const result: ParserPluginRunResult = [];

    if (documentServers.length === 0) {
      return result;
    }

    const dsTasks = [];
    for (const documentServer of documentServers) {
      dsTasks.push((async () => {
        // 获取项目基本信息
        const projectInfo: Recordable = await fetchProjectInfo(documentServer);

        const projectId = projectInfo._id;

        // 获取所有分类
        const categoryList = await fetchMenuList(documentServer, { projectId });

        // 获取所有接口
        const apiList = await fetchApiList(documentServer, { projectId });

        // 获取所有接口的详情
        const tasks = [];
        for (const api of apiList) {
          tasks.push(
            fetchApiDetail(documentServer, { id: api._id }).then((res) => {
              api.content = res;
            })
          );
        }
        try {
          await Promise.all(tasks);
        } catch {}

        const parsedDocumentList = await new ParserYapi({
          projectInfo: projectInfo as any,
          categoryList: categoryList as any,
          apiList,
        }).parser();

        if (parsedDocumentList?.length > 0) {
          result.push({
            documentServer,
            parsedDocumentList
          });
        }
      })());
    }

    try {
      await Promise.all(dsTasks);
    } finally {}

    return result;
  }
}

function fetchProjectInfo(documentServer: DocumentServer) {
  return request(processRequestConfig(documentServer, { path: PROJECT_API, dataKey: 'data' })).catch((e) => {
    log.error('提示', e as string);
    return Promise.reject(e);
  })
}

function fetchMenuList(documentServer: DocumentServer, params: Recordable) {
  return request(processRequestConfig(documentServer, {
    path: MENU_API,
    dataKey: 'data',
    queryParams: {
      project_id: params.projectId
    },
  })).catch((e) => {
    log.error('提示', e as string);
    return Promise.reject(e);
  })
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
  }).catch((e) => {
    log.error('提示', e as string);
    return Promise.reject(e);
  })
}

function fetchApiDetail(documentServer: DocumentServer, params: Recordable) {
  return request(processRequestConfig(documentServer, {
    path: API_DETAIL,
    dataKey: 'data',
    queryParams: {
      id: params.id,
    },
  })).catch((e) => {
    log.error('提示', e as string);
    return Promise.reject(e);
  })
}
