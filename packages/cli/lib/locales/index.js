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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fast_glob_1 = __importDefault(require("fast-glob"));
const await_to_js_1 = __importDefault(require("await-to-js"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const lodash_1 = __importDefault(require("lodash"));
const os_locale_1 = require("./os-locale");
const util_1 = require("../tools/util");
require("./lang/en.json");
require("./lang/zh-cn.json");
class Locales {
    constructor() {
        this.locale = 'en';
        this.locales = [];
        this.localeMap = {};
        this.initialized = false;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            // 获取当前文件夹下语言
            if (Locales.memoLocales && Locales.memoLocaleMap) {
                this.locales = Locales.memoLocales;
                this.localeMap = Locales.memoLocaleMap;
            }
            else {
                const files = yield (0, fast_glob_1.default)((0, util_1.toUnixPath)(path.join(__dirname, './lang/**/*.json')), { cwd: process.cwd(), absolute: true, objectMode: true });
                // 从lang中获取所有语言配置
                for (const fileObj of files) {
                    try {
                        let { name, path } = fileObj;
                        name = name.replace(/\.json$/, '');
                        this.localeMap[name] = yield fs_extra_1.default.readJson(path);
                        this.locales.push(name);
                    }
                    catch (_a) { }
                }
                Locales.memoLocales = this.locales;
                Locales.memoLocaleMap = this.localeMap;
            }
            // 获取当前操作系统语言
            if (Locales.memoLocale) {
                this.locale = Locales.memoLocale;
            }
            else {
                const [error, local] = yield (0, await_to_js_1.default)((0, os_locale_1.osLocale)());
                if (!error) {
                    this.locale = local.includes('zh') ? 'zh-cn' : this.locales.includes(local) ? local : 'en';
                }
                Locales.memoLocale = this.locale;
            }
            this.initialized = true;
            return this;
        });
    }
    setLocale(locale) {
        this.locale = locale;
    }
    getLocale() {
        return this.locale;
    }
    get(key, defaultValue = '') {
        return lodash_1.default.get(this.localeMap[this.locale], key, defaultValue);
    }
    $t(key, defaultValue = '') {
        return this.get(key, defaultValue);
    }
}
exports.default = Locales;
Locales.memoLocale = '';
Locales.memoLocales = null;
Locales.memoLocaleMap = null;
