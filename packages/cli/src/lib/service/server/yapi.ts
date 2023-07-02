import qs from 'qs';
import { OpenAPI } from 'openapi-types';

import request from '@/lib/tools/request';
import { RequestParams } from './index';
import log from "@/lib/tools/log";
import {AxiosRequestConfig} from "axios";

const PROJECT_API = '/api/project/get';
const MENU_API = '/api/interface/getCatMenu';
const API_List = '/api/interface/list';
const DETAIL_API = '/api/interface/get';


// 该功能待实现
export default async function getYAPIDocumentList(params: RequestParams): Promise<Array<OpenAPI.Document>> {
  // 获取项目基本信息
  const projectInfo: Recordable = await request(processRequestConfig(params, PROJECT_API)).catch((e) => {
    log.error('提示', e as string);
    return Promise.reject(e);
  });

  const projectId = projectInfo._id;

  // 获取所有分类
  const menuList = await request(processRequestConfig(params, MENU_API, {
    project_id: projectId
  })).catch((e) => {
    log.error('提示', e as string);
    return Promise.reject(e);
  });

  // 获取所有接口
  const apiList = await request(processRequestConfig(params, API_List, {
    page: 1,
    limit: 10000,
    project_id: projectId,
  })).then((res) => {
    return (res as Recordable)?.list ?? [];
  }).catch((e) => {
    log.error('提示', e as string);
    return Promise.reject(e);
  });

  // TODO 接口详情
  return [];
}

function pathMerge(b = '', p = '') {
  if (b.endsWith('/') && p.startsWith('/')) {
    p = p.slice(1);
  }
  return b + p;
}

function processRequestConfig(params: RequestParams, apiPath: string, queryParams: Recordable = {}): AxiosRequestConfig {
  const { url, auth, authToken } = params;
  const requestConfig: AxiosRequestConfig & Recordable = {
    url: pathMerge(params.url, apiPath),
    method: 'get',
    dataKey: 'data',
  };
  // 有密码
  if (auth?.username && auth?.password) {
    requestConfig.auth = {
      username: auth?.username,
      password: auth?.password
    };
  }
  // 有token
  if (authToken) {
    queryParams.token = authToken;
    requestConfig.headers = { token: authToken };
  }

  const queryParamsStr = qs.stringify(queryParams);

  if (queryParamsStr) {
    requestConfig.url += `?${queryParamsStr}`;
  }

  return requestConfig;
}
