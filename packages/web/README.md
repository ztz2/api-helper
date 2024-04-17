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

web服务提供了基于接口的自定义代码生成，提供了前端操作页面，使得代码生成更加方便。
* web服务功能的应用场景在于，重复性的表单或者表格页面，根据接口生成统一的代码模板。
* web服务功能本质上就是一个B/S架构的产物，需自行本地部署。
    * 浏览器端代码在web包下。
    * 服务器端代码在server包下。

## 部署说明
windows环境，请先安装 `pnpm`，然后双击运行 **run-web-server.bat** 文件即可。下面是手动部署。

### 步骤1：下载项目代码
下载或者使用git拉取整个项目代码
```sh
git clone https://github.com/ztz2/api-helper.git
```
### 步骤2：打包
* 打包浏览器代码，进入web包下，输入命令：`pnpm run build`。
* 打包服务器端代码，进入server包下，输入命令：`pnpm run build`。

### 步骤3：启动服务
* 启动服务，进入server包下，输入命令：`pnpm run start:prod`。
* 服务启动后访问地址：[http://localhost:3210](http://localhost:3210)。
* 如果需要更新最新代码运行，需要从步骤1开始，后续启动服务操作，都是步骤3。

![](../docs/src/public/images/map-code.gif)
![](../docs/src/public/images/form-code.png)
![](../docs/src/public/images/file-directory.gif)

## 👏赞助商
<a href="https://www.jetbrains.com" target="_blank">
  <img width="64" src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" alt="JetBrains Logo (Main) logo.">
</a>

感谢 [JetBrains](https://www.jetbrains.com) 对本项目的支持。


## 📃开源许可

[MIT](https://opensource.org/licenses/MIT) Copyright (c) 2023-present, [ztz2](https://github.com/ztz2)
