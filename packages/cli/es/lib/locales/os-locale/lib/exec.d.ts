/**
 @param {string} command
 @param {string[]} arguments_

 @returns {Promise<import('child_process').ChildProcess>}
 */
export declare function exec(command: any, arguments_: any): Promise<{
    stdout: string;
    stderr: string;
}>;
/**
 @param {string} command
 @param {string[]} arguments_

 @returns {string}
 */
export declare function execSync(command: any, arguments_: any): string;
