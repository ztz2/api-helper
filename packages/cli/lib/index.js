"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCode = exports.run = exports.defineConfig = exports.checkIsInterface = void 0;
const types_1 = require("../lib/types");
const Service_1 = __importDefault(require("../lib/service/Service"));
const format_code_1 = __importDefault(require("../lib/tools/format-code"));
exports.formatCode = format_code_1.default;
__exportStar(require("./helpers"), exports);
var util_1 = require("@api-helper/template/lib/utils/util");
Object.defineProperty(exports, "checkIsInterface", { enumerable: true, get: function () { return util_1.checkIsInterface; } });
function defineConfig(config) {
    return Array.isArray(config) ? config : [config];
}
exports.defineConfig = defineConfig;
function run(cmd = null, configFilePath, isTestEnv = false) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (cmd) {
            case 'init':
                Service_1.default.init();
                break;
            default:
                yield new Service_1.default(configFilePath, isTestEnv).run();
        }
    });
}
exports.run = run;
