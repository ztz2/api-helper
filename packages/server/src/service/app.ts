import { Injectable } from '@nestjs/common';
import { Config } from '@api-helper/cli';
import { APIHelper } from '@api-helper/core';
import { documentServersRunParserPlugins } from '@api-helper/cli/lib/tools/util';
import ParserYapiPlugin from '@api-helper/cli/lib/service/parser-plugins/parser-yapi-plugin';
import ParserSwaggerPlugin from '@api-helper/cli/lib/service/parser-plugins/parser-swagger-plugin';

import { Docs } from '../dto/docs';
import to from 'await-to-js';

@Injectable()
export class AppService {
  async getHello() {
    return `Hello API Helper. ${Date.now()}`;
  }

  async getDocs(docs: Docs): Promise<APIHelper.Document[]> {
    const documentServers = [docs] as Config['documentServers'];
    const [e, documentServersRunResult] = await to(documentServersRunParserPlugins(
      documentServers,
      [new ParserYapiPlugin(), new ParserSwaggerPlugin()]
    ));
    const result = [];
    if (e) {
      return result;
    }
    for (const { parsedDocumentList } of documentServersRunResult.parserPluginRunResult) {
      [].push.apply(result, parsedDocumentList);
    }
    return result;
  }
}
