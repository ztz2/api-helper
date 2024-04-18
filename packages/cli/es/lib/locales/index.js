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
import * as path from 'path';
import fg from 'fast-glob';
import to from 'await-to-js';
import fs from 'fs-extra';
import lodash from 'lodash';
import { osLocale } from './os-locale';
import { toUnixPath } from '../tools/util';
import './lang/en.json';
import './lang/zh-cn.json';
var Locales = /** @class */ (function () {
    function Locales() {
        this.locale = 'en';
        this.locales = [];
        this.localeMap = {};
        this.initialized = false;
    }
    Locales.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var files, files_1, files_1_1, fileObj, name_1, path_1, _a, _b, _c, e_1_1, _d, error, local;
            var e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!(Locales.memoLocales && Locales.memoLocaleMap)) return [3 /*break*/, 1];
                        this.locales = Locales.memoLocales;
                        this.localeMap = Locales.memoLocaleMap;
                        return [3 /*break*/, 13];
                    case 1: return [4 /*yield*/, fg(toUnixPath(path.join(__dirname, './lang/**/*.json')), { cwd: process.cwd(), absolute: true, objectMode: true })];
                    case 2:
                        files = _f.sent();
                        _f.label = 3;
                    case 3:
                        _f.trys.push([3, 10, 11, 12]);
                        files_1 = __values(files), files_1_1 = files_1.next();
                        _f.label = 4;
                    case 4:
                        if (!!files_1_1.done) return [3 /*break*/, 9];
                        fileObj = files_1_1.value;
                        _f.label = 5;
                    case 5:
                        _f.trys.push([5, 7, , 8]);
                        name_1 = fileObj.name, path_1 = fileObj.path;
                        name_1 = name_1.replace(/\.json$/, '');
                        _a = this.localeMap;
                        _b = name_1;
                        return [4 /*yield*/, fs.readJson(path_1)];
                    case 6:
                        _a[_b] = _f.sent();
                        this.locales.push(name_1);
                        return [3 /*break*/, 8];
                    case 7:
                        _c = _f.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        files_1_1 = files_1.next();
                        return [3 /*break*/, 4];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (files_1_1 && !files_1_1.done && (_e = files_1.return)) _e.call(files_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 12:
                        Locales.memoLocales = this.locales;
                        Locales.memoLocaleMap = this.localeMap;
                        _f.label = 13;
                    case 13:
                        if (!Locales.memoLocale) return [3 /*break*/, 14];
                        this.locale = Locales.memoLocale;
                        return [3 /*break*/, 16];
                    case 14: return [4 /*yield*/, to(osLocale())];
                    case 15:
                        _d = __read.apply(void 0, [_f.sent(), 2]), error = _d[0], local = _d[1];
                        if (!error) {
                            this.locale = local.includes('zh') ? 'zh-cn' : this.locales.includes(local) ? local : 'en';
                        }
                        Locales.memoLocale = this.locale;
                        _f.label = 16;
                    case 16:
                        this.initialized = true;
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Locales.prototype.setLocale = function (locale) {
        this.locale = locale;
    };
    Locales.prototype.getLocale = function () {
        return this.locale;
    };
    Locales.prototype.get = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ''; }
        return lodash.get(this.localeMap[this.locale], key, defaultValue);
    };
    Locales.prototype.$t = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ''; }
        return this.get(key, defaultValue);
    };
    Locales.memoLocale = '';
    Locales.memoLocales = null;
    Locales.memoLocaleMap = null;
    return Locales;
}());
export default Locales;
