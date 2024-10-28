"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const axios_1 = __importDefault(require("axios"));
const constant_1 = require("@api-helper/core/lib/constant");
const request = axios_1.default.create({
    timeout: constant_1.REQUEST_TIMEOUT,
});
request.interceptors.request.use((config) => {
    config.httpsAgent = new https_1.default.Agent({
        rejectUnauthorized: false,
    });
    return config;
});
request.interceptors.response.use((response) => {
    const config = response.config;
    if (response.data.errcode) {
        return Promise.reject(response.data.errmsg);
    }
    return config.dataKey ? response.data[config.dataKey] : response.data;
}, (error) => {
    return Promise.reject(error);
});
exports.default = request;
