if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.log('\x1B[31m%s\x1B[0m', '错误提示:', 'API-Helper基于pnpm包管理提供的workspace构建，所以必须安装pnpm包管理器后再安装依赖。');
  console.log('\x1B[33m%s\x1B[0m', 'pnpm安装指南:', '\x1B[34mhttps://pnpm.io/zh/installation');
  console.log('\x1B[31m%s\x1B[0m', '程序退出');
  process.exit(1);
}
