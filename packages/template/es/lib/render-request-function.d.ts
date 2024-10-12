import { APIHelper } from '@api-helper/core/lib/types';
import { ChangeCase } from '../lib/types';
import { renderInterfaceName } from '../lib/render-interface';
export declare function renderRequestFunction(api: APIHelper.API, options?: {
    codeType?: 'typescript' | 'javascript';
    dataKey?: string | undefined;
    genHeaders?: boolean;
    genCookies?: boolean;
    genRequestContentType?: boolean;
    genResponseContentType?: boolean;
    onRenderInterfaceName?: typeof renderInterfaceName;
    onRenderRequestFunctionName?: typeof renderRequestFunctionName;
}): string;
export declare function renderRequestFunctionName(api: APIHelper.API, options: {
    changeCase: ChangeCase;
}): string;
export declare function renderRequestFunctionComment(api: APIHelper.API, updateTime?: string): string;
