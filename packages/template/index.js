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
exports.createExportFile = exports.createFileDirectory = exports.ExportFile = exports.FileDirectory = exports.createProjectConfig = exports.createTemplate = exports.DocumentConfig = exports.Template = exports.renderRequestFunctionName = exports.renderRequestFunction = exports.renderObjectName = exports.renderComment = exports.renderObject = exports.renderInterfaceName = exports.renderInterface = exports.renderClassName = exports.renderTemplate = exports.renderClass = exports.renderAllApi = exports.formatCodeServer = exports.formatCode = exports.changeCase = exports.artTemplate = void 0;
var changeCase = __importStar(require("change-case"));
exports.changeCase = changeCase;
var art_template_1 = __importDefault(require("./lib/art-template"));
exports.artTemplate = art_template_1.default;
var prettier_1 = __importDefault(require("./lib/utils/prettier"));
exports.formatCode = prettier_1.default;
var format_code_server_1 = __importDefault(require("./lib/utils/format-code-server"));
exports.formatCodeServer = format_code_server_1.default;
var render_template_1 = __importDefault(require("./lib/render-template"));
exports.renderTemplate = render_template_1.default;
var render_all_api_1 = require("./lib/render-all-api");
Object.defineProperty(exports, "renderAllApi", { enumerable: true, get: function () { return render_all_api_1.renderAllApi; } });
var render_class_1 = require("./lib/render-class");
Object.defineProperty(exports, "renderClass", { enumerable: true, get: function () { return render_class_1.renderClass; } });
Object.defineProperty(exports, "renderClassName", { enumerable: true, get: function () { return render_class_1.renderClassName; } });
var render_interface_1 = require("./lib/render-interface");
Object.defineProperty(exports, "renderInterface", { enumerable: true, get: function () { return render_interface_1.renderInterface; } });
Object.defineProperty(exports, "renderInterfaceName", { enumerable: true, get: function () { return render_interface_1.renderInterfaceName; } });
var render_object_1 = require("./lib/render-object");
Object.defineProperty(exports, "renderObject", { enumerable: true, get: function () { return render_object_1.renderObject; } });
Object.defineProperty(exports, "renderComment", { enumerable: true, get: function () { return render_object_1.renderComment; } });
Object.defineProperty(exports, "renderObjectName", { enumerable: true, get: function () { return render_object_1.renderObjectName; } });
var render_request_function_1 = require("./lib/render-request-function");
Object.defineProperty(exports, "renderRequestFunction", { enumerable: true, get: function () { return render_request_function_1.renderRequestFunction; } });
Object.defineProperty(exports, "renderRequestFunctionName", { enumerable: true, get: function () { return render_request_function_1.renderRequestFunctionName; } });
var interface_1 = require("./lib/interface");
Object.defineProperty(exports, "Template", { enumerable: true, get: function () { return interface_1.Template; } });
Object.defineProperty(exports, "DocumentConfig", { enumerable: true, get: function () { return interface_1.DocumentConfig; } });
Object.defineProperty(exports, "createTemplate", { enumerable: true, get: function () { return interface_1.createTemplate; } });
Object.defineProperty(exports, "createProjectConfig", { enumerable: true, get: function () { return interface_1.createProjectConfig; } });
Object.defineProperty(exports, "FileDirectory", { enumerable: true, get: function () { return interface_1.FileDirectory; } });
Object.defineProperty(exports, "ExportFile", { enumerable: true, get: function () { return interface_1.ExportFile; } });
Object.defineProperty(exports, "createFileDirectory", { enumerable: true, get: function () { return interface_1.createFileDirectory; } });
Object.defineProperty(exports, "createExportFile", { enumerable: true, get: function () { return interface_1.createExportFile; } });
