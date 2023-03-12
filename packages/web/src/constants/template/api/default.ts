import { COMMON_HEAD } from './common';
import { Template } from '@/store/template/interface';

export default new Template({ value: 'API_gAHoEYCIUVnAlqIifY9S5', label: 'API', default: true, content: `${COMMON_HEAD}
let apiList = params.apiList;

config.typingList = [];
const apiCodeWrap = [];
const importApiCodeWrap = [];
const isTS = config.codeType === 'typescript';
apiList = apiList.forEach((api) => {
  const p = [];
  p.push(
    utils.apih.generateRequestFunc(api, {
      codeType: config.codeType
    })
  );
  apiCodeWrap.push(p.join(''));

  importApiCodeWrap.push(' ' + utils.apih.generateRequestFunctionName(api));
});

let apiCode = '';
let importApiCode = '';

if (config.onlyApiFunc === false) {
  if (config.headCodeText) {
    apiCode = config.headCodeText;
  }
  apiCode += \`import { processRequestFunctionConfig\${isTS ? ', RequestFunctionRestArgsType' : ''} } from '@api-helper/core';\\n\\n\`;
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
};`});
