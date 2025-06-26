import { JSONSchema4 } from 'json-schema';

import {
  isHttp,
  randomId,
  mergeUrl,
  filterDesc,
  parserSchema,
  filterKeyName,
  processRequestSchema,
  processRequestSchemaPipeline,
  processResponseSchemaPipeline,
} from '../utils/util';
import {
  UNKNOWN_GROUP_DESC,
  UNKNOWN_GROUP_NAME,
} from '../constant';
import { APIHelper } from '../types';
import { validateSchema } from '../utils/validator';
import {
  createApi,
  createCategory,
  createDocument,
  createSchema,
  transformType, TransformTypeOptions
} from "../helpers";
import ParserKeyName2Schema from './parser-key-name-2-schema';

type ParserYapiParams = {
  autoGenerateId?: boolean;
  // 请求数据所有字段设置成必有属性，默认: false
  requiredRequestField?: boolean;
  // 响应数据所有字段设置成必有属性，默认：true
  requiredResponseField?: boolean;
  transformType?: TransformTypeOptions['transformTypeMap'];
  projectInfo: {
    'switch_notice': boolean,
    'is_mock_open': boolean,
    'strice': boolean,
    'is_json5': boolean,
    '_id': number,
    'name': string,
    'desc': string,
    'basepath': string,
    'project_type': string,
    'uid': number,
    'group_id': number,
    'icon': string,
    'color': string,
    'add_time': number,
    'up_time': number,
    'tag': string[],
    'cat': string[],
    'role': boolean,
    'documentServerUrl': string,
  },
  categoryList: Array<{
    'index': number,
    '_id': number,
    'name': string,
    'project_id': number,
    'desc': string,
    'uid': number,
    'add_time': number,
    'up_time': number,
    '__v': number
  }>,
  apiList: Array<{
    'edit_uid': number,
    'status': string,
    'api_opened': boolean,
    'tag': string[],
    '_id': number,
    'method': string,
    'catid': number,
    'title': string,
    'markdown': string,
    'path': string,
    'project_id': number,
    'uid': number,
    'add_time': number,
    'req_body_type': string,
    // 文档地址
    'docURL': string;
    // 接口详情
    'content'?: {
      'query_path': {
        'path': string,
        'params': []
      },
      'edit_uid': number,
      'status': string,
      'type': string,
      'req_body_is_json_schema': boolean,
      'res_body_is_json_schema': boolean,
      'api_opened': boolean,
      'index': number,
      'tag': string[],
      '_id': number,
      'method': string,
      'catid': number,
      'title': string,
      'path': string,
      'project_id': number,
      'res_body_type': string,
      'uid': number,
      'add_time': number,
      'up_time': number,
      'req_body_type': string;
      'req_query': [{
        'required': string,
        '_id': string,
        'name': string,
        'example': string,
        'desc': string
      }],
      'req_headers': Array<{
        name: string
        value: string
        required: number | string
        example: string,
        desc: string,
      }>,
      'req_params': Array<{
        name: string
        desc: string
        required: number | string
      }>,
      'req_body_form': Array<{
        format?: string | 'int32' | 'int64' | 'float' | 'double' | 'byte' | 'binary' | 'date' | 'date-time' | 'password';
        name: string
        desc: string
        type: string
        required: number | string
      }>,
      // string JSON schema
      'req_body_other': string,
      '__v': number,
      'desc': string,
      'markdown': string,
      // json string '{\'type\':\'object\',\'properties\':{\'name\':{\'type\':\'string\',\'title\':\'姓名\'},\'age\':{\'type\':\'string\',\'title\':\'年龄\'}},\'required\':[\'name\',\'age\'],\'title\':\'data\'}'
      'res_body': string,
      'username': string
    }
  }>
}

export default class ParserYapi {
  private autoGenerateId = true;
  // 请求数据所有字段设置成必有属性，默认: false
  private requiredRequestField?: boolean;
  // 响应数据所有字段设置成必有属性，默认：true
  private requiredResponseField?: boolean;
  private transformType?: TransformTypeOptions['transformTypeMap']

  private projectInfo: ParserYapiParams['projectInfo'];
  private categoryList: ParserYapiParams['categoryList'];
  private apiList: ParserYapiParams['apiList'];

  constructor(params: ParserYapiParams) {
    this.requiredRequestField = params.requiredRequestField;
    this.requiredResponseField = params.requiredResponseField ?? true;
    this.transformType = params.transformType ?? {};

    this.projectInfo = params.projectInfo;
    this.categoryList = params.categoryList;
    this.apiList = params.apiList;
    this.autoGenerateId = params.autoGenerateId ?? true;
  }

  async parser(): Promise<Array<APIHelper.Document>> {
    const project = this.parserProject();
    project.categoryList = this.parserApiList(project, this.parserCategoryList());
    return [project];
  }

  private parserProject(): APIHelper.Document {
    const title = filterDesc(this.projectInfo.name);
    return createDocument({
      id: this.generateId(),
      title: title ? title : '接口文档',
      description: filterDesc(this.projectInfo.desc),
      version: 'last',
      documentVersion: '2.0',
      documentServerUrl: this.projectInfo.documentServerUrl ?? '',
      basePath: this.projectInfo.basepath || '/',
    });
  }

  private parserCategoryList(): APIHelper.CategoryList {
    const result: APIHelper.CategoryList = [];
    this.categoryList.forEach((category) => {
      result.push(createCategory({
        id: this.generateId(),
        name: category.name,
        description: filterDesc(category?.desc),
      }));
    })
    result.push(createCategory({
      id: this.generateId(),
      name: UNKNOWN_GROUP_NAME,
      description: UNKNOWN_GROUP_DESC,
    }));
    return result;
  }

  private parserApiList(project: APIHelper.Document, categoryList: APIHelper.CategoryList): APIHelper.CategoryList{
    const categoryMap = new Map;
    categoryList.forEach((category) => {
      categoryMap.set(category.name, category);
    });

    this.apiList.forEach((apiMap) => {
      const apiContent = apiMap.content;
      // 没有详情内容，不做任何处理
      if (!apiContent) {
        return;
      }
      const tag = apiMap.tag;
      const method = apiMap.method.toLowerCase();
      const api: APIHelper.API = createApi({
        method,
        id: this.generateId(),
        title: filterDesc(apiMap.title),
        description: filterDesc(apiMap.markdown),
        path: mergeUrl(isHttp(project.basePath) ? '' : project.basePath, apiMap.path),
        docURL: apiMap.docURL ?? '',
      });

      const headerSchema = createSchema('object');
      apiContent?.req_headers?.forEach((item) => {
        if (!item?.value) {
          return;
        }
        switch (item.value) {
          // 请求数据类型
          case 'Content-Type': {
            api.requestContentType = [item.value];
            break;
          }
          // 其他请求头信息
          default: {
            headerSchema.params.push(createSchema('string', {
              keyName: item.value,
              title: filterDesc(item.desc) ?? '',
              rules: {
                required: ['1', 1].includes(item.required),
              }
            }));
          }
        }
      });

      if (headerSchema.params.length) {
        api.headers = headerSchema;
      }

      // 响应数据类型
      if (apiContent?.res_body_type) {
        api.responseContentType = [apiContent?.res_body_type];
      }

      try {
        api.label = api.title || api.description || '';

        // API content-type，暂无特殊处理
        // switch (apiMap.req_body_type) {
        //   case 'form':
        //   case 'file':
        //     // ['multipart/form-data']; //form data required
        //     break;
        //   case 'json':
        //     // ['application/json'];
        //     break;
        //   case 'raw':
        //     //  ['text/plain'];
        //     break;
        //   default:
        //     break;
        // }

        // header 和 cookie信息，暂无特殊处理
        // const req_headers = apiContent.req_headers;
        // Headers parameters
        // for (const p of req_headers) {
        //   // swagger has consumes proprety, so skip proprety 'Content-Type'
        //   if (p.name === 'Content-Type') {
        //     continue;
        //   }
        //   paramArray.push({
        //     name: p.name,
        //     in: 'header',
        //     description: `${p.name} (Only:${p.value})`,
        //     required: Number(p.required) === 1,
        //     type: 'string', //always be type string
        //     default: p.value
        //   });
        // }

        /****************** 请求参数处理-开始 ******************/
        const requestDataSchema: APIHelper.Schema = createSchema('object', {
          id: this.generateId(),
        });
        let requestExtraDataSchema: APIHelper.Schema | null = null;
        // fix: 重复项问题
        const requestSchemaRecord: Array<JSONSchema4> = [];
        const parserKeyName2SchemaWrap: Array<APIHelper.Schema> = [];
        const requestKeyNameMemo: string[] = [];

        // 路径参数
        const reqParams = apiContent.req_params;
        for (const p of reqParams){
          const keyName = filterKeyName(p.name);
          // 参数字段没有，跳过该字段
          if (!keyName || requestKeyNameMemo.includes(keyName)) {
            continue;
          }
          // 字段
          const scm: APIHelper.Schema = createSchema('string', {
            id: this.generateId(),
            description: filterDesc(p.desc),
            keyName: keyName,
            rules: {
              required: true
            }
          });
          scm.label = scm.title ? scm.title : scm.description ? scm.description : '';

          api.pathParamKeyNameList.push(keyName);
          requestKeyNameMemo.push(keyName);
          requestDataSchema.params.push(scm);
        }

        // URL Query 参数
        const reqQuery = apiContent.req_query;
        for (const p of reqQuery) {
          let keyName = filterKeyName(p.name);
          // 参数字段没有，跳过该字段
          if (!keyName || requestKeyNameMemo.includes(keyName)) {
            continue;
          }
          requestKeyNameMemo.includes(keyName) && requestKeyNameMemo.push(keyName);
          // 字段
          let scm: APIHelper.Schema = null!;
          const parserKeyName2SchemaRes = new ParserKeyName2Schema(p.name, 'string').parse();
          if (parserKeyName2SchemaRes) {
            parserKeyName2SchemaWrap.push(parserKeyName2SchemaRes.wrapSchema);
            scm = parserKeyName2SchemaRes.targetSchema;
            keyName = filterKeyName(parserKeyName2SchemaRes.wrapSchema.keyName);
          } else {
            scm = createSchema('string', {
              id: this.generateId(),
              description: filterDesc(p.desc),
              keyName: keyName,
              rules: {
                required: Number(p.required) === 1
              }
            })
          }
          scm.label = scm.title ? scm.title : scm.description ? scm.description : '';
          !api.queryStringKeyNameList.includes(keyName) && api.queryStringKeyNameList.push(keyName);
          if (!parserKeyName2SchemaRes) {
            requestDataSchema.params.push(scm);
          }
        }
        // 合并 name[0].a.rule 属性。
        ParserKeyName2Schema.appendSchemeList(
          parserKeyName2SchemaWrap,
          requestDataSchema,
          requestKeyNameMemo,
        );

        // Body 参数
        const reqBodyType = apiContent.req_body_type;
        switch (reqBodyType) {
          case 'form': {
            // Form Data数据
            for (const p of apiContent.req_body_form) {
              const keyName = filterKeyName(p.name);
              // 参数字段没有，跳过该字段
              if (!keyName || requestKeyNameMemo.includes(keyName)) {
                continue;
              }
              // 字段
              const scm: APIHelper.Schema = createSchema('string', {
                id: this.generateId(),
                description: filterDesc(p.desc),
                keyName: keyName,
                type: 'string',
                rules: {
                  required: Number(p.required) === 1
                },
                rawType: p.type,
                format: p?.format ?? '',
              });
              scm.type = transformType(p.type, {
                format: p?.format,
                emptyType:  'string',
                transformTypeMap: this.transformType,
              });
              scm.label = scm.title ? scm.title : scm.description ? scm.description : '';

              api.formDataKeyNameList.push(keyName);
              requestKeyNameMemo.push(keyName);
              requestDataSchema.params.push(scm);
            }
            break;
          }
          case 'json': {
            if (apiContent.req_body_other) {
              try {
                const jsonParam = JSON.parse(apiContent.req_body_other);
                if (jsonParam) {
                  requestExtraDataSchema = processRequestSchema(
                    requestDataSchema,
                    requestSchemaRecord,
                    jsonParam,
                    requestKeyNameMemo,
                    {
                      autoGenerateId: this.autoGenerateId,
                      transformTypeMap: this.transformType,
                    }
                  );
                }
              }finally{}
            }
            break;
          }
          // formData
          case 'file': {
            const keyName = filterKeyName('file');
            // 参数字段没有，跳过该字段
            if (requestKeyNameMemo.includes(keyName)) {
              break;
            }
            // 字段
            const scm: APIHelper.Schema = createSchema('File', {
              id: this.generateId(),
              description: filterDesc(apiContent.req_body_other),
              keyName: keyName,
            });
            scm.label = scm.title ? scm.title : scm.description ? scm.description : '';

            api.formDataKeyNameList.push(keyName);
            requestKeyNameMemo.push(keyName);
            requestDataSchema.params.push(scm);
            break;
          }
        }
        processRequestSchemaPipeline(api, requestDataSchema, requestExtraDataSchema, this);
        /****************** 请求参数处理-结束 ******************/

        /****************** 响应参数处理-结束 ******************/
        try {
          if (apiContent.res_body_type === 'json' && apiContent.res_body) {
            const responsesSchemaSource = JSON.parse(apiContent.res_body);
            if (validateSchema(responsesSchemaSource)) {
              api.responseDataSchema = parserSchema(
                responsesSchemaSource,
                undefined,
                undefined,
                undefined,
                {
                  autoGenerateId: this.autoGenerateId,
                  transformTypeMap: this.transformType,
                }
              );
              if (api.responseDataSchema?.type === 'object') {
                api.responseDataSchema.keyName = '';
              }
            }
          }
        } finally {}
        processResponseSchemaPipeline(api, this);
        /****************** 响应参数处理-结束 ******************/

        // 将该API添加到所依赖的模块中
        for (const tagName of tag) {
          const recordCategory = categoryMap.has(tagName) ? categoryMap.get(tagName) : categoryMap.get(UNKNOWN_GROUP_NAME);
          recordCategory && recordCategory.apiList.push(api);
        }
      }  catch (e) {
        console.log(`${method.toUpperCase()} ${api.path} 接口解析失败，请联系 @api-helper 作者修复该问题，或提交issue，https://github.com/ztz2/api-helper/issues\n\n${e}`);
      }
    });
    return categoryList;
  }

  private generateId(): string {
    return this.autoGenerateId ? randomId() : '';
  }
}
