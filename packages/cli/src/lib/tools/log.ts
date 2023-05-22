import log from 'npmlog';

const logLevel = [
  'verbose',
  'info',
  'warn',
  'error',
];

// 判断是否启用了debug模式，debug模式下，显示更多的日志信息，通过debug指令
for (const v of process.argv) {
  if (v.includes('-D') || v.includes('--debug')) {
    log.level = 'verbose';
    break;
  }
}
// 判断是否启用debug模式，通过环境变量
const logLevelEnvIndex = logLevel.indexOf(process.env.LOG_LEVEL ?? '');
if (logLevelEnvIndex !== -1) {
  log.level = logLevel[logLevelEnvIndex];
}

export default log;
