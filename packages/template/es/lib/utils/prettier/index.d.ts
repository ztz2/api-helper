import { Options } from 'prettier';
export default function formatCode(code?: string, options?: Options & {
    codeType?: string;
}): any;
