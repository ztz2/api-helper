import { OpenAPI } from 'openapi-types';
import { AxiosRequestConfig } from 'axios';

import { aes } from './crypto';
import request from './request';

import { SECRET_KEY } from '../config';
import { processDataType, validSwagger } from './index';
import { AhProject, AhModule, AhAPI, AhAPIField, IAhJsonSchema } from './ah';

const { nanoid } = require('napi-nanoid');
const SwaggerParser = require('@apidevtools/swagger-parser');

export class ParserOpenAPI {
  private openAPIDocumentList: Array<OpenAPI.Document & { id: string }> = [];

  async init(data: any | Array<OpenAPI.Document>, isDocument = true) {
    if (!isDocument) {
      const openAPIBaseDocumentList = await this.getOpenAPIDocument(data);
      for (let i = 0; i < openAPIBaseDocumentList.length; i++) {
        const openAPIDocument = await new SwaggerParser().dereference(
          openAPIBaseDocumentList[i],
        );
        openAPIDocument.id = nanoid();
        this.openAPIDocumentList.push(openAPIDocument);
      }
    } else {
      this.openAPIDocumentList = Array.isArray(data) ? data : [data];
    }
  }

  async parser() {
    const ahProjectList = await this.parserDocument();
    const pathMap = await this.parserPath();

    // 将API合并到项目中
    const ahProjectMap = {};
    for (let i = 0; i < ahProjectList.length; i++) {
      ahProjectMap[ahProjectList[i].id] = ahProjectList[i];
    }

    const pathMapEntries = Object.entries(pathMap);
    for (let i = 0; i < pathMapEntries.length; i++) {
      const [projectId, moduleMap] = pathMapEntries[i];
      const project = ahProjectMap[projectId];
      if (!project) {
        continue;
      }

      const projectModuleMap = {};
      for (let p = 0; p < project.moduleList.length; p++) {
        projectModuleMap[project.moduleList[i].name] = project.moduleList[i];
      }

      const moduleMapEntries = Object.entries(moduleMap);
      for (let j = 0; j < moduleMapEntries.length; j++) {
        const [moduleName, ahAPIList] = moduleMapEntries[i];
        const module = projectModuleMap[moduleName];
        if (module) {
          module.apiList = [...module.apiList, ...ahAPIList];
        }
      }
    }

    return ahProjectList;
  }
  private async parserDocument(): Promise<Array<AhProject>> {
    const ahProjectList: Array<AhProject> = [];
    const openAPIDocumentList = this.openAPIDocumentList;

    for (let i = 0; i < openAPIDocumentList.length; i++) {
      const OD = openAPIDocumentList[i];

      // 项目
      const ahProject = new AhProject();
      const { tags } = OD;

      ahProject.id = OD.id;
      ahProject.title = OD.info.title;
      ahProject.description = OD.info.description;
      ahProject.version = OD.info.version;
      ahProject.openapiVersion = OD.info.version;
      ahProject.host = (OD as { host: '' })?.host ?? '';
      // 获取项目下的模块
      for (let w = 0; w < tags.length; w++) {
        const module = tags[w];
        // 模块
        const ahModule = new AhModule();
        ahModule.name = module.name;
        ahModule.description = module.description;

        ahProject.moduleList.push(ahModule);
      }

      ahProjectList.push(ahProject);
    }
    return ahProjectList;
  }
  private async parserPath(): Promise<{
    [projectId: string]: {
      [moduleName: string]: Array<AhAPI>;
    };
  }> {
    const result = {};
    const openAPIDocumentList = this.openAPIDocumentList;
    for (let i = 0; i < openAPIDocumentList.length; i++) {
      const OD = openAPIDocumentList[i];

      const { id, paths } = OD;
      const pathsEntries = Object.entries(paths);

      result[id] = {};
      for (let p = 0; p < pathsEntries.length; p++) {
        const [url, methodMap] = pathsEntries[p];
        const methodMapEntries = Object.entries(methodMap);
        for (let w = 0; w < methodMapEntries.length; w++) {
          const method = methodMapEntries[w][0];
          const apiMap: any = methodMapEntries[w][1];
          // 模块下的API接口
          const ahAPI = new AhAPI();

          ahAPI.url = url;
          ahAPI.method = method;
          ahAPI.contentType = Array.isArray(apiMap.consumes)
            ? apiMap.consumes
            : [];
          ahAPI.description = apiMap.description ?? '';
          ahAPI.summary = apiMap.summary ?? '';
          // 处理请求参数 ------------------------ 开始
          const parameters = apiMap.parameters;
          for (let p = 0; p < parameters.length; p++) {
            const parameter = parameters[p];
            const ahAPIField = new AhAPIField();
            ahAPIField.in = parameter.in;
            // 字段数据类型
            ahAPIField.type = processDataType(parameter.type);
            ahAPIField.description = parameter.description;
            ahAPIField.required =
              typeof parameter.required === 'boolean'
                ? parameter.required
                : false;
            // 非body参数处理
            if (ahAPIField.in !== 'body') {
              ahAPIField.field = parameter.name;
              ahAPI.requestFields.push(ahAPIField);
              continue;
            }
            // body 参数处理
            const res = this.getSchemaField(parameter.schema, ahAPIField.in);
            ahAPI.requestFields = [...ahAPI.requestFields, ...res];
          }
          // 处理请求参数 ------------------------ 结束

          // 处理响应参数 ------------------------ 开始
          const responsesSchema = apiMap.responses?.['200']?.schema;
          if (responsesSchema) {
            const res = this.getSchemaField(responsesSchema);
            ahAPI.responseFields = [...ahAPI.responseFields, ...res];
          }
          // 处理响应参数 ------------------------ 结束

          // 将该API添加到所依赖的模块中
          for (let s = 0; s < apiMap.tags.length; s++) {
            const tag = apiMap.tags[s];
            if (!Array.isArray(result[id][tag])) {
              result[id][tag] = [];
            }
            result[id][tag].push(ahAPI);
          }
        }
      }
    }
    return result;
  }
  private getSchemaField(
    schema: IAhJsonSchema,
    fieldIn = '',
    memo: Map<IAhJsonSchema, Array<AhAPIField>> = new Map(),
  ): Array<AhAPIField> {
    const ahAPIFieldList: Array<AhAPIField> = [];
    if (memo.has(schema)) {
      return memo.get(schema);
    }
    if (!schema.properties) {
      return ahAPIFieldList;
    }
    memo.set(schema, ahAPIFieldList);

    const requiredFields = schema.required ?? [];
    const properties = Object.entries(schema.properties);

    for (let i = 0; i < properties.length; i++) {
      const [field, fieldMap] = properties[i];
      const ahAPIField = new AhAPIField();
      ahAPIField.in = fieldIn;
      ahAPIField.field = field;
      ahAPIField.title = fieldMap.title ?? '';
      ahAPIField.description = fieldMap.description ?? '';
      ahAPIField.type = processDataType(fieldMap.type);
      ahAPIField.required = requiredFields.includes(field);

      // 数组类型
      if (fieldMap.items) {
        ahAPIField.childrenType = processDataType(fieldMap.items?.type);
        // 数组+对象类型 Array<obj>
        if (fieldMap.items?.properties) {
          const res = this.getSchemaField(fieldMap.items, fieldIn, memo);
          ahAPIField.children = [...ahAPIField.children, ...res];
        } else {
          // todo 等待处理基本类型
        }
        // 对象类型
      } else if (fieldMap.properties) {
        ahAPIField.childrenType = 'object';
        const res = this.getSchemaField(fieldMap, fieldIn, memo);
        ahAPIField.children = [...ahAPIField.children, ...res];
      }

      ahAPIFieldList.push(ahAPIField);
    }
    return ahAPIFieldList;
  }
  private async getOpenAPIDocument(
    body: any,
  ): Promise<Array<OpenAPI.Document>> {
    const getOpenApiConfig: AxiosRequestConfig = {
      method: 'get',
      url: body.url,
    };
    const openAPIDocumentList: Array<OpenAPI.Document> = [];
    // 有密码
    if (body.username && body.password) {
      getOpenApiConfig.auth = {
        username: body.username,
        password: aes.decrypt(body.password, SECRET_KEY),
      };
    }
    // 直接通过链接地址获取配置文件
    const openapiDocument = (await request(
      getOpenApiConfig,
    )) as OpenAPI.Document;
    if (validSwagger(openapiDocument)) {
      openAPIDocumentList.push(openapiDocument);
      // openAPIDocumentList.push({
      //     name: generateTitle(body, openapiDocument),
      //     ...openapiDocument,
      //     url: getOpenApiConfig.url,
      //   }
      // );
    }
    // 上面没有获取到配置数据，尝试访问所有配置项目
    if (openAPIDocumentList.length === 0) {
      const originRgx = /^(http(s?):\/\/.*?)($|\/)/.exec(String(body.url));
      if (originRgx?.[1]) {
        const origin = originRgx[1];
        const swaggerResources: OpenAPI.Parameter = await request({
          ...getOpenApiConfig,
          url: `${origin}/swagger-resources`,
        });
        if (Array.isArray(swaggerResources)) {
          // 自动获取V2版本文档
          for (const sr of swaggerResources) {
            const url = origin + sr.url;
            const openapiDocument = (await request({
              ...getOpenApiConfig,
              url,
            })) as OpenAPI.Document;
            if (validSwagger(openapiDocument)) {
              openAPIDocumentList.push(openapiDocument);
              // TODO 等待处理
              // result.push(
              //   Object.assign(
              //     { label: generateTitle(body, sr) },
              //     swaggerEntity,
              //     { url },
              //   ),
              // );
            }
          }
        }
      }
    }
    return openAPIDocumentList;
  }
}
