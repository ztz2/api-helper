import { camelCase, pascalCase } from 'change-case';

import { AhAPI, AhProject } from '@/core/interface';
import { RenderAPIConfig } from '@/views/generate/interface';

export * from 'change-case';
export { checkType } from '@/utils';
export { generateModel } from '../render';

export function getPureRequestFunctionName(requestFunctionName: string, api: AhAPI) {
  const by = pascalCase(`By ${api.method}`);
  if (requestFunctionName.endsWith(by)) {
    requestFunctionName = requestFunctionName.slice(0, requestFunctionName.length - by.length);
  }
  return requestFunctionName;
}
export function generateRequestFunctionName(params: {
  api: AhAPI,
  apiList: Array<AhAPI>,
  project: AhProject,
  suffix: boolean
}, config: RenderAPIConfig) {
  let text = '';
  if (config.generateNameByBasePath) {
    text += params.project.basePath;
  }
  text += params.api.url + (params.suffix ? ` by ${params.api.method} ` : '');
  return camelCase(text);
}

export function generateName(params: {
  api: AhAPI,
  requestFunctionName: string,
  prefix?: string,
  type: 'camelCase' | 'pascalCase'
}, type: 'request' | 'response' = 'request') {
  const by = pascalCase(`By ${params.api.method}`);
  const text = (params.prefix ? `${params.prefix} ` : '') + `${getPureRequestFunctionName(params.requestFunctionName, params.api)} ${type} ${by}`;
  return params.type === 'camelCase' ? camelCase(text) : pascalCase(text);
}

export function generateRequestURL(params: { api: AhAPI }) {
  const { url } = params.api;
  if (url.includes('{')) {
    return url.replace(/\{/gim, '${data.');
  }
  return url;
}

type ProcessAPI = {
  requestURL: string;
  requestFunctionName: string;
  requestParamsInterfaceName: string;
  responseParamsInterfaceName: string;
} & AhAPI;
export function processAPI(params: { api: AhAPI, apiList: Array<AhAPI>, project: AhProject }, config: RenderAPIConfig): ProcessAPI {
  const { api, apiList, project } = params;
  const requestFunctionName = generateRequestFunctionName({ api, apiList, project, suffix: true }, config);
  return { ...params.api, ...{
    requestURL: generateRequestURL({ api }),
    requestFunctionName: requestFunctionName,
    requestDataClassName: generateName({ api, requestFunctionName, type: 'pascalCase' }, 'request'),
    responseDataClassName: generateName({ api, requestFunctionName, type: 'pascalCase' }, 'response'),
    requestDataMapName: generateName({ api, requestFunctionName, type: 'camelCase' }, 'request'),
    responseDataMapName: generateName({ api, requestFunctionName, type: 'camelCase' }, 'response'),
    requestParamsInterfaceName: generateName({ api, requestFunctionName, prefix: 'I', type: 'pascalCase' }, 'request'),
    responseParamsInterfaceName: generateName({ api, requestFunctionName, prefix: 'I', type: 'pascalCase' }, 'response')
  }};
}

