// #!/usr/bin/env node
import yargs from 'yargs';
import * as TSNode from 'ts-node';
import { join, resolve } from 'path';

const {
  stat,
  outputFile
} = require('fs-extra');
import { CLI } from './cli';
import { Config } from './types';

export * from './types';

const prompts = require('prompts');
const consola = require('consola');

TSNode.register({
  skipProject: true,
  transpileOnly: true,
  compilerOptions: {
    strict: false,
    allowJs: true,
    lib: ['es2017'],
    target: 'es2017',
    module: 'commonjs',
    moduleResolution: 'node',
    declaration: false,
    importHelpers: false,
    removeComments: false,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true
  }
});

export function defineConfig(config: Config | Config[]) {
  return Array.isArray(config) ? config : [config];
}

async function init() {
  const answers = await prompts([{
    type: 'select',
    name: 'codeType',
    message: '请选择配置文件类型？',
    choices: [
      { title: 'TypeScript（apih.config.ts）', value: 'apih.config.ts' },
      { title: 'JavaScript（apih.config.js）', value: 'apih.config.js' },
    ],
  }]);

  if (!answers.codeType) {
    return;
  }

  // 检测文件是否已经存在
  try {
    await stat(join(process.cwd(), answers.codeType));
    const overrideAnswer = await prompts([{
      type: 'confirm',
      name: 'override',
      message: '检测到已经存在配置文件，是否覆盖已有配置文件？'
    }]);
    if (!overrideAnswer.override) {
      return;
    }
  } catch {}

  const isTS = answers.codeType.endsWith('.ts');

  const code =
`import { join } from 'path';
import { defineConfig } from '@api-helper/cli';

export default defineConfig({
  documentServers: [
    {
      // 文档地址
      url: 'https://petstore.swagger.io/v2/swagger.json',
      // 文档类型，默认可以解析 swagger 和 yapi，其他文档 custom 类型，需要自行实现 onParseDocument 钩子函数
      type: 'swagger',
      // 获取数据的key，body[dataKey]
      dataKey: ''
    }
  ],
  // 请求函数文件路径
  requestFunctionFilePath: 'src/utils/request',
  // 输出信息
  output: {
    // 输出路径
    path: join(__dirname, 'src/api'),
    // 输出文件名称，会根据后缀名(.js|.ts)判断是生成TS还是JS文件
    filename: 'index.ts',
  }
});
`
  try {
    await outputFile(join(process.cwd(), answers.codeType), code);
    consola.success('已生成配置文件');
  } catch (e) {
    return consola.fatal('配置文件生成失败');
  }
}

async function help() {
  consola.info(
    `
# 用法
初始化配置文件: apih init
生成代码: ytt
生成代码(指定配置文件): ytt -c 路径/配置文件.ts
查看帮助: ytt help

# GitHub
https://github.com/ztz2/api-helper
`)
}

export async function run(cmd: string, configFilePath?: string) {
  switch (cmd) {
    case 'init':
      await init();
      break;
    case 'help':
      await help();
      break;
    default:
      await new CLI(configFilePath).run();
  }
}

if (require.main === module) {
  const argv = yargs(process.argv).alias('c', 'config').argv;
  const configFilePath = argv.config ? resolve(process.cwd(), argv.config as string) : undefined;
  run(argv._[2] as string, configFilePath);
}
