import { ChangeCase } from '../lib/types';
import { APIHelper } from '@api-helper/core/lib/types';
import { renderInterfaceName } from '../lib/render-interface';
export declare function renderRequestFunction(api: APIHelper.API, options?: {
    codeType?: 'typescript' | 'javascript';
    dataKey?: string | undefined;
    onRenderInterfaceName?: typeof renderInterfaceName;
    onRenderRequestFunctionName?: typeof renderRequestFunctionName;
}): any;
export declare function renderRequestFunctionName(api: APIHelper.API, options: {
    changeCase: ChangeCase;
}): string;
