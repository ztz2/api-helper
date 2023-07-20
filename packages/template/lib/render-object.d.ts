import { APIHelper } from '@api-helper/core/lib/types';
export declare function renderObject(schema: APIHelper.Schema | Array<APIHelper.Schema> | null, api: APIHelper.API, options: {
    onlyMap?: boolean;
    paramType: 'request' | 'response';
    startSpace?: '';
}): any;
export declare function renderObjectComment(schema: APIHelper.Schema): string;
export declare function renderObjectName(api: APIHelper.API, options: {
    paramType: 'request' | 'response';
}): any;
