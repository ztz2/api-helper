import { APIHelper } from '../types';
export default class ParserSwagger {
    private autoGenerateId;
    private requiredRequestField?;
    private requiredResponseField?;
    constructor(options?: {
        autoGenerateId?: boolean;
        requiredResponseField?: boolean;
        requiredRequestField?: boolean;
    } | boolean);
    parser(documentList: Array<APIHelper.OpenAPIDocument>): Promise<Array<APIHelper.Document>>;
    private parserDocument;
    private parserPath2API;
    private parseCommonParam;
    private parseV2Param;
    private parseV3Param;
    private parserCategory;
    private generateId;
}
