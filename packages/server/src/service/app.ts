// import { join } from 'path';
// import { readJson } from 'fs-extra';
import { Injectable } from '@nestjs/common';

// import { swagger20 } from '../mock/api';
import { ParserOpenAPI } from '../utils/openapi';
// import MockSwaggerApi from '../mock/swaggerApi.json';

// const mockSwaggerApi = require('../mock/swaggerApi.json');
// const {} = require();

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

  // Promise<Array<any>>
  async getSwaggerDocs(body: any): Promise<any> {
    const parserOpenAPI = new ParserOpenAPI();
    await parserOpenAPI.init(body, false);
    return await parserOpenAPI.parser();
  }
}
