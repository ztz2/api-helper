import { COMMON_HEAD } from '../common';
import { Template } from '@/store/template/interface';

export default new Template({
  label: '请求接口模板（Javascript）',
  value: 'API_JS_2f23E2C3Ugn4l2I23Y2S5',
  formatCodeExtension: '.ts',
  builtIn: true,
  content: `${COMMON_HEAD}
  // 返回模板集合.
  const result = [];

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

if (apiCode) {
  result.push({
    title: '请求接口模板（Javascript）',
    content: apiCode,
  });
}

if (importApiCode) {
  result.push({
    title: '导出接口名称模板',
    content: importApiCode,
  });
}

return result;
};`,
});
