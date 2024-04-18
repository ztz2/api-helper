#!/usr/bin/env node
import path from 'path';
import { Command } from 'commander';

import {
  loadModule,
  createFolder,
  removeFolder,
} from '@/lib/tools/util';
import { run } from '@/lib';
import Locales from '@/lib/locales';
import { ServerOptions } from '@/lib/service/Service';

const program = new Command();

const basePath = createFolder(path.join(__dirname, './.cache.load.module'));
const { version } = loadModule(path.join(require.resolve('@api-helper/cli'), '../../package.json'), {
  isAsync: false,
  folder: basePath,
  callback: () => {
    removeFolder(basePath);
  }
}) as Recordable;

async function main() {
  const locales = await new Locales().init();

  // root指令
  program
    .version(version)
    .description(locales.$t('API生成工具'))
    .option('-c, --config <string>', locales.$t('自定义配置文件路径'))
    .option('-u, --url <string>', locales.$t(`接口文档地址【当type为'swagger'类型时，可以读取本地文件，这里就可以一个本地文件路径】`))
    .option('-o, --output-path <path>', locales.$t('代码生成后的输出路径'))
    .option('--target <string>', locales.$t('生成的目标代码类型，默认: typescript'))
    .option('--type <string>', locales.$t('文档类型，根据文档类型，调用内置的解析器，默认值: \'swagger\''))
    .option('--auth-token <string>', locales.$t('访问文档可能需要认证信息，通过使用token访问，yapi的验证token'))
    .action(async function () {
      const options: ServerOptions = program.opts();
      await run(null, options);
    });

// 帮助信息
  program.addHelpText('after', locales.$t('帮助信息'));

// 初始化配置
  program
    .command('init')
    .description(locales.$t('初始化配置'))
    .option('-c, --config <string>', locales.$t('自定义配置文件路径'))
    .action(async function () {
      const options: ServerOptions = program.opts();
      await run('init', options);
    });

  program.parse();
}

main();
