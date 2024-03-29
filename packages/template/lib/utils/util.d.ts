import type { APIHelper } from '@api-helper/core/lib/types';
export declare function postCode({ code, ki, commentCode }: {
    code?: string | undefined;
    ki?: string | undefined;
    commentCode?: string | undefined;
}, { onlyBody }: {
    onlyBody?: boolean | undefined;
}): string;
export declare function checkIsInterface(schema: APIHelper.Schema | null): boolean | undefined;
export declare function isEmptyObject(schema: APIHelper.Schema | null): boolean;
export declare function isEmptySchema(schema: APIHelper.Schema | null): boolean;
