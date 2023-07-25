import { APIHelper } from '@api-helper/core/lib/types';
import { ChangeCase } from '../lib/interface';
export declare function renderClass(schema: APIHelper.Schema | Array<APIHelper.Schema> | null, api: APIHelper.API, options?: {
    paramType?: 'request' | 'response';
    prefix?: string;
    name?: string;
    dropComment?: boolean;
    onlyBody?: boolean;
    emptyBodyCode?: string;
    onRenderClassName?: typeof renderClassName;
}): string;
export declare function renderClassName(api: APIHelper.API, options: {
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
}): string;
