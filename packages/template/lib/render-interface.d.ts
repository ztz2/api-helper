import { ChangeCase } from '../lib/types';
import { APIHelper } from '@api-helper/core/lib/types';
export declare function renderInterface(schema: APIHelper.Schema | Array<APIHelper.Schema> | null, api: APIHelper.API, options?: {
    paramType?: 'request' | 'response';
    prefix?: string;
    name?: string;
    dropComment?: boolean;
    onlyBody?: boolean;
    onRenderInterfaceName?: typeof renderInterfaceName;
    isExtraData?: boolean;
    emptyBodyCode?: string;
}): string;
export declare function renderInterfaceName(api: APIHelper.API, options: {
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
    isExtraData?: boolean;
    schema?: APIHelper.Schema | null;
}): string;
