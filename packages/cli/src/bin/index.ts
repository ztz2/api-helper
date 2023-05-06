// #!/usr/bin/env node
import { cac } from 'cac';
import * as TSNode from 'ts-node';

import { run } from '../lib';

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

const cli = cac('apih');

// global options
interface GlobalCLIOptions {
  c?: string
  init?: boolean | string
  help?: string | boolean
}

// API生成
cli
.command('[root]', 'API生成') // default command
.option('--c', `使用自定义配置文件路径`)
.option('--help', `查看帮助信息`)
.action(async (root: string, options: GlobalCLIOptions) => {
  if (options.help != null) {
    return run('help');
  }
  await run(null, options.c);
});

// 初始化配置
cli
  .command('init', '初始化配置')
  .action(async () => {
    await run('init');
  });

cli.parse();
