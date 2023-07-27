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
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearDir = void 0;
const fs = __importStar(require("fs"));
/**
 * 删除文件夹下所有问价及将文件夹下所有文件清空
 * @param {*} path
 */
function emptyDir(path) {
    const files = fs.readdirSync(path);
    files.forEach((file) => {
        const filePath = `${path}/${file}`;
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            emptyDir(filePath);
        }
        else {
            fs.unlinkSync(filePath);
            // console.log(`删除${file}文件成功`);
        }
    });
}
/**
 * 删除指定路径下的所有空文件夹
 * @param {*} path
 */
function rmEmptyDir(path, level = 0) {
    const files = fs.readdirSync(path);
    if (files.length > 0) {
        let tempFile = 0;
        files.forEach((file) => {
            tempFile++;
            rmEmptyDir(`${path}/${file}`, 1);
        });
        if (tempFile === files.length && level !== 0) {
            fs.rmdirSync(path);
        }
    }
    else {
        level !== 0 && fs.rmdirSync(path);
    }
}
/**
 * 清空指定路径下的所有文件及文件夹
 * @param {*} path
 */
function clearDir(path) {
    try {
        emptyDir(path);
        rmEmptyDir(path);
    }
    catch (_a) { }
}
exports.clearDir = clearDir;
