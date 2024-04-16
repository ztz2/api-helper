import npmlog, { LogLevels } from 'npmlog';

const Logger_Levels: Array<LogLevels> = ['silly', 'verbose', 'info', 'timing', 'http', 'notice', 'warn', 'error', 'silent'];

type LoggerOptions = {
  level?: LogLevels
}
class Logger {
  constructor(options: LoggerOptions = {}) {
    const level = options.level || 'verbose';
    if (Logger_Levels.includes(level)) {
      npmlog.level = level;
    }
  }
  private processMessage(prefix: string | Error = '', message: string | Error = ''): [string, string] {
    let currentPrefix = prefix;
    let currentMessage = message;
    if (!message) {
      currentPrefix = '';
      currentMessage = prefix;
    }
    if (currentPrefix instanceof Error) {
      currentPrefix = currentPrefix.message;
    }
    if (currentMessage instanceof Error) {
      currentMessage = currentMessage.message;
    }
    return [ currentPrefix, currentMessage ];
  }

  public silly(message: string): void;
  public silly(prefix: string, message: string): void;
  public silly (prefix = '', message = '') {
    npmlog.silly(...this.processMessage(prefix, message));
  }

  public verbose(message: string): void;
  public verbose(prefix: string, message: string): void;
  public verbose (prefix = '', message = '') {
    npmlog.verbose(...this.processMessage(prefix, message));
  }

  public info(message: string): void;
  public info(prefix: string, message: string): void;
  public info (prefix = '', message = '') {
    npmlog.info(...this.processMessage(prefix, message));
  }

  public timing(message: string): void;
  public timing(prefix: string, message: string): void;
  public timing (prefix = '', message = '') {
    npmlog.timing(...this.processMessage(prefix, message));
  }

  public http(message: string): void;
  public http(prefix: string, message: string): void;
  public http (prefix = '', message = '') {
    npmlog.http(...this.processMessage(prefix, message));
  }

  public notice(message: string): void;
  public notice(prefix: string, message: string): void;
  public notice (prefix = '', message = '') {
    npmlog.notice(...this.processMessage(prefix, message));
  }

  public warn(message: string): void;
  public warn(prefix: string, message: string): void;
  public warn (prefix = '', message = '') {
    npmlog.warn(...this.processMessage(prefix, message));
  }

  public error(message: string | Error): void;
  public error(prefix: string, message: string | Error): void;
  public error (prefix: string | Error = '', message: string | Error = '') {
    npmlog.error(...this.processMessage(prefix, message));
  }

  public silent(message: string): void;
  public silent(prefix: string, message: string): void;
  public silent (prefix = '', message = '') {
    npmlog.silent(...this.processMessage(prefix, message));
  }
}

// 判断是否启用了debug模式，debug模式下，显示更多的日志信息，通过debug指令
const loggerOptions: LoggerOptions = {
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
