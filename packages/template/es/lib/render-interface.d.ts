import { APIHelper } from '@api-helper/core/lib/types';
import { ChangeCase } from '../lib/types';
export declare function renderInterface(schema: APIHelper.Schema | null, api: APIHelper.API, options: {
    paramType: 'request' | 'response';
    isExtraData?: boolean;
    hasComment?: boolean;
    onRenderInterfaceName?: typeof renderInterfaceName;
}): string;
export declare function renderInterfaceName(schema: APIHelper.Schema | null, api: APIHelper.API, options: {
    isExtraData?: boolean;
    paramType: 'request' | 'response';
    changeCase: ChangeCase;
}): string;
export declare function checkInterface(schema: APIHelper.Schema | null): boolean | undefined;
