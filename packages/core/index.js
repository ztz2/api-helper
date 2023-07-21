"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processRequestFunctionConfig = exports.filterSchemaPrimitiveValue = exports.isSchemaPrimitiveValue = exports.getErrorMessage = exports.isSchemaObject = exports.ParserSwagger = exports.ParserYapi = exports.getSchema = exports.utils = void 0;
var utils = __importStar(require("./lib/utils"));
exports.utils = utils;
var parser_yapi_1 = __importDefault(require("./lib/parser/parser-yapi"));
exports.ParserYapi = parser_yapi_1.default;
var parser_swagger_1 = __importDefault(require("./lib/parser/parser-swagger"));
exports.ParserSwagger = parser_swagger_1.default;
var util_1 = require("./lib/utils/util");
Object.defineProperty(exports, "isSchemaObject", { enumerable: true, get: function () { return util_1.isSchemaObject; } });
Object.defineProperty(exports, "getErrorMessage", { enumerable: true, get: function () { return util_1.getErrorMessage; } });
Object.defineProperty(exports, "isSchemaPrimitiveValue", { enumerable: true, get: function () { return util_1.isSchemaPrimitiveValue; } });
Object.defineProperty(exports, "filterSchemaPrimitiveValue", { enumerable: true, get: function () { return util_1.filterSchemaPrimitiveValue; } });
var helpers_1 = require("./lib/helpers");
Object.defineProperty(exports, "getSchema", { enumerable: true, get: function () { return helpers_1.getSchema; } });
Object.defineProperty(exports, "processRequestFunctionConfig", { enumerable: true, get: function () { return helpers_1.processRequestFunctionConfig; } });
if (typeof window === 'object' && window != null && !window.process) {
    window.process = {
        cwd: function () {
            return '';
        }
    };
}
