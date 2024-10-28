import https from 'https';
import axios from 'axios';
import { REQUEST_TIMEOUT } from '@api-helper/core/lib/constant';
var request = axios.create({
    timeout: REQUEST_TIMEOUT,
});
request.interceptors.request.use(function (config) {
    config.httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    });
    return config;
});
request.interceptors.response.use(function (response) {
    var config = response.config;
    if (response.data.errcode) {
        return Promise.reject(response.data.errmsg);
    }
    return config.dataKey ? response.data[config.dataKey] : response.data;
}, function (error) {
    return Promise.reject(error);
});
export default request;
