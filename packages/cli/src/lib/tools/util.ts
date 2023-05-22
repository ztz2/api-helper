import path, { dirname, relative } from 'path';
import fs from 'node:fs';
import esbuild, { BuildOptions, BuildResult } from 'esbuild';
import { merge } from 'lodash';
import tmp, { FileOptions } from 'tmp';

export function resolve(p = '') {
  const args = Array.from(arguments) as unknown as string[];
  if (path.isAbsolute(p)) {
    return path.join.apply(null, args);
  }
  args.unshift(process.cwd());
  return path.resolve.apply(null, args);
}

/**
 * @description 创建临时文件
 * @param content {string} 文件内容
 * @param options {FileOptions}
 * @return {string} 临时文件绝对路径
 */
export function createTempFile(content?: string, options?: FileOptions): string {
  const currentOptions = merge({
    prefix: 'temp-build',
    postfix: '.js'
  }, options);
  const { name } = tmp.fileSync(currentOptions);
  if (content) {
    fs.writeFileSync(name, content);
  }
  return name;
}

export function checkType<T>(value: T, target: string) {
  return Object.prototype.toString.call(value) === `[object ${target}]`;
}

/**
 * @description 模块加载
 * @param file {string} 模块路径，绝对路径。
 * @param isAsync {boolean} 是否异步执行，默认true。
 * @return {T} 模块默认返回的内容
 */
export function loadModule<T>(file: string, isAsync = true): Promise<T> | T {
  file = path.isAbsolute(file) ? file : resolve(file);
  try {
    fs.accessSync(file, fs.constants.F_OK);
  } catch (e) {
    throw Error(`can't resolve ${file}`);
  }

  // 编译文件
  const buildParams: BuildOptions = {
    entryPoints: [file],
    bundle: false,
    splitting: false,
    format: 'cjs',
    platform: 'node',
    minify: false,
    color: true,
    write: false
  };

  const handleModule = (res: BuildResult): T => {
    const { outputFiles } = res;
    const [ outputFile ] = outputFiles ?? [];
    const { text } = outputFile;
    const filePath = createTempFile(text,  { postfix: '.js' });
    const moduleContent = require(filePath);
    if (moduleContent.__esModule) {
      return moduleContent.default;
    }
    return moduleContent;
  }

  if (isAsync) {
    return new Promise(async (resolve) => {
      const res = await esbuild.build(buildParams);
      resolve(handleModule(res));
    });
  }
  const res = esbuild.buildSync(buildParams);
  return handleModule(res);
}

/**
 * @description 将路径统一为 unix 风格的路径。
 * @param {string} path 路径
 * @return {string} unix 风格的路径
 */
export function toUnixPath(path: string) {
  return path.replace(/[/\\]+/g, '/')
}

/**
 * @description 获得规范化的相对路径。
 * @param {string} from 来源路径
 * @param {string} to 去向路径
 * @return { string } 相对路径
 */
export function getNormalizedRelativePath(from: string, to: string) {
  return toUnixPath(relative(dirname(from), to))
    .replace(/^(?=[^.])/, './')
    .replace(/\.(ts|js)x?$/i, '')
}
