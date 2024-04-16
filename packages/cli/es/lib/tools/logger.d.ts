import { LogLevels } from 'npmlog';
declare type LoggerOptions = {
    level?: LogLevels;
};
declare class Logger {
    constructor(options?: LoggerOptions);
    private processMessage;
    silly(message: string): void;
    silly(prefix: string, message: string): void;
    verbose(message: string): void;
    verbose(prefix: string, message: string): void;
    info(message: string): void;
    info(prefix: string, message: string): void;
    timing(message: string): void;
    timing(prefix: string, message: string): void;
    http(message: string): void;
    http(prefix: string, message: string): void;
    notice(message: string): void;
    notice(prefix: string, message: string): void;
    warn(message: string): void;
    warn(prefix: string, message: string): void;
    error(message: string | Error): void;
    error(prefix: string, message: string | Error): void;
    silent(message: string): void;
    silent(prefix: string, message: string): void;
}
declare const logger: Logger;
export default logger;
