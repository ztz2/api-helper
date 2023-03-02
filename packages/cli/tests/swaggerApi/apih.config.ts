import { join } from 'path';
import { Config } from '@api-helper/cli';
import { APIHelper, ChangeCase } from '@api-helper/core';

const APIH_CONFIG: Config = {
  serverURL: 'https://petstore.swagger.io/v2/swagger.json',
  requestFunctionFilePath: 'src/utils/request',
  type: 'swagger',
  dataKey: '',
  auth: {
    username: '',
    password: ''
  },
  authToken: '',
  output: {
    path: join(__dirname, 'src/api2'),
    filename: 'index.js',
  },
  events: {
    onGenerateInterfaceName(
      schema: APIHelper.Schema | null,
      api: APIHelper.API,
      options: {
        isExtraData?: boolean;
        paramType: 'request' | 'response';
        changeCase: ChangeCase;
      }
    ): string {
      let name = schema?.type === 'object' ? 'I' : '';
      name += api.path;
      if (options.paramType) {
        name += ` ${options.paramType}`;
      }
      if (!schema || schema?.type === 'array') {
        name += 'Type';
      }
      if (options.isExtraData) {
        name += 'ExtraData';
      }
      name += `By ${api.method}`;
      return options.changeCase.pascalCase(name);
    }
  }
};

export default APIH_CONFIG;
