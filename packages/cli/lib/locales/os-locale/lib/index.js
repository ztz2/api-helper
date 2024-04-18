"use strict";
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
exports.osLocaleSync = exports.osLocale = void 0;
const lcid_1 = __importDefault(require("lcid"));
// @ts-ignore
const exec_1 = require("./exec");
const defaultOptions = { spawn: true };
const defaultLocale = 'en-US';
function getStdOut(command, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield (0, exec_1.exec)(command, args)).stdout;
    });
}
function getStdOutSync(command, args) {
    return (0, exec_1.execSync)(command, args);
}
function getEnvLocale(env = process.env) {
    return env.LC_ALL || env.LC_MESSAGES || env.LANG || env.LANGUAGE;
}
function parseLocale(string) {
    const env = {};
    for (const definition of string.split('\n')) {
        const [key, value] = definition.split('=');
        env[key] = value.replace(/^"|"$/g, '');
    }
    return getEnvLocale(env);
}
function getLocale(string) {
    return (string && string.replace(/[.:].*/, ''));
}
function getLocales() {
    return __awaiter(this, void 0, void 0, function* () {
        return getStdOut('locale', ['-a']);
    });
}
function getLocalesSync() {
    return getStdOutSync('locale', ['-a']);
}
function getSupportedLocale(locale, locales = '') {
    return locales.includes(locale) ? locale : defaultLocale;
}
function getAppleLocale() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield Promise.all([
            getStdOut('defaults', ['read', '-globalDomain', 'AppleLocale']),
            getLocales(),
        ]);
        return getSupportedLocale(results[0], results[1]);
    });
}
function getAppleLocaleSync() {
    return getSupportedLocale(getStdOutSync('defaults', ['read', '-globalDomain', 'AppleLocale']), getLocalesSync());
}
function getUnixLocale() {
    return __awaiter(this, void 0, void 0, function* () {
        // @ts-ignore
        return getLocale(parseLocale(yield getStdOut('locale')));
    });
}
function getUnixLocaleSync() {
    // @ts-ignore
    return getLocale(parseLocale(getStdOutSync('locale')));
}
function getWinLocale() {
    return __awaiter(this, void 0, void 0, function* () {
        const stdout = yield getStdOut('wmic', ['os', 'get', 'locale']);
        const lcidCode = Number.parseInt(stdout.replace('Locale', ''), 16);
        return lcid_1.default.from(lcidCode);
    });
}
function getWinLocaleSync() {
    const stdout = getStdOutSync('wmic', ['os', 'get', 'locale']);
    const lcidCode = Number.parseInt(stdout.replace('Locale', ''), 16);
    return lcid_1.default.from(lcidCode);
}
function normalise(input) {
    return input.replace(/_/, '-');
}
const cache = new Map();
function osLocale(options = defaultOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        if (cache.has(options.spawn)) {
            return cache.get(options.spawn);
        }
        let locale;
        try {
            const envLocale = getEnvLocale();
            if (envLocale || options.spawn === false) {
                locale = getLocale(envLocale);
            }
            else if (process.platform === 'win32') {
                locale = yield getWinLocale();
            }
            else if (process.platform === 'darwin') {
                locale = yield getAppleLocale();
            }
            else {
                locale = yield getUnixLocale();
            }
        }
        catch (_a) { }
        const normalised = normalise(locale || defaultLocale);
        cache.set(options.spawn, normalised);
        return normalised;
    });
}
exports.osLocale = osLocale;
function osLocaleSync(options = defaultOptions) {
    if (cache.has(options.spawn)) {
        return cache.get(options.spawn);
    }
    let locale;
    try {
        const envLocale = getEnvLocale();
        if (envLocale || options.spawn === false) {
            locale = getLocale(envLocale);
        }
        else if (process.platform === 'win32') {
            locale = getWinLocaleSync();
        }
        else if (process.platform === 'darwin') {
            locale = getAppleLocaleSync();
        }
        else {
            locale = getUnixLocaleSync();
        }
    }
    catch (_a) { }
    const normalised = normalise(locale || defaultLocale);
    cache.set(options.spawn, normalised);
    return normalised;
}
exports.osLocaleSync = osLocaleSync;
