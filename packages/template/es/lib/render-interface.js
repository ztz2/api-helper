import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import * as _changeCase from 'change-case';
import { createSchema } from '@api-helper/core/lib/helpers';
import { randomChar, processKeyName } from '@api-helper/core/lib/utils/util';
import { postCode, isEmptyObject, checkIsInterface, } from '../lib/utils/util';
import artTemplate from '../lib/art-template';
import { precessArraySchema } from '../lib/render-object';
export function renderInterface(schema, api, options) {
    options = merge({
        onlyBody: false,
        prefix: 'export ',
        paramType: 'request',
        emptyBodyCode: 'any;',
    }, options);
    schema = cloneDeep(schema);
    schema = precessArraySchema(schema);
    var sourceSchema = schema;
    var prefix = options.prefix, onlyBody = options.onlyBody, dropComment = options.dropComment, isExtraData = options.isExtraData, emptyBodyCode = options.emptyBodyCode, _a = options.paramType, paramType = _a === void 0 ? 'request' : _a;
    if (Array.isArray(schema)) {
        schema = createSchema('object', {
            id: randomChar(),
            params: schema,
        });
    }
    var isInterface = checkIsInterface(schema);
    var keyword = isInterface ? "".concat(prefix, " interface") : "".concat(prefix, "type");
    var onRenderInterfaceName = (options === null || options === void 0 ? void 0 : options.onRenderInterfaceName) ? options.onRenderInterfaceName : renderInterfaceName;
    var commentCode = onlyBody ? '' : dropComment !== true ? renderInterfaceComment(api, paramType, isExtraData) : '';
    var interfaceName = (options === null || options === void 0 ? void 0 : options.name) ? options.name : onRenderInterfaceName(api, {
        schema: schema,
        paramType: paramType,
        isExtraData: isExtraData,
        changeCase: _changeCase,
    });
    /**
     * output ->  export interface interfaceName
     *            export type Type =
     */
    var ki = ["".concat(keyword, " ").concat(interfaceName, " ").concat(!isInterface ? '=' : '')].filter(Boolean).join('\n');
    // 前置处理，渲染数据为空，直接返回 export type xxx = any;
    if ((Array.isArray(sourceSchema) && sourceSchema.length === 0) ||
        !sourceSchema ||
        isEmptyObject(sourceSchema)) {
        // 不兼容的数据，不显示类型
        if (isExtraData) {
            return '';
        }
        return postCode({
            ki: ki,
            commentCode: commentCode,
            code: emptyBodyCode
        }, { onlyBody: onlyBody });
    }
    if (paramType === 'response') {
        schema.keyName = '';
    }
    return postCode({
        ki: ki,
        commentCode: commentCode,
        code: renderInterfaceDeepObject(schema, true)
    }, { onlyBody: onlyBody });
}
export function renderInterfaceName(api, options) {
    var name = api.path;
    if (options.paramType) {
        name += " ".concat(options.paramType);
    }
    if (options.isExtraData) {
        name += 'ExtraData';
    }
    name += "By ".concat(api.method);
    return options.changeCase.pascalCase(name);
}
function renderInterfaceComment(api, paramType, isExtraData, updateTime) {
    if (isExtraData === void 0) { isExtraData = false; }
    if (updateTime === void 0) { updateTime = ''; }
    return artTemplate.render("/**\n * @description \u300Adescription\u300B\u300Aif docURL\u300B\n * @doc \u300AdocURL\u300B\u300A/if\u300B\n * @url \u300Aurl\u300B\u300Aif updateTime\u300B\n * @update \u300AupdateTime\u300B\u300A/if\u300B\n */", {
        description: "".concat([api.title, api.description].filter(Boolean).join('、'), "\u3010").concat(isExtraData ? '不兼容的请求数据' : paramType === 'request' ? '请求数据' : paramType === 'response' ? '响应数据' : '', "\u7C7B\u578B\u5B9A\u4E49\u3011"),
        docURL: api.docURL,
        url: "[ ".concat(api.method.toUpperCase(), " ] ").concat(api.path),
        updateTime: updateTime
    });
}
function requiredChar(schema) {
    var _a;
    return !((_a = schema === null || schema === void 0 ? void 0 : schema.rules) === null || _a === void 0 ? void 0 : _a.required) ? '?' : '';
}
function renderInterfaceDeepObject(schema, isRoot, memo) {
    if (isRoot === void 0) { isRoot = false; }
    if (memo === void 0) { memo = new Map(); }
    if (!schema) {
        return '';
    }
    if (memo.has(schema)) {
        return memo.get(schema);
    }
    memo.set(schema, 'null');
    var type = schema.type;
    var bannerComment = [];
    if (schema.label) {
        bannerComment.push(schema.label);
    }
    var bannerCommentText = bannerComment.length > 0 ? "\n// ".concat(bannerComment.join('')) : '';
    if (isEmptyObject(schema)) {
        return [
            bannerCommentText,
            schema.keyName ? "".concat(processKeyName(schema.keyName)).concat(requiredChar(schema), ": ") : '',
            '{',
            '[propName: string]: any',
            '}',
        ].filter(Boolean).join('\n');
    }
    var code = '';
    switch (type) {
        // 对象类型
        case 'object':
            code = [
                bannerCommentText,
                schema.keyName ? "".concat(processKeyName(schema.keyName)).concat(requiredChar(schema), ": ") : '',
                '{',
                // 类型遍历
                schema.params.filter(function (item) { var _a; return !(((_a = item.keyName) === null || _a === void 0 ? void 0 : _a.trim()) === '' && item.type === 'object'); }).map(function (item) { return renderInterfaceDeepObject(item, false, memo); }).join('\n'),
                '}',
            ].filter(Boolean).join('\n');
            break;
        // 数据类型
        case 'array':
            var child = schema.params.map(function (item) { return renderInterfaceDeepObject(item, false, memo); }).join(' | ');
            child = child || 'any';
            code = [
                bannerCommentText,
                schema.keyName ? "".concat(processKeyName(schema.keyName)).concat(requiredChar(schema), ": ") : '',
                // 类型遍历
                "Array<".concat(child, ">"),
            ].filter(Boolean).join('\n');
            break;
        // 其他非引用类型
        default:
            // eslint-disable-next-line no-case-declarations
            var typeCode = type;
            if (type === 'string' && 'enum' in schema && schema.enum.length) {
                typeCode = schema.enum.map(function (item) { return "'".concat(item, "'"); }).join(' | ');
            }
            if (schema.keyName) {
                code = [bannerCommentText, "".concat(processKeyName(schema.keyName)).concat(requiredChar(schema), ": ").concat(typeCode)].filter(Boolean).join('\n');
            }
            else {
                code = typeCode;
            }
    }
    if (isRoot && schema.type !== 'object' && schema.keyName) {
        code = "{ \n ".concat(code, " \n } \n");
    }
    return code;
}
