<div align="center">
  <a href="https://github.com/ztz2/api-helper" target="_blank">
    <img alt="API Helper Logo" width="100" src="./packages/docs/src/public/images/logo-red.svg"/>
  </a>
</div>
<div align="center">
  <h1>API Helper</h1>
</div>

<div align="center">

A tool to help developers in generating code for interfaces, classes, objects, form templates, and more.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ztz2/api-helper/blob/main/LICENSE)

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

> A versatile tool library for building Web APIs and code templates

- 🎉️ Supports openapi2, openapi3.0, openapi3.1, yapi interface documents, and custom interface document parsing
- 💪 Built with Typescript
- ⚙️ Unit testing
- 💻 Local deployment

## 📄 API Generation

### Install
```sh
$ pnpm i @api-helper/cli
# or
$ npm i @api-helper/cli
# or
$ yarn add @api-helper/cli
```

### Usage CLI

![API代码](./packages/docs/src/public/images/example/en/api-code-cli.gif)
#### Examples
```sh
$ npx apih -u https://api-documentation.com/demo/swagger-ui.html
# or
$ npx apih -u ./local-openapi.json
```

#### CLI Configuration Guide
```sh
Usage: apih [options]
Options:
  -u, --url <string> Interface document address [Can read local files when type is 'swagger', here can be a local file path]
  -o, --output-path <path> Output path after code generation
  --target <string> Generated target code type, default: typescript
  --type <string> Interface document type, call the built-in parser according to the document type, default value: 'swagger'
  --auth-token <string> Accessing documents may require authentication information, accessed through using token, yapi's validation token
```

### Usage config in file【Recommended】

![](./packages/docs/src/public/images/example/en/api-code.gif)

#### Initialize Configuration File
Enter the following command to initialize the configuration file.
```sh
$ npx apih init
```

Command Description
```sh
Usage: apih init [options]
Options:
  -c, --config-path <path> Custom configuration file path.
```

#### Execute to generate API

* Open the apih.config.js or apih.config.ts file for configuration.
* After completing the configuration, enter the following command to generate the API.

```sh
$ npx apih 
```

Command Description
```sh
Usage: apih [options]
Options:
  -c, --config-path <path> Custom configuration file path.
```

apih.config.ts
```typescript
import type { Config } from '@api-helper/cli';
import { defineConfig } from '@api-helper/cli';
```
defineConfig accepts a Config object or Config[]. When you need to generate multiple API files, you can use the array method. The following document is a supplementary explanation of the Config object.
```typescript
import { defineConfig } from '@api-helper/cli';

export default defineConfig({
  // Use group function. After enabling this function, multi-file code will be generated according to the group
  group: false,
  // Whether to generate only the TypeScript type of interface request data and return data. If yes, the request file and request function will not be generated.
  onlyTyping: false,
  // The output path after code generation
  outputPath: 'src/api/index.ts',
  // The target type of the generated code. Default: typescript
  target: 'typescript',
  // File path of the request function.
  requestFunctionFilePath: 'src/api/request.ts',
  // Set all fields of the request data as required attributes, default: false
  requiredRequestField: false,
  // Set all fields of the response data as required attributes, default: true，默认：true
  requiredResponseField: true,
  // Interface document service configuration
  documentServers: [{
    // Interface Document address [When the type is 'swagger', you can read local files, here can be a local file path]
    url: 'https://api-documentation.com/demo/swagger-ui.html',
    // Interface document type, call the built-in parser according to the document type, default value: 'swagger' [Built-in yapi and swagger parser, other document types, add parserPlugins to implement document parsing by yourself]
    type: 'swagger',
    // The name of the current interface document service. When there is a value, the file output becomes -> path/current name
    name: '',
    // The key to get the response data, body[dataKey]
    dataKey: '',
    // Accessing the document may require authentication information, which can be done using HTTP auth type.
    auth: {
      username: '',
      password: '',
    },
    // Accessing the document may require authentication information, which can be accessed using a token, such as Yapi's authentication token.
    authToken: '',
    // Request headers when fetching the interface document with AJAX.
    headers: {},
    // Hook events in the execution process.
    events: {
      // Event callback when generating interface name, the return value is used as the new InterfaceName, which is used to customize the InterfaceName.
      // onRenderInterfaceName(api, options) {},
      // Event callback when generating API name, the return value is used as the new RequestFunctionName, which is used to customize the RequestFunctionName.
      // onRenderRequestFunctionName(api, options) {},
    },
  }],
  // Parse extension plugins, used for custom parsing
  parserPlugins: [],
});

```

## 📦 Web Service

Web services provide custom code generation based on interfaces and provide frontend operation pages to make code generation more convenient.
* The application scenario of WEB services is repetitive form or table pages, generating unified code templates according to the interface.
* The WEB service function is essentially a product of the B/S architecture and needs to be deployed locally.
    * The browser-side code is under the web package.
    * The server-side code is under the server package.

### Deployment document

For Windows environment, please install **pnpm** first, and then double-click to run the **run-web-server.bat** file. The following are manual deployment steps.

#### Pull the project.
```sh
git clone https://github.com/ztz2/api-helper.git
```
#### Docker Deployment【Recommend】
##### Build a Docker image
###### Using Dockerfile.
```sh
docker build -t api_helper/server .
```
###### Using Docker compose
```sh
docker compose build
```
##### Run Services
###### Run based on the Dockerfile build.
```shell
docker run -d -p 3210:3210 api_helper/server
```
###### Run based on the Docker Compose build.
```shell
docker-compose up -d
```

#### Manual command deployment.
* Build the front-end service by navigating to the web package and entering the command：`pnpm run build`。
* Build the back-end service by navigating to the server package and entering the command：`pnpm run build`。
* Start the service by navigating to the server package and entering the command：`pnpm run start:prod`。
* Access address after the service starts：[http://localhost:3210](http://localhost:3210)。

![](./packages/docs/src/public/images/api-code.gif)
![](./packages/docs/src/public/images/map-code.gif)
![](./packages/docs/src/public/images/file-directory.gif)

## 👏 Sponsors
<a href="https://www.jetbrains.com" target="_blank">
  <img width="64" src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" alt="JetBrains Logo (Main) logo.">
</a>

Thanks to [JetBrains](https://www.jetbrains.com) for supporting this project.

## 📃 LICENSE

[MIT](https://github.com/ztz2/api-helper/blob/main/LICENSE) Copyright (c) 2023-present, [ztz2](https://github.com/ztz2)
