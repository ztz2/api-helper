# CLI配置说明 {#CLI配置说明}

## `documentServers` {#documentServers}
:::warning 必填项
:::

访问swagger文档服务地址集合，源JSON文档配置资源【或者文档html地址，会解析出全部项目（仅支持Swagger2.0）】
具体配置参考下面代码例子以及注释说明
* `documentServers.url`  <strong style="color:var(--vt-c-yellow-dark);">[ 必填项 ]</strong> 文档地址
* `documentServers.type`  <strong style="color:var(--vt-c-yellow-dark);">[ 必填项 ]</strong> 文档类型（也可以是本地文档JSON文件路径），默认可以解析 swagger ，其他文档 custom 类型，需要自行实现 onParseDocument 钩子函数
* `documentServers.dataKey`  获取数据的key，body[dataKey]
* `documentServers.auth.username`  访问文档可能需要认证信息，http auth验证方式
* `documentServers.auth.password`  访问文档可能需要认证信息，http auth验证方式
* `documentServers.authToken`  访问文档可能需要认证信息，通过使用token访问
* `documentServers.events`  执行过程的回调事件
* `documentServers.events.onGenerateInterfaceName`  自定义生成接口名称
* `documentServers.events.onParseDocument`  自定义解析接口文档
```typescript
import { APIHelper, GenerateInterfaceName } from '@api-helper/core';
const APIH_CONFIG: Config = {
  documentServers: [
    {
      // 文档地址
      url: 'http://domian.com/swaggerApi.json',
      // 文档类型（也可以是本地文档JSON文件路径），默认可以解析 swagger ，其他文档 custom 类型，需要自行实现 onParseDocument 钩子函数
      type: 'swagger',
      // 获取数据的key，body[dataKey]
      dataKey: '',
      // 访问文档可能需要认证信息，http auth验证方式
      // auth: {
      //   username: '',
      //   password: '',
      // },
      // 访问文档可能需要认证信息，通过使用token访问
      // authToken: '',
      // 执行过程的回调
      // events: {
        // 自定义生成接口名称
        // onGenerateInterfaceName(schema, api, options): string {},
        // 自定义解析接口文档
        // onParseDocument(resourceDocumentList: Array<unknown>): APIHelper.Document[] {},
      // }
    }
  ]
};
```

## `requestFunctionFilePath` {#requestFunctionFilePath}
:::warning 必填项
:::

request函数文件路径

```typescript
import { Config } from '@api-helper/cli';
const APIH_CONFIG: Config = {
  requestFunctionFilePath: 'src/utils/request'
};
```

## `output` {#output}
:::warning 必填项
:::

文件输出配置对象

* `output.path` 文件输出路径
* `output.filename` 输出文件名称，会根据文件后缀名(.ts|.js)判断是生成TS文件还是JS文件。

```typescript
import { join } from 'path';
import { Config } from '@api-helper/cli';
const APIH_CONFIG: Config = {
  config: {
    path: join(__dirname, 'api'),
    filename: 'index.ts',
  }
};
```
