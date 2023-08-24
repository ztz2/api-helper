import { APIHelper } from '@api-helper/core/lib/types';
import { renderRequestFunctionName } from '../lib/render-request-function';
import { renderInterfaceName } from '../lib/render-interface';
export declare function renderRequestFunctionDeclare(api: APIHelper.API, options?: {
    dataKey?: string | undefined;
    onRenderInterfaceName?: typeof renderInterfaceName;
    onRenderRequestFunctionName?: typeof renderRequestFunctionName;
}): string;
