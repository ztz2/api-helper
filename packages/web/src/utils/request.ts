import axios from 'axios';
import { Message } from '@arco-design/web-vue';

const request = axios.create({
  timeout: 30000,
});

request.interceptors.response.use(
  response => {
    const data = response.data;
    if (data.code === 200 || data.code === 1000) {
      return data.data;
    }
    Message.error(data.message);
    return Promise.reject(data.message);
  },
  error => Promise.reject(error),
);

export default request;
