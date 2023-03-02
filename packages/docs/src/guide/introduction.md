---
footer: false
---

# 指南 {#指南}


## 为什么需要它? {#为什么需要它}

* 它能生成整个项目API代码，interface，让开发者脱离复制API代码、定义interface的苦劳，更多精力关注于业务代码即可，一次生成整个团队共享。
* 模板代码带来的团队规范性，模板代码的生成，让团队成员核心业务代码流程一致，带来更好的维护性以及可读性，看团队成员代码就像看自己代码一样。

## 它支持的文档类型？{#它支持的文档类型}
* 目前支持 `OpenAPI2.0`(也就是Swagger，2.0版本它叫做Swagger)以及`OpenAPI3.0`
* 间接支持 `yapi` ，在使用 yapi 文档时，需要将API导出成Swagger(JSON格式)，使用本地文件模式，即可间接支持 yapi 项目，针对 yapi 的解析后续扩展该功能。

## feature{#feature}

- <strong style="color:var(--vt-c-green);">[ √ ]</strong> 支持 swagger2.0
- <strong style="color:var(--vt-c-green);">[ √ ]</strong> 支持 swagger3.0
- <strong style="color:var(--vt-c-green);">[ √ ]</strong> 自定义解析
- <strong style="color:var(--vt-c-green);">[ √ ]</strong> 解析本地文件
- <strong style="color:var(--vt-c-green);">[ √ ]</strong> 多项目
- <strong style="color:var(--vt-c-red);">[ x ]</strong> 解析 yapi（规划中）
- <strong style="color:var(--vt-c-red);">[ x ]</strong> 模板生成（规划中）
