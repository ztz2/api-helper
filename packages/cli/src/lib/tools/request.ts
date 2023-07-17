import https from 'https';
import axios, {AxiosError, AxiosRequestConfig} from 'axios';

import log from '@/lib/tools/log';

const request = axios.create({
  timeout: 30000,
});

const uniqueStatusMesMemo: string[] = [];
const codeMessage: Record<number, string> = {
  // 200: '服务器成功返回请求的数据。',
  // 201: '新建或修改数据成功。',
  // 202: '一个请求已经进入后台排队（异步任务）。',
  // 204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  // 404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}
request.interceptors.request.use((config) => {
  config.httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });
  return config;
});
request.interceptors.response.use(
  (response) => {
    const config: AxiosRequestConfig & Recordable = response.config;
    if (response.data.errcode) {
      return Promise.reject(response.data.errmsg);
    }
    return config.dataKey ? response.data[config.dataKey] : response.data;
  },
  (error) => {
    const status = error?.response?.status;
    const errorMsg = codeMessage[status];
    const uniqueStatus = getUniqueStatus(error);
    const documentServerUrl = error?.config?.documentServerUrl ? ` 【${error?.config?.documentServerUrl}】` : '';

    if (errorMsg) {
      if (!uniqueStatusMesMemo.includes(uniqueStatus)) {
        uniqueStatusMesMemo.push(uniqueStatus);
        log.error('提示', `${status} ${errorMsg}${documentServerUrl}`)
      }
    }

    return Promise.reject(error);
  },
);

function getUniqueStatus(error: (AxiosError & { config: { documentServerUrl?: string } })) {
  return (error?.config?.documentServerUrl ?? '') + (error?.response?.status ?? '');
}

export default request;
