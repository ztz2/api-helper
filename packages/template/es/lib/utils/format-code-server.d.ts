import type { AxiosRequestConfig } from 'axios';
import { FormatCodeConfig } from '@api-helper/core/lib/interface';
export default function formatCodeServer(config: FormatCodeConfig, options?: AxiosRequestConfig): Promise<string | string[]>;
