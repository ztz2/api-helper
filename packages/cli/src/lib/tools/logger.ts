import npmlog, { LogLevels } from 'npmlog';

const Logger_Levels: Array<LogLevels> = ['silly', 'verbose', 'info', 'timing', 'http', 'notice', 'warn', 'error', 'silent'];

type LoggerConstructorOptions = {
  level?: LogLevels;
  prefix?: string;
}
type LoggerOptions = {
  prefix?: string;
  lineFeed?: boolean;
}
class Logger {
  constructor(options: LoggerConstructorOptions = {}) {
    const level = options.level || 'verbose';
    if (Logger_Levels.includes(level)) {
      npmlog.level = level;
    }
  }

  private logLineFeed(options?: LoggerOptions) {
    if (options?.lineFeed) { console.log(' '); }
  }

  public silly (message = '', options?: LoggerOptions) {
    this.logLineFeed(options);
    npmlog.silly(options?.prefix ?? '', message);
  }

  public verbose (message = '', options?: LoggerOptions) {
    this.logLineFeed(options);
    npmlog.verbose(options?.prefix ?? '', message);
  }

  public info (message = '', options?: LoggerOptions) {
    this.logLineFeed(options);
    npmlog.info(options?.prefix ?? '', message);
  }

  public timing (message = '', options?: LoggerOptions) {
    this.logLineFeed(options);
    npmlog.timing(options?.prefix ?? '', message);
  }

  public http (message = '', options?: LoggerOptions) {
    this.logLineFeed(options);
    npmlog.http(options?.prefix ?? '', message);
  }

  public notice (message = '', options?: LoggerOptions) {
    this.logLineFeed(options);
    npmlog.notice(options?.prefix ?? '', message);
  }

  public warn (message = '', options?: LoggerOptions) {
    this.logLineFeed(options);
    npmlog.warn(options?.prefix ?? '', message);
  }

  public error (message = '', options?: LoggerOptions) {
    this.logLineFeed(options);
    npmlog.error(options?.prefix ?? '', message);
  }

  public silent (message = '', options?: LoggerOptions) {
    this.logLineFeed(options);
    npmlog.silent(options?.prefix ?? '', message);
  }
}

// 判断是否启用了debug模式，debug模式下，显示更多的日志信息，通过debug指令
const loggerOptions: LoggerConstructorOptions = {
  level: 'verbose'
};
for (const v of process.argv) {
  if (v.includes('-D') || v.includes('--debug')) {
    loggerOptions.level = 'verbose';
    break;
  }
}
// 判断是否启用debug模式，通过环境变量
if (!loggerOptions.level && process.env.LOG_LEVEL) {
  loggerOptions.level = process.env.LOG_LEVEL as LogLevels;
}

const logger = new Logger(loggerOptions);

export default logger;
