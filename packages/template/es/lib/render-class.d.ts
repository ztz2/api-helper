import { APIHelper } from '@api-helper/core/lib/types';
export declare function renderClass(schema: APIHelper.Schema | Array<APIHelper.Schema> | null, api: APIHelper.API, options: {
    paramType: 'request' | 'response';
}): any;
export declare function renderClassName(api: APIHelper.API, options: {
    paramType: 'request' | 'response';
}): any;
