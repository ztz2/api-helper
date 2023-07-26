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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var util_1 = require("@api-helper/core/lib/utils/util");
var render_template_apih_1 = __importDefault(require("./render-template-apih"));
var format_code_server_1 = __importDefault(require("./utils/format-code-server"));
exports.default = (function (
// 模板对象
templateMap, 
// 渲染数据
params, 
// 渲染配置，参考：
documentConfig, 
// axios配置
formatCodeFunc) { return __awaiter(void 0, void 0, void 0, function () {
    var result, formatCodeExtension, lodash, apih, config, artTemplate, exe, codeList, i, itm, filterCodeList, filterCodeListIdxMap, i, content, formattedCodeList, i, e_1, errorText;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                templateMap = _.cloneDeep(templateMap);
                params = _.cloneDeep(params);
                documentConfig = _.cloneDeep(documentConfig !== null && documentConfig !== void 0 ? documentConfig : {});
                formatCodeFunc = formatCodeFunc !== null && formatCodeFunc !== void 0 ? formatCodeFunc : format_code_server_1.default;
                result = [];
                formatCodeExtension = templateMap.formatCodeExtension;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                lodash = _;
                apih = render_template_apih_1.default;
                config = documentConfig;
                artTemplate = apih.template.artTemplate;
                exe = { renderTemplate: null };
                eval("".concat(templateMap.content, "\n")
                    + 'exe.renderTemplate = renderTemplate');
                if (typeof exe.renderTemplate !== 'function') {
                    // 模板中缺少 renderTemplate 函数
                    result = [{
                            title: '异常模板',
                            content: "// \u6A21\u677F\u6E32\u67D3\u9519\u8BEF\uFF1A\u6A21\u677F\u4E2D\u7F3A\u5C11 renderTemplate \u51FD\u6570\n",
                        }];
                    return [2 /*return*/, result];
                }
                codeList = exe.renderTemplate(params, config);
                // 模版返回值异常
                if (!Array.isArray(codeList)) {
                    result = [{
                            title: '异常模板',
                            content: "// \u6A21\u677F\u6E32\u67D3\u9519\u8BEF\uFF1ArenderTemplate \u51FD\u6570\u8FD4\u56DE\u503C\u9519\u8BEF\uFF0C\u6B63\u786E\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u5E94\u8BE5\u662F\uFF1AArray<APIHelper.TemplateContent>\n// \u6570\u7EC4\u91CC\u9762\u6BCF\u4E00\u9879\u90FD\u662F\u4E00\u4E2A\u6A21\u677F\u3002\u4F8B\u5B50\u6570\u636E\uFF1A[{ title: '\u6A21\u7248\u6807\u9898', content: '\u6A21\u7248\u5185\u5BB9' }];\n// APIHelper.TemplateContent \u7C7B\u578B\u8BF4\u660E\u6587\u6863: https://github.com/ztz2/api-helper/blob/main/packages/core/lib/types.d.ts\n",
                        }];
                    return [2 /*return*/, result];
                }
                // 兼容旧版模板的返回值
                for (i = 0; i < codeList.length; i++) {
                    itm = codeList[i];
                    result.push((0, util_1.checkType)(itm, 'Object') ? itm : {
                        title: "\u6A21\u7248".concat(i + 1),
                        content: itm,
                    });
                }
                if (!formatCodeExtension) {
                    return [2 /*return*/, result];
                }
                filterCodeList = [];
                filterCodeListIdxMap = {};
                for (i = 0; i < result.length; i++) {
                    content = result[i].content;
                    if (content && (content === null || content === void 0 ? void 0 : content.trim()) !== '') {
                        filterCodeList.push(content);
                        filterCodeListIdxMap[filterCodeList.length - 1] = i;
                    }
                }
                if (filterCodeList.length === 0) {
                    return [2 /*return*/, result];
                }
                return [4 /*yield*/, formatCodeFunc(filterCodeList.map(function (c) { return ({
                        sourceCode: c,
                        formatCodeExtension: formatCodeExtension,
                        prettierOptions: documentConfig === null || documentConfig === void 0 ? void 0 : documentConfig.prettierOptions,
                    }); }))];
            case 2:
                formattedCodeList = (_b.sent());
                for (i = 0; i < formattedCodeList.length; i++) {
                    result[filterCodeListIdxMap[i]].content = (_a = formattedCodeList[i]) !== null && _a !== void 0 ? _a : '';
                }
                return [3 /*break*/, 4];
            case 3:
                e_1 = _b.sent();
                errorText = (0, util_1.getErrorMessage)(e_1);
                result = [{
                        title: '异常模版',
                        content: errorText,
                    }];
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, result];
        }
    });
}); });
