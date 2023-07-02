import axios, { AxiosRequestConfig } from 'axios';

const request = axios.create({
  timeout: 30000,
});

request.interceptors.response.use(
  (response) => {
    const config: AxiosRequestConfig & Recordable = response.config;
    if (response.data.errcode) {
      return Promise.reject(response.data.errmsg);
    }
    return config.dataKey ? response.data[config.dataKey] : response.data;
  },
  (error) => Promise.reject(error),
);

export default request;
