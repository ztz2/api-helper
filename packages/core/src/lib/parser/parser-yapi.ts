import {JSONSchema4} from 'json-schema';

import {
  filterDesc,
  filterKeyName,
  mergePath,
  parserSchema,
  processRequestSchema,
  randomId,
} from '../utils/util';
import {
  UNKNOWN_GROUP_DESC,
  UNKNOWN_GROUP_NAME,
} from "@/lib/constant";
import {APIHelper} from '../types';
import { validateSchema } from '../utils/validator';

type ParserYapiParams = {
  autoGenerateId?: boolean;
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
    'role': boolean
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
      }>,
      'req_params': Array<{
        name: string
        desc: string
        required: number | string
      }>,
      'req_body_form': Array<{
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
  private projectInfo: ParserYapiParams['projectInfo'];
  private categoryList: ParserYapiParams['categoryList'];
  private apiList: ParserYapiParams['apiList'];

  constructor(params: ParserYapiParams) {
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
    return {
      id: this.generateId(),
      title: filterDesc(this.projectInfo.name),
      description: filterDesc(this.projectInfo.desc),
      version: 'last',
      openapiVersion: '2.0',
      basePath: this.projectInfo.basepath || '/',
      categoryList: [],
    };
  }

  private parserCategoryList(): APIHelper.CategoryList {
    const result: APIHelper.CategoryList = [];
    this.categoryList.forEach((category) => {
      result.push({
        id: this.generateId(),
        // 分组名称
        name: category.name,
        // 分组描述
        description: filterDesc(category?.desc),
        // 分组下的接口列表
        apiList: [],
      });
    })
    result.push({
      id: this.generateId(),
      // 分组名称
      name: UNKNOWN_GROUP_NAME,
      // 分组描述
      description: UNKNOWN_GROUP_DESC,
      // 分组下的接口列表
      apiList: [],
    });
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
      const api: APIHelper.API = {
        id: this.generateId(),
        summary: filterDesc(apiMap.title),
        description: filterDesc(apiMap.markdown),
        path: mergePath(project.basePath, apiMap.path),
        method: apiMap.method,
        formDataKeyNameList: [],
        pathParamKeyNameList: [],
        queryStringKeyNameList: [],
        requestDataSchema: null,
        requestExtraDataSchema: null,
        responseDataSchema: null,
      };

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
      //   //swagger has consumes proprety, so skip proprety "Content-Type"
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
      const requestDataSchema = {
        type: 'object',
        params: [] as APIHelper.SchemaList
      } as APIHelper.Schema;
      let requestExtraDataSchema: APIHelper.Schema | null = null;
      // fix: 重复项问题
      const requestSchemaRecord: Array<JSONSchema4> = [];
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
        const scm: APIHelper.Schema = {
          examples: [],
          id: this.generateId(),
          title: '',
          description: filterDesc(p.desc),
          keyName: keyName,
          type: 'string',
          params: [],
          rules: {
            required: true
          }
        };
        api.pathParamKeyNameList.push(keyName);
        requestKeyNameMemo.push(keyName);
        requestDataSchema.params.push(scm);
      }

      // URL Query 参数
      const reqQuery = apiContent.req_query;
      for (const p of reqQuery) {
        const keyName = filterKeyName(p.name);
        // 参数字段没有，跳过该字段
        if (!keyName || requestKeyNameMemo.includes(keyName)) {
          continue;
        }
        // 字段
        const scm: APIHelper.Schema = {
          examples: [],
          id: this.generateId(),
          title: '',
          description: filterDesc(p.desc),
          keyName: keyName,
          type: 'string',
          params: [],
          rules: {
            required: Number(p.required) === 1
          }
        };
        api.queryStringKeyNameList.push(keyName);
        requestKeyNameMemo.push(keyName);
        requestDataSchema.params.push(scm);
      }

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
            const scm: APIHelper.Schema = {
              examples: [],
              id: this.generateId(),
              title: '',
              description: filterDesc(p.desc),
              keyName: keyName,
              type: 'string',
              params: [],
              rules: {
                required: Number(p.required) === 1
              }
            };
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
                  { autoGenerateId: this.autoGenerateId }
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
          const scm: APIHelper.Schema = {
            examples: [],
            id: this.generateId(),
            title: '',
            description: filterDesc(apiContent.req_body_other),
            keyName: keyName,
            type: 'string',
            params: [],
            rules: {
              required: false
            }
          };
          api.formDataKeyNameList.push(keyName);
          requestKeyNameMemo.push(keyName);
          requestDataSchema.params.push(scm);
          break;
        }
      }

      if (requestDataSchema.params.length === 0) {
        api.requestDataSchema = requestExtraDataSchema;
      } else if (requestDataSchema.params.length > 0) {
        api.requestDataSchema = requestDataSchema;
      } else {
        api.requestExtraDataSchema = requestExtraDataSchema;
      }
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
                autoGenerateId: this.autoGenerateId
              }
            );
            if (api.responseDataSchema?.type === 'object') {
              api.responseDataSchema.keyName = '';
            }
          }
        }
      } finally {}
      /****************** 响应参数处理-结束 ******************/

      // 将该API添加到所依赖的模块中
      for (const tagName of tag) {
        const recordCategory = categoryMap.has(tagName) ? categoryMap.get(tagName) : categoryMap.get(UNKNOWN_GROUP_NAME);
        recordCategory && recordCategory.apiList.push(api);
      }
    });
    return categoryList;
  }

  private generateId(): string {
    return this.autoGenerateId ? randomId() : '';
  }
}
