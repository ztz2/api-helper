import { APIHelper } from '@api-helper/core/lib/types';
import { ChangeCase } from '../lib/types';
declare type RenderDartClassOptions = {
    paramType?: 'request' | 'response';
    prefix?: string;
    name?: string;
    suffixName?: string;
    dropComment?: boolean;
    onlyBody?: boolean;
    emptyBodyCode?: string;
    onRenderClassName?: typeof renderClassName;
};
export declare function renderDartClass(schema: APIHelper.Schema | Array<APIHelper.Schema> | null, api: APIHelper.API, options?: RenderDartClassOptions): string;
export declare function renderClassName(api: APIHelper.API, options: {
    suffixName?: string;
    parentKeyName?: string;
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
}): string;
export {};
