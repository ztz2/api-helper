import { LogLevels } from 'npmlog';
declare type LoggerConstructorOptions = {
    level?: LogLevels;
    prefix?: string;
};
declare type LoggerOptions = {
    prefix?: string;
    lineFeed?: boolean;
};
declare class Logger {
    constructor(options?: LoggerConstructorOptions);
    private logLineFeed;
    silly(message?: string, options?: LoggerOptions): void;
    verbose(message?: string, options?: LoggerOptions): void;
    info(message?: string, options?: LoggerOptions): void;
    timing(message?: string, options?: LoggerOptions): void;
    http(message?: string, options?: LoggerOptions): void;
    notice(message?: string, options?: LoggerOptions): void;
    warn(message?: string, options?: LoggerOptions): void;
    error(message?: string, options?: LoggerOptions): void;
    silent(message?: string, options?: LoggerOptions): void;
}
declare const logger: Logger;
export default logger;
