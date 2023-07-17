# 生成API代码
解析API文档，生成整个项目的API请求代码，请求参数响应数据TS类型申明。

> API生成特点
- 支持多个API项目（依赖多个API项目，一次性生成API）
- 自定义解析扩展（支持自定义解析，不限制文档类型，更好的功能扩展）
- 请求参数兼容（对象和数组参数的兼容）

![API代码](/images/api-code.png)

## 安装
```shell
pnpm install @api-helper/cli @api-helper/core
```

## 开始
### 步骤一
定义 `request.ts` 请求工具，用于统一管理请求。
以 `axios` 为例，作为统一请求工具。
```typescript
import axios from 'axios';
import { RequestFunctionConfig } from '@api-helper/core/es/lib/helpers';

export default async function request<T>(config: RequestFunctionConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    axios({
      method: config.method,
      url: config.path,
      data: config.data,
    }).then((res) => {
      // 响应数据处理...
      resolve(res as unknown as T);
    }).catch((e) => reject(e));
  });
}
```

### 步骤二
初始化配置文件，终端输入`npx apih init`命令。
<div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt;</span> <span style="color:#A6ACCD;"></span>npx apih init</span></code></pre></div>

该命令用于生成配置文件，根据项目情况生成Typescript配置文件或者Javascript配置文件。

<div class="language-sh">
<pre><code>
<span style="color:#A6ACCD;">请选择配置文件类型? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">TypeScript</span> / JavaScript</span></span>
<span style="color:var(--vt-c-blue);">(*)</span> <span style="color:#A6ACCD;">TypeScript（apih.config.mjs）</span>
<span style="color:var(--vt-c-blue);">( )</span> <span style="color:#A6ACCD;">JavaScript（apih.config.ts）</span>
<span></span>
<span style="color:#A6ACCD;">配置文件已经生成：...</span>
<span style="color:#A6ACCD;">Done.</span>
</code></pre>
</div>

### 步骤三
将刚才创建的`request.ts`的文件路径，配置到的`requestFunctionFilePath`中。根据项目情况，修改接口文档地址`documentServers.url`。

### 步骤四
最后终端输入`npx apih`命令即可生成文档全部API。
<div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt;</span> <span style="color:#A6ACCD;">npx apih</span></span></code></pre></div>

在生成API过程中，会看见每一步的工作过程，可以根据提示，查看配置是否有异常。

<div class="language-sh"><pre><code>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">检测apih.config.(ts|js)配置文件是否存在</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">检测输出目录是否正确</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">检测 request 函数文件路径是否正确</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">通过 config.serverURL 获取文档</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">解析文档</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">生成代码</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">删除旧文件</span></span>
<span class="line"><span style="color:var(--vt-c-green);">√ </span><span style="color:#A6ACCD;">输出文件</span></span>
<span class="line"></span>
<span style="color:#A6ACCD;">API已经生成：...</span>
<span style="color:#A6ACCD;">Done.</span>
</code></pre></div>


## Config 对象文档说明
```typescript
import { defineConfig, Config } from '@api-helper/cli';
```
defineConfig 接收一个`Config` 对象或者`Config[]`，当需要生成多个API文件的时候，可以使用数组方式，以下文档时对Config对象的补充说明文档。


## `requestFunctionFilePath`
:::warning 必填项
:::

request函数文件路径

## `output`
:::warning 必填项
:::

文件输出配置对象

* `output.path` 文件输出路径
* `output.filename` 输出文件名称，会根据文件后缀名(.ts|.js)判断是生成TS文件还是JS文件。

## `documentServers`
:::warning 必填项
:::
接口文档服务相关配置。
* `documentServers.url` <strong style="color:var(--vt-c-yellow-dark);">[ 必填项 ]</strong> 文档地址【当下面的type为swagger类型时，可以读取本地文件，这里就是一个本地文件路径】
* `documentServers.type` <strong style="color:var(--vt-c-yellow-dark);">[ 必填项 ]</strong> 文档类型('swagger'或'yapi')，根据文档类型，调用内置的解析器，默认值: 'swagger'【内置yapi和swagger的解析，其他文档类型，添加parserPlugins自行实现文档解析】
* `documentServers.dataKey` 获取响应数据的key，body[dataKey]
* `documentServers.auth.username` 用户名，访问文档可能需要认证信息，http auth验证方式
* `documentServers.auth.password` 密码，访问文档可能需要认证信息，http auth验证方式
* `documentServers.authToken` token验证，访问文档可能需要认证信息，yapi需要
* `documentServers.events`  执行过程的回调事件
* `documentServers.events.onRenderInterfaceName` 自定义生成接口名称


## `parserPlugins`
文档解析插件，当项目文档不是swagger和yapi，则需要定一个解析插件处理文档。详细参考：AbstractParserPlugin 抽象类注释说明。
