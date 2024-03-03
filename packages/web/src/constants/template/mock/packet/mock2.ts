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

  // 根据label和keyName匹配指定value
  function matchText(rules, label, keyName) {
    rules = rules || [];
    label = label || '';
    keyName = keyName || '';
    if (!label && !keyName) {
      return '';
    }
    try {
      for (const item of rules) {
        const value = item.value || '';
        const labelList = (item.label || '').split('|');
        const keyNameList = (item.keyName || '').split('|');
        if (label) {
          for (const str of labelList) {
            if (str && str.trim && str.trim() !== '' && label.includes(str)) {
              return value;
            }
          }
        }
        if (keyName) {
          for (const str of keyNameList) {
            if (str && str.trim && str.trim() !== '' && keyName.includes(str)) {
              return value;
            }
          }
        }
      }
    } catch {
      return '';
    }
    return '';
  }

  // 随机生成身份证号码
  function randomIDNo() {
    let coefficientArray = ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2']; // 加权因子
    let lastNumberArray = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']; // 校验码
    let address = '510' + String(lodash.random(100, 450)); // 住址
    let birthday = String(lodash.random(1990, 2005)) + String(lodash.random(10, 12)) + String(lodash.random(10, 27)); // 生日
    let s =
      Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
    let array = (address + birthday + s).split('');
    let total = 0;
    for (let i in array) {
      total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
    }
    let lastNumber = lastNumberArray[parseInt(total % 11)];
    return address + birthday + s + lastNumber;
  }

  const numberRules = [
    { value: '@integer(100000, 999999)', label: 'id|账号', keyName: 'id' },
    { value: '@integer(0, 1)', label: '性别', keyName: 'gender,sex' },
    { value: '@integer(18, 48)', label: '龄|试用期|数量', keyName: 'age' },
    { value: '@integer(90, 190)', label: '体重', keyName: '' },
    { value: '@integer(90, 120)', label: '分数|学分|总分', keyName: '' },
    { value: '@integer(160, 190)', label: '身高|统计|总数|总计|总量', keyName: '' },
    { value: '@integer(1024, 10240)', label: '文件大小|子节', keyName: 'fileSize' },
    { value: '@integer(3000, 25000)', label: '薪酬|工资|薪水', keyName: 'salary' },
  ];

  function pickDirective(array = []) {
    return \`@pick(\${JSON.stringify(array)})\`.replace(/"/gim, "'");
  }

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
        const keyName = schema.keyName.toLowerCase();

        let mockValue = '';
        switch (schema.type) {
          case 'string': case 'unknown':
            if (schema.enum && schema.enum.length > 0) {
              mockValue = pickDirective(schema.enum);
            } else {
              mockValue = matchText(
                [
                  { value: randomIDNo(), label: '身份证', keyName: 'idCard' },
                  { value: '@cword(50, 1000)', label: '备注|描述|摘要', keyName: 'remark|description|doc' },
                  { value: '@cname', label: '姓名|名字|昵称', keyName: 'name' },
                  { value: \`@image('520x520', '#55efc4', '#fff', 'png', 'API Helper')\`, label: 'URL地址|图片|相片|照片', keyName: 'url' },
                  { value: pickDirective(['.png', '.jpg', '.jpeg']), label: '后缀名', keyName: 'extension' },
                  { value: '@date()', label: '日期', keyName: 'date' },
                  { value: '@datetime()', label: '时间', keyName: 'time' },
                  { value: /^1[3456789]\\d\\{9\\}$/, label: '手机', keyName: 'phone' },
                ].concat(numberRules),
                label,
                keyName
              );
            }
            mockValue = mockValue || '@cword(2, 30)';
            result.value = typeof mockValue === 'string' ? \`"\${mockValue}"\` : mockValue;
            result.useDefault = false;
            return result;
          case 'number':
            mockValue = matchText(numberRules, label, keyName);
            mockValue = mockValue || '@integer(1, 5)';
            result.value = typeof mockValue === 'string' ? \`"\${mockValue}"\` : mockValue;
            result.useDefault = false;
            return result;
          case 'boolean':
            mockValue = mockValue || '@boolean()';
            result.value = typeof mockValue === 'string' ? \`"\${mockValue}"\` : mockValue;
            result.useDefault = false;
            return result;
        }
        return result;
      },
    });
    temp.push(\`
    /**
     * @description \${[api.title, api.description].filter(Boolean).join('、')}
     * @url [ \${methodUpperCase} ] \${path}
     */
     {
       url: '\${pathReg}',
       method: '\${methodUpperCase}',
       mockData: \${
        codeText == 'null'
          ? null
          : \`() => ({
             mockData: Mock.mock(\${codeText}),
           })\`
       },
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
