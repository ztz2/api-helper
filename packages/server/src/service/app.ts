// import { join } from 'path';
// import { readJson } from 'fs-extra';
import { Injectable } from '@nestjs/common';

// import { swagger20 } from '../mock/api';
// import MockSwaggerApi from '../mock/swaggerApi.json';

// const mockSwaggerApi = require('../mock/swaggerApi.json');

import { APIHelper } from '@api-helper/core';
import { documentServersRunParserPlugins } from '@api-helper/cli/lib/tools/util';
import ParserYapiPlugin from '@api-helper/cli/lib/service/parser-plugins/parser-yapi-plugin';
import ParserSwaggerPlugin from '@api-helper/cli/lib/service/parser-plugins/parser-swagger-plugin';

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

  async getDocs(body: any): Promise<APIHelper.Document[]> {
    const documentServers = [body];
    const documentServersRunResult = await documentServersRunParserPlugins(
      documentServers,
      [new ParserYapiPlugin(), new ParserSwaggerPlugin()],
    );
    const result = [];
    for (const {
      parsedDocumentList,
    } of documentServersRunResult.parserPluginRunResult) {
      [].push.apply(result, parsedDocumentList);
    }
    return result;
  }
}
