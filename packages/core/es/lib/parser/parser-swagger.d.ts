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
    private parserCategory;
    private generateId;
}
