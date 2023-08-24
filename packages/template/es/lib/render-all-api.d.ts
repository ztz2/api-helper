import { APIHelper } from '@api-helper/core/lib/types';
import { renderInterfaceName } from '../lib/render-interface';
import { renderRequestFunctionName } from '../lib/render-request-function';
export declare function renderAllApi(apiDocument: APIHelper.Document, options?: {
    dataKey?: string;
    codeType?: 'typescript' | 'javascript';
    isDeclare?: boolean;
    onlyTyping?: boolean;
    onRenderInterfaceName?: typeof renderInterfaceName;
    onRenderRequestFunctionName?: typeof renderRequestFunctionName;
}): string;
