---
footer: false
---

<script setup>
import { VTCodeGroup, VTCodeGroupTab } from '@vue/theme'
</script>

# 生成API-使用CLI
解析API文档，生成整个项目的API请求代码，请求参数响应数据TS类型申明。

> API生成特点
- 支持多个API项目（依赖多个API项目，一次性生成API）
- 自定义解析扩展（支持自定义解析，不限制文档类型，更好的功能扩展）
- 请求参数兼容（对象和数组参数的兼容）

![API代码](/images/api-code-cli.gif)

## 安装

<VTCodeGroup label="pnpm">
  <VTCodeGroupTab label="pnpm">

  ```sh
  $ pnpm install @api-helper/cli
  ```

  </VTCodeGroupTab>

  <VTCodeGroupTab label="npm">

  ```sh
  $ npm install @api-helper/cli
  ```

  </VTCodeGroupTab>
  <VTCodeGroupTab label="yarn">

  ```sh
  $ yarn add @api-helper/cli
  ```

  </VTCodeGroupTab>
</VTCodeGroup>

## 例子
```sh
$ npx apih -u http://接口文档地址.com
# or
$ npx apih -u ./local-openapi.json
```

## CLI 配置说明
指令说明
```sh
Usage: apih [options]
Options:
  -u, --url <string> 接口文档地址【当type为'swagger'类型时，可以读取本地文件，这里就可以一个本地文件路径】
  -o, --output-path <path> 代码生成后的输出路径
  --target <string> 生成的目标代码类型，默认: typescript
  --type <string> 文档类型，根据文档类型，调用内置的解析器，默认值: 'swagger'
  --auth-token <string> 访问文档可能需要认证信息，通过使用token访问，yapi的验证token
```
