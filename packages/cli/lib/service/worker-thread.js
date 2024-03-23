"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = require("@api-helper/template");
const node_worker_threads_1 = require("node:worker_threads");
if (!node_worker_threads_1.isMainThread) {
    const { isTS, param, categoryList, } = node_worker_threads_1.workerData;
    let code = (0, template_1.renderAllApi)(categoryList, param) || '';
    let codeDeclare = '';
    if (!code.endsWith('\n')) {
        code += '\n';
    }
    if (!isTS) {
        param.isDeclare = true;
        param.codeType = 'typescript';
        codeDeclare = (0, template_1.renderAllApi)(categoryList, param);
        if (!codeDeclare.endsWith('\n')) {
            codeDeclare += '\n';
        }
    }
    node_worker_threads_1.parentPort === null || node_worker_threads_1.parentPort === void 0 ? void 0 : node_worker_threads_1.parentPort.postMessage({ code, codeDeclare });
}
