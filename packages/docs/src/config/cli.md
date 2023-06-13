# 生成API代码
解析API文档，生成整个项目的API请求代码，TS类型。
![API代码](/images/api-code.png)

## 安装
```shell
pnpm install @api-helper/cli @api-helper/core
```

## 开始
### 步骤一
定义 `request.ts` 请求工具，用于统一管理请求。
以 `axios` 为例，作为请求库。
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
终端输入`apih init`初始化生成配置文件
<div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt;</span> <span style="color:#A6ACCD;"></span>apih init</span></code></pre></div>

该命令用于生成配置文件，根据项目情况生成Typescript配置文件或者Javascript配置文件。

<div class="language-sh">
<pre><code>
<span style="color:#A6ACCD;">请选择配置文件类型? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline">TypeScript</span> / JavaScript</span></span>
<span style="color:var(--vt-c-blue);">(*)</span> <span style="color:#A6ACCD;">TypeScript（apih.config.ts）</span>
<span style="color:var(--vt-c-blue);">( )</span> <span style="color:#A6ACCD;">JavaScript（apih.config.js）</span>
<span></span>
<span style="color:#A6ACCD;">配置文件已经生成：...</span>
<span style="color:#A6ACCD;">Done.</span>
</code></pre>
</div>

### 步骤三
然后将`request.ts`的路径，配置到的`requestFunctionFilePath`中。
最后终端输入`apih`即可生成文档全部API。
<div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">&gt;</span> <span style="color:#A6ACCD;">apih</span></span></code></pre></div>

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

## `documentServers`
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
* `documentServers.events.onRenderInterfaceName`  自定义生成接口名称
* `documentServers.events.onParseDocument`  自定义解析接口文档

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
