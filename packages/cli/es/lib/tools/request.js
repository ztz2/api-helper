import https from 'https';
import axios from 'axios';
import { REQUEST_TIMEOUT } from '@api-helper/core/lib/constant';
import log from '../../lib/tools/logger';
var request = axios.create({
    timeout: REQUEST_TIMEOUT,
});
var uniqueStatusMesMemo = [];
var codeMessage = {
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
};
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
    var _a, _b, _c;
    var status = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status;
    var errorMsg = codeMessage[status];
    var uniqueStatus = getUniqueStatus(error);
    var documentServerUrl = ((_b = error === null || error === void 0 ? void 0 : error.config) === null || _b === void 0 ? void 0 : _b.documentServerUrl) ? " \u3010".concat((_c = error === null || error === void 0 ? void 0 : error.config) === null || _c === void 0 ? void 0 : _c.documentServerUrl, "\u3011") : '';
    if (errorMsg) {
        if (!uniqueStatusMesMemo.includes(uniqueStatus)) {
            uniqueStatusMesMemo.push(uniqueStatus);
            log.error('提示', "".concat(status, " ").concat(errorMsg).concat(documentServerUrl));
        }
    }
    return Promise.reject(error);
});
function getUniqueStatus(error) {
    var _a, _b, _c, _d;
    return ((_b = (_a = error === null || error === void 0 ? void 0 : error.config) === null || _a === void 0 ? void 0 : _a.documentServerUrl) !== null && _b !== void 0 ? _b : '') + ((_d = (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.status) !== null && _d !== void 0 ? _d : '');
}
export default request;
