import * as utils from './lib/utils';
import ParserYapi from './lib/parser/parser-yapi';
import ParserSwagger from './lib/parser/parser-swagger';
import { isSchemaObject, isSchemaPrimitiveValue, filterSchemaPrimitiveValue, } from './lib/utils/util';
import { getSchema, processRequestFunctionConfig } from './lib/helpers';
if (typeof window === 'object' && window != null && !window.process) {
    window.process = {
        cwd: function () {
            return '';
        }
    };
}
export { utils, getSchema, ParserYapi, ParserSwagger, isSchemaObject, isSchemaPrimitiveValue, filterSchemaPrimitiveValue, processRequestFunctionConfig };
