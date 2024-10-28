import https from 'https';
import axios, {
  AxiosRequestConfig,
} from 'axios';
import { REQUEST_TIMEOUT } from '@api-helper/core/lib/constant';

const request = axios.create({
  timeout: REQUEST_TIMEOUT,
});

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
    return Promise.reject(error);
  },
);

export default request;
