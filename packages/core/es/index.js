import * as utils from './lib/utils';
import ParserYapi from './lib/parser/parser-yapi';
import ParserSwagger from './lib/parser/parser-swagger';
import { isSchemaObject, getErrorMessage, isSchemaPrimitiveValue, filterSchemaRoot, filterSchemaRequired, filterSchemaPrimitiveValue, } from './lib/utils/util';
import { getSchema, createDocument, createCategory, createApi, createSchema, transformType, processRequestFunctionConfig } from './lib/helpers';
if (typeof window === 'object' && window != null && !window.process) {
    window.process = {
        cwd: function () {
            return '';
        }
    };
}
export { utils, getSchema, ParserYapi, ParserSwagger, isSchemaObject, getErrorMessage, createDocument, createCategory, createApi, createSchema, transformType, isSchemaPrimitiveValue, filterSchemaPrimitiveValue, filterSchemaRoot, filterSchemaRequired, processRequestFunctionConfig, };
