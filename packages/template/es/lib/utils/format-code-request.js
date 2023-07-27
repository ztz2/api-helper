import axios from 'axios';
import { REQUEST_TIMEOUT } from '@api-helper/core/lib/constant';
var formatCodeRequest = axios.create({
    timeout: REQUEST_TIMEOUT,
});
formatCodeRequest.interceptors.response.use(function (response) {
    var data = response.data;
    if (data.code === 200 || data.code === 1000) {
        return data.data;
    }
    return Promise.reject(data);
}, function (error) {
    return Promise.reject(error);
});
export default formatCodeRequest;
