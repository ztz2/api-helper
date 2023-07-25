"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constant_1 = require("@api-helper/core/lib/constant");
var formatCodeRequest = axios_1.default.create({
    timeout: constant_1.REQUEST_TIMEOUT,
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
exports.default = formatCodeRequest;
