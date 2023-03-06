// import { join } from 'path';
// import { readJson } from 'fs-extra';
import { Injectable } from '@nestjs/common';

// import { swagger20 } from '../mock/api';
// import { ParserOpenAPI } from '../utils/openapi';
// import MockSwaggerApi from '../mock/swaggerApi.json';

// const mockSwaggerApi = require('../mock/swaggerApi.json');
// const {} = require();

import { getDocument } from '@api-helper/cli/dist/server';
import { APIHelper, ParserOpenAPI } from '@api-helper/core';

@Injectable()
export class AppService {
  async getHello() {
    return `Hello API Helper. ${Date.now()}`;
  }

  // async getTestData() {
  //   const parserOpenAPI = new ParserOpenAPI();
  //   await parserOpenAPI.init([swagger20]);
  //   return await parserOpenAPI.parser();
  // }

  // async getMockData() {
  //   console.log('mockSwaggerApi: ', mockSwaggerApi);
  //   // const data = await readJson('../mock/swaggerApi.json');
  //   const parserOpenAPI = new ParserOpenAPI();
  //   await parserOpenAPI.init([mockSwaggerApi]);
  //   return await parserOpenAPI.parser();
  //   return '123';
  // }

  async getSwaggerDocs(body: any): Promise<APIHelper.Document[]> {
    const documentResourceList = await getDocument([body]);
    let documentList: APIHelper.Document[] = [];
    for (const d of documentResourceList) {
      if (d.type === 'swagger') {
        const p = await new ParserOpenAPI().parser(d.resourceDocumentList);
        documentList = [...documentList, ...p];
      } else if (d.type === 'yapi') {
        // TODO 等待解析yapi文档
      }
    }
    return documentList;
  }
}
