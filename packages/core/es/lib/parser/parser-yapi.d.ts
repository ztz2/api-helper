import { APIHelper } from '../types';
declare type ParserYapiParams = {
    autoGenerateId?: boolean;
    requiredRequestField?: boolean;
    requiredResponseField?: boolean;
    projectInfo: {
        'switch_notice': boolean;
        'is_mock_open': boolean;
        'strice': boolean;
        'is_json5': boolean;
        '_id': number;
        'name': string;
        'desc': string;
        'basepath': string;
        'project_type': string;
        'uid': number;
        'group_id': number;
        'icon': string;
        'color': string;
        'add_time': number;
        'up_time': number;
        'tag': string[];
        'cat': string[];
        'role': boolean;
        'documentServerUrl': string;
    };
    categoryList: Array<{
        'index': number;
        '_id': number;
        'name': string;
        'project_id': number;
        'desc': string;
        'uid': number;
        'add_time': number;
        'up_time': number;
        '__v': number;
    }>;
    apiList: Array<{
        'edit_uid': number;
        'status': string;
        'api_opened': boolean;
        'tag': string[];
        '_id': number;
        'method': string;
        'catid': number;
        'title': string;
        'markdown': string;
        'path': string;
        'project_id': number;
        'uid': number;
        'add_time': number;
        'req_body_type': string;
        'docURL': string;
        'content'?: {
            'query_path': {
                'path': string;
                'params': [];
            };
            'edit_uid': number;
            'status': string;
            'type': string;
            'req_body_is_json_schema': boolean;
            'res_body_is_json_schema': boolean;
            'api_opened': boolean;
            'index': number;
            'tag': string[];
            '_id': number;
            'method': string;
            'catid': number;
            'title': string;
            'path': string;
            'project_id': number;
            'res_body_type': string;
            'uid': number;
            'add_time': number;
            'up_time': number;
            'req_body_type': string;
            'req_query': [
                {
                    'required': string;
                    '_id': string;
                    'name': string;
                    'example': string;
                    'desc': string;
                }
            ];
            'req_headers': Array<{
                name: string;
                value: string;
                required: number | string;
            }>;
            'req_params': Array<{
                name: string;
                desc: string;
                required: number | string;
            }>;
            'req_body_form': Array<{
                name: string;
                desc: string;
                type: string;
                required: number | string;
            }>;
            'req_body_other': string;
            '__v': number;
            'desc': string;
            'markdown': string;
            'res_body': string;
            'username': string;
        };
    }>;
};
export default class ParserYapi {
    private autoGenerateId;
    private requiredRequestField?;
    private requiredResponseField?;
    private projectInfo;
    private categoryList;
    private apiList;
    constructor(params: ParserYapiParams);
    parser(): Promise<Array<APIHelper.Document>>;
    private parserProject;
    private parserCategoryList;
    private parserApiList;
    private generateId;
}
export {};
