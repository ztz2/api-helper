"use strict";
// Mini wrapper around `child_process` to make it behave a little like `execa`.
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
exports.execSync = exports.exec = void 0;
const node_util_1 = require("node:util");
const node_child_process_1 = __importDefault(require("node:child_process"));
const execFile = (0, node_util_1.promisify)(node_child_process_1.default.execFile);
/**
 @param {string} command
 @param {string[]} arguments_

 @returns {Promise<import('child_process').ChildProcess>}
 */
function exec(command, arguments_) {
    return __awaiter(this, void 0, void 0, function* () {
        const subprocess = yield execFile(command, arguments_, { encoding: 'utf8' });
        subprocess.stdout = subprocess.stdout.trim();
        return subprocess;
    });
}
exports.exec = exec;
/**
 @param {string} command
 @param {string[]} arguments_

 @returns {string}
 */
function execSync(command, arguments_) {
    return node_child_process_1.default.execFileSync(command, arguments_, {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
}
exports.execSync = execSync;
