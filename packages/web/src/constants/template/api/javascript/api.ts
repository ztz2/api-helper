import { COMMON_HEAD } from '../common';
import { DEFAULT_SELECT_API_TPL_ID } from '@/constants';
import { Template } from '@/store/template/interface';

export default new Template({
  label: '请求接口(javascript)',
  value: 'API_JS_2f23E2C3Ugn4l2I23Y2S5',
  formatCodeExtension: '.js',
  builtIn: true,
  content: `${COMMON_HEAD}
let apiList = params.apiList;

config.typingList = [];
const apiCodeWrap = [];
const importApiCodeWrap = [];

apiList = apiList.forEach((api) => {
  const p = [];
  p.push(
    apih.template.renderRequestFunction(api, {
      formatCodeExtension: config.formatCodeExtension
    })
  );
  apiCodeWrap.push(p.join(''));

  importApiCodeWrap.push(' ' + apih.template.renderRequestFunctionName(api));
});

let apiCode = '';
let importApiCode = '';

if (config.onlyApiFunc === false) {
  if (config.headCodeText) {
    apiCode = config.headCodeText;
  }
  apiCode += \`import { processRequestFunctionConfig } from '@api-helper/core/es';\\n\\n\`;
}
apiCode += apiCodeWrap.join('\\n');

if (importApiCodeWrap.length) {
  if (importApiCodeWrap.length > 2) {
    importApiCode = \`import {\\n\${importApiCodeWrap.join(', \\n')}\\n} from '@/api';\`;
  } else {
    importApiCode = \`import {\${importApiCodeWrap.join(',')} } from '@/api';\`
  }
}

return [apiCode, importApiCode].filter(Boolean);
};`,
});
