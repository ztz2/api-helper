import { APIHelper } from '@api-helper/core/lib/types';
import type { ChangeCase } from '../lib/types';
declare type RenderObjectOptions = {
    paramType?: 'request' | 'response';
    prefix?: string;
    name?: string;
    suffixName?: string;
    dropComment?: boolean;
    onlyBody?: boolean;
    emptyBodyCode?: string;
    onRenderObjectName?: typeof renderObjectName;
    formatter?: (schema: APIHelper.Schema) => ({
        useDefault?: boolean;
        value: any;
    });
};
export declare function renderObject(schema: APIHelper.Schema | Array<APIHelper.Schema> | null, api: APIHelper.API, options?: RenderObjectOptions): string;
export declare function renderComment(schema: APIHelper.Schema): string;
export declare function renderObjectName(api: APIHelper.API, options: {
    suffixName?: string;
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
}): string;
export declare function precessArraySchema(schema: APIHelper.Schema | Array<APIHelper.Schema> | null): APIHelper.Schema | null;
export {};
