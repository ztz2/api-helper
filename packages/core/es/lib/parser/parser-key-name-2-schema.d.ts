import { APIHelper } from '../../index';
export declare class ParserKeyName2Schema {
    static deepMergeSchemaList: (schema: APIHelper.SchemaList) => APIHelper.SchemaList;
    static appendSchemeList: (parserKeyName2SchemaWrap: APIHelper.SchemaList, appendSchema: APIHelper.Schema, appendSchemaKeyNameMemo: Array<string>) => void;
    private BRACKET_NOTATION_START;
    private BRACKET_NOTATION_IN;
    private BRACKET_NOTATION_END;
    private DOT_NOTATION;
    value: string;
    valueType: APIHelper.SchemaType;
    text: string;
    status: string;
    wrapSchema: APIHelper.Schema;
    recordSchema: APIHelper.Schema;
    targetSchema: APIHelper.Schema;
    constructor(value: string | undefined, valueType: APIHelper.SchemaType);
    parse(): null | {
        targetSchema: APIHelper.Schema;
        wrapSchema: APIHelper.Schema;
    };
    private pushSchema;
    private getStatusType;
}
export default ParserKeyName2Schema;
