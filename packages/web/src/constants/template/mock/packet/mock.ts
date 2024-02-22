import { Template } from '@/store/template/interface';
import { COMMON_HEAD } from '../common';

export default new Template({
  title: 'mock数据模版',
  id: 'mock_fe5few69f5df9fe8',
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
        switch (schema.type) {
          case 'string':
              if (mockStringValue) {
                result.useDefault = false;
                result.value = \`"\${mockStringValue}"\`;
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
