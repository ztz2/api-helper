import { renderAllApi } from '@api-helper/template';
import { parentPort, isMainThread, workerData } from 'node:worker_threads';
if (!isMainThread) {
  const {
    isTS,
    param,
    categoryList,
  } = workerData;

  let code = renderAllApi(categoryList, param as any) || '';
  let codeDeclare =  '';
  if (!code.endsWith('\n')) {
    code += '\n';
  }
  if (!isTS) {
    param.isDeclare = true;
    param.codeType = 'typescript';
    codeDeclare = renderAllApi(categoryList, param as any);
    if (!codeDeclare.endsWith('\n')) {
      codeDeclare += '\n';
    }
  }

  parentPort?.postMessage({ code, codeDeclare });
}
