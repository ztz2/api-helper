var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { merge } from 'lodash';
import { checkType } from '@api-helper/core/lib/utils/util';
import PrettierrcOptions from '@api-helper/cli/lib/tools/prettierrc-options';
import { DEFAULT_SELECT_API_TPL_ID, DEFAULT_SELECT_MODEL_TPL_ID, } from './constants';
var DocumentConfig = /** @class */ (function () {
    /** 以下属性是基于项目级别的通用配置项 - 结束 * */
    function DocumentConfig(id) {
        this.id = '';
        // 项目名称
        this.title = '';
        // 文档地址
        this.url = 'http://localhost:3210/app/swagger/mock';
        // 文档类型，默认可以解析 swagger
        this.type = 'swagger';
        // 访问文档可能需要认证信息，http auth验证方式
        this.auth = {
            username: '',
            password: '',
        };
        // 访问文档可能需要认证信息，通过使用token访问
        this.authToken = '';
        // 获取数据的key，body[dataKey]
        this.dataKey = '';
        /** 以下属性是基于项目级别的通用配置项 - 开始 * */
        // 选择的文件模块ID
        this.exportFileId = '';
        // 文件模块导出路径
        this.exportFilePath = '';
        // API选择的模版ID
        this.apiTplId = DEFAULT_SELECT_API_TPL_ID;
        // 模型选择的模版ID
        this.modelTplId = DEFAULT_SELECT_MODEL_TPL_ID;
        // 头部代码
        this.headCodeText = 'import request from \'@/api/request\';\n';
        // 只生成API函数
        this.onlyApiFunc = false;
        // 输入框属性：maxlength
        this.maxlength = 128;
        // 输入框属性：placeholder
        this.placeholder = true;
        // 是否使用栅格布局
        this.grid = false;
        // Form表单项是否生成label
        this.generateLabel = false;
        // prettier配置对象
        this.prettierrcOptions = new PrettierrcOptions();
        if (typeof id === 'string') {
            this.id = id;
        }
        if (Object.prototype.toString.call(id) === '[object Object]') {
            merge(this, id);
        }
    }
    return DocumentConfig;
}());
export { DocumentConfig };
var Template = /** @class */ (function () {
    function Template(options) {
        // 模板名称
        this.label = '';
        // 唯一ID
        this.value = '';
        // 模板内容
        this.content = '';
        // 是否为内置模版
        this.builtIn = false;
        // 格式化代码的文件后缀名
        this.formatCodeExtension = '.ts';
        checkType(options, 'Object') && merge(this, options);
    }
    return Template;
}());
export { Template };
var FileDirectory = /** @class */ (function () {
    function FileDirectory(options) {
        var e_1, _a;
        // 文件(夹)名称
        this.label = '';
        // 文件(夹)Id
        this.value = '';
        // 是否为文件夹
        this.isFolder = false;
        // 关联的apiId
        this.apiId = '';
        // 关联的模板id
        this.modelTplId = '';
        // 关联的模板内容下标
        this.modelTplIndex = 0;
        // 模版生成之后的内容
        this.templateContent = '';
        this.children = [];
        if (options && Object.prototype.toString.call(options) === '[object Object]') {
            try {
                for (var _b = __values(Object.entries(options)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), k = _d[0], v = _d[1];
                    // @ts-ignore
                    this[k] = v;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    return FileDirectory;
}());
export { FileDirectory };
var ExportFile = /** @class */ (function () {
    function ExportFile(options) {
        var e_2, _a;
        // 模板名称
        this.label = '';
        // 唯一ID
        this.value = '';
        // 是否为内置模版
        this.builtIn = false;
        // 格式化代码的文件后缀名
        this.formatCodeExtension = '.ts';
        // 模板内容
        this.fileDirectory = [];
        // 文件模块导出路径
        this.exportFilePath = '';
        if (options && Object.prototype.toString.call(options) === '[object Object]') {
            try {
                for (var _b = __values(Object.entries(options)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), k = _d[0], v = _d[1];
                    // @ts-ignore
                    this[k] = v;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    return ExportFile;
}());
export { ExportFile };
export function createTemplate(id) {
    return new DocumentConfig(id);
}
export function createProjectConfig(id) {
    return new DocumentConfig(id);
}
export function createFileDirectory(options) {
    return new FileDirectory(options);
}
export function createExportFile(options) {
    return new ExportFile(options);
}
