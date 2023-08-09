import { APIHelper } from '@api-helper/core/lib/types';
import { renderInterfaceName } from '../lib/render-interface';
import { renderRequestFunctionName } from '../lib/render-request-function';
export declare function renderAllApi(apiDocument: APIHelper.Document, options?: {
    codeType?: 'typescript' | 'javascript';
    dataKey?: string;
    onlyTyping?: boolean;
    showUpdateTime?: boolean;
    onRenderInterfaceName?: typeof renderInterfaceName;
    onRenderRequestFunctionName?: typeof renderRequestFunctionName;
}): any;
