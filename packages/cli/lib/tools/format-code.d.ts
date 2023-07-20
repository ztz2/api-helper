import { FormatCodeExtension } from '../../lib/constants';
import PrettierrcOptions from './prettierrc-options';
export declare type Prettierrc = string | Partial<PrettierrcOptions>;
export declare type FormatCodeConfig = {
    sourceCode: string;
    formatCodeExtension: FormatCodeExtension;
    prettierrcOptions?: Prettierrc;
};
export default function formatCode(config: FormatCodeConfig | FormatCodeConfig[]): Promise<string | string[]>;
