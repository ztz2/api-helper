<h1
    style="background: -webkit-linear-gradient(315deg, rgb(255,87,34) 0%, #fee140 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent"
>
    <a href="https://github.com/ztz2/api-helper" target="_blank">
        API Helper
    </a>
</h1>
<p>
    <a href="https://www.npmjs.com/org/api-helper">
        <img src="https://img.shields.io/npm/l/@api-helper/core" alt="Package License" />
    </a>
</p>

`API Helper`，帮助开发者生成interface、类、对象、form表单模板等各种代码的工具。

> 一个用于构建 Web API 、代码模板的多功能工具库

- 🎉️ 支持 Swagger2 和 Swagger3（openapi3.0 openapi3.0.1） 文档
- 🎉️ 支持 yapi 文档以及自定义文档解析
- 💪 基于Typescript构建
- ⚙️ 单元测试
- 💻 本地部署

## 📦功能介绍

### 生成前端请求接口函数和TS类型
* 根据接口文档生成请求参数以及响应数据的Typescript类型
* 内置的统一接口请求函数自动处理路径参数，URL参数，FormData参数

[更多详细文档查看这里](./packages/cli/README.md)

![](./packages/docs/src/public/images/api-code.gif)

### 基于API的代码生成器

该功能需本地部署服务，[更多详细文档查看这里](./packages/server/README.md)

#### 通用的模版代码生成器
* 生成JS对象代码
* 生成Typescript interface代码
* 生成实体类代码
* 生成表单、表格代码
* 自定义模版代码生成等

![](./packages/docs/src/public/images/map-code.gif)


#### 文件模块生成

将一个功能模块的接口和指定的模版关联，生成一个功能模块的文件代码。
  
![](./packages/docs/src/public/images/file-directory.gif)

## 👏赞助商
<a href="https://www.jetbrains.com" target="_blank">
  <img width="64" src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" alt="JetBrains Logo (Main) logo.">
</a>

感谢 [JetBrains](https://www.jetbrains.com) 对本项目的支持。


## 📃开源许可

[MIT](https://opensource.org/licenses/MIT) Copyright (c) 2023-present, [ztz2](https://github.com/ztz2)
