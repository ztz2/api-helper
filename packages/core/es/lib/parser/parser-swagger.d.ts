import { APIHelper } from '../types';
import { TransformTypeOptions } from "../helpers";
export default class ParserSwagger {
    private autoGenerateId;
    private requiredRequestField?;
    private requiredResponseField?;
    private transformType;
    constructor(options?: {
        autoGenerateId?: boolean;
        requiredResponseField?: boolean;
        requiredRequestField?: boolean;
        transformType?: TransformTypeOptions['transformTypeMap'];
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
