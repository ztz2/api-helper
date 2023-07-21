import axios from 'axios';
import { REQUEST_TIMEOUT } from '@api-helper/core/lib/constant';

const request = axios.create({
  timeout: REQUEST_TIMEOUT,
});

request.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default request;
