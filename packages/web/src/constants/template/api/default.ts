import { Template } from '@/store/template/interface';
import { COMMON_HEAD } from './common';
import { DEFAULT_SELECT_API_TPL_ID } from '@/constants';

export default new Template({
  label: 'API',
  value: DEFAULT_SELECT_API_TPL_ID,
  formatCodeExtension: '.ts',
  builtIn: true,
  content: `${COMMON_HEAD}
let apiList = params.apiList;

config.typingList = [];
const apiCodeWrap = [];
const importApiCodeWrap = [];
const isTS = config.formatCodeExtension === 'typescript';
apiList = apiList.forEach((api) => {
  const p = [];
  if (isTS) {
    const responseDataSchema = config.dataKey ? utils.apihTemplate.getSchema(api.responseDataSchema, config.dataKey) : api.responseDataSchema;

    p.push(utils.apihTemplate.renderInterface(api.requestDataSchema, api, { paramType: 'request' }));
    p.push(utils.apihTemplate.renderInterface(api.requestExtraDataSchema, api, { paramType: 'request', isExtraData: true }));
    p.push(utils.apihTemplate.renderInterface(responseDataSchema, api, { paramType: 'response' }));
  }
  p.push(
    utils.apihTemplate.renderRequestFunction(api, {
      formatCodeExtension: config.formatCodeExtension
    })
  );
  apiCodeWrap.push(p.join(''));

  importApiCodeWrap.push(' ' + utils.apihTemplate.renderRequestFunctionName(api));
});

let apiCode = '';
let importApiCode = '';

if (config.onlyApiFunc === false) {
  if (config.headCodeText) {
    apiCode = config.headCodeText;
  }
  apiCode += \`import { processRequestFunctionConfig\${isTS ? ', RequestFunctionRestArgsType' : ''} } from '@api-helper/core/es';\\n\\n\`;
  if (isTS) {
    apiCode += "type CurrentRequestFunctionRestArgsType = RequestFunctionRestArgsType<typeof request>;\\n\\n"
  }
}
apiCode += apiCodeWrap.join('\\n');

if (importApiCodeWrap.length) {
  if (importApiCodeWrap.length > 2) {
    importApiCode = \`import {\\n\${importApiCodeWrap.join(', \\n')}\\n} from '@/api/index.\${isTS ? 'ts' : 'js'}';\`;
  } else {
    importApiCode = \`import {\${importApiCodeWrap.join(',')} } from '@/api/index.\${isTS ? 'ts' : 'js'}';\`
  }
}

return [apiCode, importApiCode].filter(Boolean);
};`,
});
