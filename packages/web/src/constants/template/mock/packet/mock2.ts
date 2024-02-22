import { Template } from '@/store/template/interface';
import { COMMON_HEAD } from '../common';

export default new Template({
  title: 'mock数据模版(简单识别数据类型)',
  id: 'mock_e25ffe69e3df23e5',
  formatCodeExtension: '.js',
  builtIn: true,
  content: `${COMMON_HEAD}
  // 返回模板集合.
  const result = [];

  const apiList = params.apiList;

  const temp = [];
  const mockDataKey = documentConfig.mockDataKey;
  const mockStringValue = documentConfig.mockStringValue;
  const mockNumberValue = documentConfig.mockNumberValue;
  const mockBooleanValue = documentConfig.mockBooleanValue;
  for (let i = 0; i < apiList.length; i++) {
    const api = apiList[i];
    const url = api.path;
    const path = api.path;
    const pathReg = path.replace(/\\{.*?\\}/gim, '(.*)');
    const methodUpperCase = api.method.toUpperCase();
    const responseDataSchema = apih.core.getSchema(api.responseDataSchema, mockDataKey);

    const codeText = apih.template.renderObject(responseDataSchema, api, {
      onlyBody: true,
      paramType: 'response',
      emptyBodyCode: 'null',
      formatter(schema) {
        const result = { useDefault: true, value: '' };
        const label = schema.label.toLowerCase();

        let mockValue = '';
        switch (schema.type) {
          case 'string':
              mockValue = lodash.random(0, 10) > 5 ? '@city' : '@cname';
              if (mockStringValue) {
                result.useDefault = false;
                if (label.includes('id')) {
                  mockValue = String(lodash.random(10000, 20000));
                } else if (label.includes('日期')) {
                  mockValue = '2024-02-21';
                } else if (label.includes('时间')) {
                  mockValue = '2024-02-21 01:05:09';
                }
                result.value = \`"\${mockValue}"\`;
                return result;
              }
           case 'number':
              if (mockNumberValue !== '' && mockNumberValue != null) {
                result.useDefault = false;
                result.value = \`\${mockNumberValue}\`;
                return result;
              }
         case 'boolean':
              if (mockBooleanValue !== '' && mockBooleanValue != null) {
                result.useDefault = false;
                result.value = \`\${mockBooleanValue}\`;
                return result;
              }
        }
        return result;
      }
    });
    temp.push(\`
    /**
     * @description \${[api.title, api.description].filter(Boolean).join('、')}
     * @url [ \${methodUpperCase} ] \${path}
     */
     {
       url: '\${pathReg}',
       method: '\${methodUpperCase}',
       mockData: \${ codeText == "null" ? null : \`Mock.mock(\${codeText})\` },
     },
    \`);
  }

  const codeText = \`[\${temp.join('\\n\\n')}]\`;

  result.push({
    title: 'mock数据模版',
    content: codeText,
  });

  return result;
};`,
});
