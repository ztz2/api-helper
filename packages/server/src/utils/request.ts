import axios from 'axios';

const request = axios.create({
  timeout: 30000,
});

request.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default request;
