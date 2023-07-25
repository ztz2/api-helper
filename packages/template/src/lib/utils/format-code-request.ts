import axios from 'axios';
import { REQUEST_TIMEOUT } from '@api-helper/core/lib/constant';

const formatCodeRequest = axios.create({
  timeout: REQUEST_TIMEOUT,
});
formatCodeRequest.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data.code === 200 || data.code === 1000) {
      return data.data;
    }
    return Promise.reject(data);
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default formatCodeRequest;
