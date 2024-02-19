import { APIHelper } from '@api-helper/core/lib/types';
import { ChangeCase } from '../lib/types';
export declare function renderClass(schema: APIHelper.Schema | null, api: APIHelper.API, options?: {
    paramType?: 'request' | 'response';
    prefix?: string;
    name?: string;
    suffixName?: string;
    dropComment?: boolean;
    onlyBody?: boolean;
    emptyBodyCode?: string;
    onRenderClassName?: typeof renderClassName;
}): string;
export declare function renderClassName(api: APIHelper.API, options: {
    suffixName?: string;
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
}): string;
