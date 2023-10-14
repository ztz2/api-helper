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
exports.PrettierOptions = exports.filterSchemaRequired = exports.filterSchemaRoot = exports.filterSchemaPrimitiveValue = exports.isSchemaPrimitiveValue = exports.transformType = exports.createSchema = exports.createApi = exports.randomChar = exports.createCategory = exports.createDocument = exports.getErrorMessage = exports.isSchemaObject = exports.ParserSwagger = exports.ParserYapi = exports.getSchema = exports.utils = void 0;
var utils = __importStar(require("./lib/utils"));
exports.utils = utils;
var parser_yapi_1 = __importDefault(require("./lib/parser/parser-yapi"));
exports.ParserYapi = parser_yapi_1.default;
var parser_swagger_1 = __importDefault(require("./lib/parser/parser-swagger"));
exports.ParserSwagger = parser_swagger_1.default;
var interface_1 = require("./lib/interface");
Object.defineProperty(exports, "PrettierOptions", { enumerable: true, get: function () { return interface_1.PrettierOptions; } });
var util_1 = require("./lib/utils/util");
Object.defineProperty(exports, "isSchemaObject", { enumerable: true, get: function () { return util_1.isSchemaObject; } });
Object.defineProperty(exports, "getErrorMessage", { enumerable: true, get: function () { return util_1.getErrorMessage; } });
Object.defineProperty(exports, "isSchemaPrimitiveValue", { enumerable: true, get: function () { return util_1.isSchemaPrimitiveValue; } });
Object.defineProperty(exports, "filterSchemaRoot", { enumerable: true, get: function () { return util_1.filterSchemaRoot; } });
Object.defineProperty(exports, "filterSchemaRequired", { enumerable: true, get: function () { return util_1.filterSchemaRequired; } });
Object.defineProperty(exports, "filterSchemaPrimitiveValue", { enumerable: true, get: function () { return util_1.filterSchemaPrimitiveValue; } });
Object.defineProperty(exports, "randomChar", { enumerable: true, get: function () { return util_1.randomChar; } });
var helpers_1 = require("./lib/helpers");
Object.defineProperty(exports, "getSchema", { enumerable: true, get: function () { return helpers_1.getSchema; } });
Object.defineProperty(exports, "createDocument", { enumerable: true, get: function () { return helpers_1.createDocument; } });
Object.defineProperty(exports, "createCategory", { enumerable: true, get: function () { return helpers_1.createCategory; } });
Object.defineProperty(exports, "createApi", { enumerable: true, get: function () { return helpers_1.createApi; } });
Object.defineProperty(exports, "createSchema", { enumerable: true, get: function () { return helpers_1.createSchema; } });
Object.defineProperty(exports, "transformType", { enumerable: true, get: function () { return helpers_1.transformType; } });
if (typeof window === 'object' && window != null && !window.process) {
    window.process = {
        cwd: function () {
            return '';
        }
    };
}
