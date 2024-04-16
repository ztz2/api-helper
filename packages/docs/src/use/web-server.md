---
footer: false
---

<script setup>
import { VTCodeGroup, VTCodeGroupTab } from '@vue/theme'
</script>

# web服务配置说明
web服务提供了基于接口的自定义代码生成，使得代码生成更加具有灵活性，在介绍该功能之前，先简单说明API Helper的项目分包。@api-helper/cli 提供接口生成功能以及这里的web服务都是基于@api-helper/core和@api-helper/template实现。

* web服务功能的应用场景在于，重复性的表单或者表格页面，根据接口生成统一的代码模板。
* web服务功能本质上就是一个B/S架构的产物，需自行本地部署。
  * 浏览器端代码在web包下。
  * 服务器端代码在server包下。

## 部署说明
* windows环境，请先安装 `pnpm`，然后双击运行 `run-template-server.bat` 即可。
* 下面是手动部署。

### 步骤1
打包浏览器端代码，进入web包下，输入命令：`pnpm run build`。

### 步骤2
打包服务器端代码，进入server包下，输入命令：`pnpm run build`。

### 步骤3
* 启动服务，进入server包下，输入命令：`pnpm run start:prod`。
* 服务启动后访问地址：[http://localhost:3210](http://localhost:3210)。
* 如果需要更新最新代码运行，需要从步骤1开始，后续启动服务操作，都是步骤3。

## 功能展示
* 通用的模版代码生成器
  * 生成JS对象代码
  * 生成Typescript interface代码
  * 生成实体类代码
  * 生成表单、表格代码
  * 自定义模版代码生成等

![](../public/images/map-code.gif)


* 文件模块生成

将一个功能模块的接口和指定的模版关联，生成一个功能模块的文件代码。

![](../public/images/file-directory.gif)

## 许可

[MIT](https://opensource.org/licenses/MIT) Copyright (c) 2023-present, [ztz2](https://github.com/ztz2)
