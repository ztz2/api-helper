import { FormatCodeConfig } from '@api-helper/core/lib/interface';
declare type OnlyClearTempFolder = {
    onlyClearTempFolder?: boolean;
};
export default function formatCode(config: FormatCodeConfig & OnlyClearTempFolder | Array<FormatCodeConfig & OnlyClearTempFolder>): Promise<string | string[]>;
export {};
