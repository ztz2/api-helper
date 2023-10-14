import type { Options } from 'prettier';
import { FormatCodeExtension } from './constant';
export declare type FormatCodeConfig = {
    sourceCode: string;
    formatCodeExtension: FormatCodeExtension;
    prettierOptions?: Partial<PrettierOptions>;
};
export declare class PrettierOptions implements Options {
    /**
     * 一行最多多少个字符（超过后会要求换行）
     * @default 80
     */
    printWidth: number;
    /**
     * 指定每个缩进级别的空格数
     * @default 2
     */
    tabWidth: number;
    /**
     * 使用制表符而不是空格缩进行
     * @default false
     */
    useTabs: boolean;
    /**
     * 在语句末尾需要加分号
     * @default true
     */
    semi: boolean;
    /**
     * 使用单引号
     * @default false
     */
    singleQuote: boolean;
    /**
     * 在 JSX 中使用单引号而不是双引号
     * @default false
     */
    jsxSingleQuote: boolean;
    /**
     * 是否在多行逗号分隔语法中，在最后一个元素后面加逗号
     * @default 'es5'
     */
    trailingComma: "none" | "es5" | "all";
    /**
     * 在单行对象中，在左右保留一个空格
     * @default true
     */
    bracketSpacing: boolean;
    /**
     * Put the `>` of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being
     * alone on the next line (does not apply to self closing elements).
     * @default false
     */
    bracketSameLine: boolean;
    /**
     * Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
     * @default false
     * @deprecated use bracketSameLine instead
     */
    jsxBracketSameLine: boolean;
    /**
     * Format only a segment of a file.
     * @default 0
     */
    /**
     * Format only a segment of a file.
     * @default Infinity
     */
    /**
     * Specify which parser to use.
     */
    /**
     * Specify the input filepath. This will be used to do parser inference.
     */
    /**
     * 只格式化文件顶部有特殊注释（pragma）的文件
     * Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file.
     * This is very useful when gradually transitioning large, unformatted codebases to prettier.
     * @default false
     */
    requirePragma: boolean;
    /**
     * 对通过prettier格式化后的文件顶部添加@format特殊注释
     * Prettier can insert a special @format marker at the top of files specifying that
     * the file has been formatted with prettier. This works well when used in tandem with
     * the --require-pragma option. If there is already a docblock at the top of
     * the file then this option will add a newline to it with the @format marker.
     * @default false
     */
    insertPragma: boolean;
    /**
     * 对一行字符数超过printWidth的文本换行 （仅对markdown文件有效）
     * By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer.
     * In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out.
     * @default 'preserve'
     */
    proseWrap: "always" | "never" | "preserve";
    /**
     * 单参数箭头函数是否需要加小括号
     * @default 'always'
     */
    arrowParens: "always" | "avoid";
    /**
     * Provide ability to support new languages to prettier.
     */
    /**
     * Specify plugin directory paths to search for plugins if not installed in the same `node_modules` where prettier is located.
     */
    /**
     * 去除html元素中的多余空格
     * How to handle whitespaces in HTML.
     * @default 'css'
     */
    htmlWhitespaceSensitivity: "css" | "strict" | "ignore";
    /**
     * 换行符类型
     * @default 'lf'
     */
    endOfLine: "auto" | "lf" | "crlf" | "cr";
    /**
     * 在何时需要给对象属性名添加引号（相当于JSON对象写法）
     * @default 'as-needed'
     */
    quoteProps: "preserve" | "as-needed" | "consistent";
    /**
     * vue文件中<script>和<style>标签内部代码是否缩进
     * @default false
     */
    vueIndentScriptAndStyle: boolean;
    /**
     * Control whether Prettier formats quoted code embedded in the file.
     * @default 'auto'
     */
    embeddedLanguageFormatting: "auto" | "off";
    /**
     * Enforce single attribute per line in HTML, Vue and JSX.
     * @default false
     */
    singleAttributePerLine: boolean;
}
