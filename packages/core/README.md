# validator-util
<a href="https://www.npmjs.com/org/api-helper"><img src="https://img.shields.io/npm/l/@api-helper/core" alt="Package License" /></a>

字符校验工具库，内置各种校验规则

- 💪 基于Typescript构建.
- ⚙️ 单元测试覆盖.
- ⚙️ Browser/Node/esModule support.


## 快速开始
### 安装
pnpm
```shell
pnpm install validator-util
```
yarn
```shell
yarn add validator-util
```
npm
```shell
npm install validator-util
```
### 使用
ES6
```javascript
import { isEmail } from 'validator-util';

isEmail('hello@world.com'); // -> true
```

支持Tree shaking的导入
```javascript
import isEmail from 'validator-util/es/is-email';

isEmail('hello@world.com'); // -> true
```

其他方式导入
```javascript
var validator = require('validator-util');

validator.isEmail('hello@world.com'); // -> true
```

浏览器中直接运行，复制文件`validator-util.js`或`validator-util.min.js`到项目中即可。
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>浏览器中直接运行</title>
</head>
<body>
<script src="validator-util.min.js"></script>
<script>
  window.validatorUtil.isEmail('hello@world.com'); // -> true
</script>
</body>
</html>
```

## API
| 方法名                 | 说明                                                                                                                                                          | 参数                                                                                                                                                                                                                                                            |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| isID                | 校验身份证，支持一代身份证、二代身份证                                                                                                                                         | (value: string, options:? { exact?: boolean }) => boolean <br/>`options.exact` 是否启用严谨校验，默认false，注意严谨校验不能用在第一代身份证。非严谨使用正则，严谨校验进行计算，计算规则参考“中国国家标准化管理委员会” [GB 11643-1999 公民身份证号码](http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=080D6FBF2BB468F9007657F26D60013E)   |
| isUSCI              | 法人和其他组织统一社会信用代码的合法性校验                                                                                                                                       | (value: string, options:? { exact?: boolean }) => boolean <br/>`options.exact` 是否启用严谨校验，默认false，非严谨使用正则，严谨校验进行计算，计算规则参考“中国国家标准化管理委员会” [GB 32100-2015 法人和其他组织统一社会信用代码编码规则](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=24691C25985C1073D3A7C85629378AC0) |
| isEmail             | 邮箱校验(兼容中文邮箱校验)                                                                                                                                              | (value: string) => boolean                                                                                                                                                                                                                                    |
| isPhone             | 手机号码和座机号码的联合校验                                                                                                                                              | (value: string, options:? { exact?: boolean }) => boolean <br/>`options.exact` 是否启用严谨校验，默认false，严谨校验根据工信部2019年最新公布的手机号段; 非严谨校验只要是13,14,15,16,17,18,19开头即可                                                                                                     |
| isMobilePhone       | 手机号码校验，例如: 008618311006933, +8617888829981, 19119255642                                                                                                     | (value: string, options:? { exact?: boolean }) => boolean <br/>`options.exact` 是否启用严谨校验，默认false，严谨校验根据工信部2019年最新公布的手机号段; 非严谨校验只要是13,14,15,16,17,18,19开头即可                                                                                                     |
| isTelPhone          | 座机号码校验，例如: 0936-4211235, 89076543, 010-12345678-1234                                                                                                        | (value: string) => boolean                                                                                                                                                                                                                                    |
| isIMEI              | 手机机身码(IMEI)校验                                                                                                                                               | (value: string) => boolean                                                                                                                                                                                                                                    |
| isTrainNumber       | 火车车次校验，例如: G1868, D102, D9, Z5, Z24, Z17                                                                                                                    | (value: string) => boolean                                                                                                                                                                                                                                    |
| isZhCN              | 中文/汉字校验，例如: 前端, 科学                                                                                                                                          | (value: string) => boolean                                                                                                                                                                                                                                    |
| isHtmlTag           | html标签校验(宽松匹配)，例如: `<div id="app"> 2333 </div>, <input type="text">, <br>`                                                                                  | (value: string) => boolean                                                                                                                                                                                                                                    |
| isDomainName        | 域名校验(非网址, 不包含协议)，例如: 例如: www.baidu.com, baidu.com, baidu.com.cn, api.baidu.com, nodejs.org, nodejs.cn , 反例: http://baidu.com, https://baidu.com, www.百度.com | (value: string) => boolean                                                                                                                                                                                                                                    |
| isHouseholdRegister | 户口薄校验，例如: 441421999707223115                                                                                                                                | (value: string) => boolean                                                                                                                                                                                                                                    |



## 身份证号码、法人和其他组织统一社会信用代码的合法性校验
校验身份证号码、法人和其他组织统一社会信用代码的合法性参考[IDCheck](https://github.com/bluesky335/IDCheck)，这是TS程序的实现方式。计算规则参考国家标准文件：

- **标准号：GB 11643-1999**：[公民身份证号码](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=080D6FBF2BB468F9007657F26D60013E)

- **标准号：GB 32100-2015**：[法人和其他组织统一社会信用代码编码规则](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=24691C25985C1073D3A7C85629378AC0)

> 注：由于早期部分试点地区推行 `法人和其他组织统一社会信用代码` 较早，会存在部分代码不符合国家标准的情况。但它们都是合法的代码，应当另行处理。
> 例如：
>
> **福建恒跃柳工机械销售有限公司**: `91350100M0001TGQXM` 计算出的校验位是 1 和 M 不符
>
> **厦门云上晴空航空科技有限公司**:`91350211M0000XUF46` 计算出的校验位是 R 和 6 不符
>
> **厦门黑脉网络科技有限公司**`91350203M0001FUE2P` 计算出的校验位是 J 和 P 不符

### Go语言版本
LiuWanLin [IDCheck](https://github.com/bluesky335/IDCheck)

## License
[MIT](https://opensource.org/licenses/MIT) Copyright (c) 2023-present, [ztz2](https://github.com/ztz2)
