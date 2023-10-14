import * as fs from 'fs';
/**
 * 删除文件夹下所有问价及将文件夹下所有文件清空
 * @param {*} path
 */
function emptyDir(path) {
    var files = fs.readdirSync(path);
    files.forEach(function (file) {
        var filePath = "".concat(path, "/").concat(file);
        var stats = fs.statSync(filePath);
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
function rmEmptyDir(path, level) {
    if (level === void 0) { level = 0; }
    var files = fs.readdirSync(path);
    if (files.length > 0) {
        var tempFile_1 = 0;
        files.forEach(function (file) {
            tempFile_1++;
            rmEmptyDir("".concat(path, "/").concat(file), 1);
        });
        if (tempFile_1 === files.length && level !== 0) {
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
export function clearDir(path) {
    try {
        emptyDir(path);
        rmEmptyDir(path);
    }
    catch (_a) { }
}
