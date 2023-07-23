import { APIHelper } from '@api-helper/core/lib/types';
import { ChangeCase } from '../lib/types';
export declare function renderObject(schema: APIHelper.Schema | Array<APIHelper.Schema> | null, api: APIHelper.API, options?: {
    paramType?: 'request' | 'response';
    prefix?: string;
    name?: string;
    dropComment?: boolean;
    onlyBody?: boolean;
    emptyBodyCode?: string;
    onRenderObjectName?: typeof renderObjectName;
}): string;
export declare function renderComment(schema: APIHelper.Schema): string;
export declare function renderObjectName(api: APIHelper.API, options: {
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
}): string;
