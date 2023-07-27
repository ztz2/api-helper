import type { AxiosRequestConfig } from 'axios';
import { FormatCodeConfig } from '@api-helper/cli/lib/types';
export default function formatCodeServer(config: FormatCodeConfig, options?: AxiosRequestConfig): Promise<string | string[]>;
