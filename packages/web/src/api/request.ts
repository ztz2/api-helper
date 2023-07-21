import axios from 'axios';
import { REQUEST_TIMEOUT } from '@api-helper/core/lib/constant';

import message from '@/utils/message';

const request = axios.create({
  timeout: REQUEST_TIMEOUT,
});

request.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data.code === 200 || data.code === 1000) {
      return data.data;
    }
    message.error(data.message);
    return Promise.reject(data.message);
  },
  (error) => {
    message.error('服务异常');
    return Promise.reject(error);
  },
);

export default request;
