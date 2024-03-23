import { renderAllApi } from '@api-helper/template';
import { parentPort, isMainThread, workerData } from 'node:worker_threads';
if (!isMainThread) {
    var isTS = workerData.isTS, param = workerData.param, categoryList = workerData.categoryList;
    var code = renderAllApi(categoryList, param) || '';
    var codeDeclare = '';
    if (!code.endsWith('\n')) {
        code += '\n';
    }
    if (!isTS) {
        param.isDeclare = true;
        param.codeType = 'typescript';
        codeDeclare = renderAllApi(categoryList, param);
        if (!codeDeclare.endsWith('\n')) {
            codeDeclare += '\n';
        }
    }
    parentPort === null || parentPort === void 0 ? void 0 : parentPort.postMessage({ code: code, codeDeclare: codeDeclare });
}
