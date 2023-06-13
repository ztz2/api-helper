#!/usr/bin/env node
import path from 'path';
import { Command } from 'commander';

import { run } from '@/lib';
import log from '@/lib/tools/log';
import { loadModule } from '@/lib/tools/util';

const program = new Command();

const { version } = loadModule(path.join(require.resolve('@api-helper/cli'), '../../package.json'), false) as Recordable;

// root指令
program
  .version(version)
  .description('API生成工具')
  .option('-D, --debug', '调试模式')
  .option('-c, --config <string>', '配置文件')
  .action(async function (options: { config: string }) {
    const { config } = options;
    if (config) {
      log.verbose('-c --config ', String(config));
    }
    await run('root', config);
  });

// 帮助信息
program.addHelpText('after', `
详细命令说明:
初始化配置文件: apih init
生成代码: apih
生成代码(指定配置文件): apih -c 路径/配置文件.ts
查看帮助: apih -h

# GitHub
https://github.com/ztz2/api-helper
`);

// 初始化配置
program
  .command('init')
  .description('初始化配置')
  .option('-D, --debug', '调试模式')
  .action(async function () {
    await run('init');
  });

program.parse();
