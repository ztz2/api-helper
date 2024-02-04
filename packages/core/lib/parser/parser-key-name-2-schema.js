"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserKeyName2Schema = void 0;
var lodash_1 = require("lodash");
var util_1 = require("../utils/util");
var index_1 = require("../../index");
// keyName[0].name => Schema
// [0].updateValue => Schema
// params.updateValue.name => Schema
var ParserKeyName2Schema = /** @class */ (function () {
    function ParserKeyName2Schema(value, valueType) {
        if (value === void 0) { value = ''; }
        // 解析 "[" 开始
        this.BRACKET_NOTATION_START = 'BRACKET_NOTATION_START';
        // 获取 "[值]"
        this.BRACKET_NOTATION_IN = 'BRACKET_NOTATION_IN';
        // 解析 "]" 结束
        this.BRACKET_NOTATION_END = 'BRACKET_NOTATION_END';
        // 解析 "." 开始
        this.DOT_NOTATION = 'DOT_NOTATION';
        this.value = '';
        this.text = '';
        this.status = '';
        this.wrapSchema = null;
        this.recordSchema = null;
        this.targetSchema = null;
        this.value = value;
        this.valueType = valueType;
    }
    ParserKeyName2Schema.prototype.parse = function () {
        var _a;
        if (!((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) || (!this.value.includes('.') && !this.value.includes('['))) {
            return null;
        }
        var _b = this, value = _b.value, BRACKET_NOTATION_START = _b.BRACKET_NOTATION_START, BRACKET_NOTATION_END = _b.BRACKET_NOTATION_END, DOT_NOTATION = _b.DOT_NOTATION;
        for (var index = 0; index < value.length; index++) {
            var char = value[index];
            var isEnd = index === value.length - 1;
            switch (char) {
                case '[': {
                    this.status = BRACKET_NOTATION_START;
                    break;
                }
                case ']': {
                    this.status = BRACKET_NOTATION_END;
                    break;
                }
                case '.': {
                    this.status = DOT_NOTATION;
                    break;
                }
                default: {
                    this.text += char;
                }
            }
            switch (this.status) {
                case BRACKET_NOTATION_START: {
                    this.pushSchema(isEnd);
                    this.text = '';
                    this.status = this.BRACKET_NOTATION_IN;
                    break;
                }
                case BRACKET_NOTATION_END: {
                    // 不记录[索引]，清空即可
                    this.text = '';
                    this.status = '';
                    // 结束了
                    if (index === value.length - 1) {
                        this.targetSchema = this.recordSchema;
                        // 还存在默认的类型
                        if (this.valueType && this.targetSchema) {
                            this.targetSchema.params.push((0, index_1.createSchema)(this.valueType));
                        }
                    }
                    break;
                }
                case DOT_NOTATION: {
                    this.pushSchema(isEnd);
                    this.text = '';
                    this.status = '';
                    break;
                }
                default: {
                    // 遍历结束了，还有text没有处理。
                    if (isEnd && this.text) {
                        this.pushSchema(isEnd);
                        this.text = '';
                    }
                }
            }
        }
        return {
            targetSchema: this.targetSchema,
            wrapSchema: this.wrapSchema,
        };
    };
    ParserKeyName2Schema.prototype.pushSchema = function (isEnd) {
        if (isEnd === void 0) { isEnd = false; }
        var schema = (0, index_1.createSchema)('string', {
            keyName: this.text,
            type: isEnd ? this.valueType : this.getStatusType(),
        });
        if (isEnd) {
            this.targetSchema = schema;
        }
        if (this.wrapSchema == null) {
            this.wrapSchema = schema;
        }
        var nextSchema = schema;
        // 属性节点，需增加Object包装类
        if (this.status === this.DOT_NOTATION
            && this.text
            && this.recordSchema
            && this.recordSchema.type !== 'object') {
            var itm = (0, index_1.createSchema)('object');
            itm.params.push(schema);
            nextSchema = itm;
        }
        if (this.recordSchema == null) {
            this.recordSchema = nextSchema;
        }
        else {
            this.recordSchema.params.push(schema);
            this.recordSchema = nextSchema;
        }
    };
    ParserKeyName2Schema.prototype.getStatusType = function () {
        var _a;
        var typeMap = {
            BRACKET_NOTATION_START: 'array',
            DOT_NOTATION: 'object',
        };
        return (_a = typeMap === null || typeMap === void 0 ? void 0 : typeMap[this.status]) !== null && _a !== void 0 ? _a : 'string';
    };
    return ParserKeyName2Schema;
}());
exports.ParserKeyName2Schema = ParserKeyName2Schema;
ParserKeyName2Schema.deepMergeSchemaList = function (schemaList) {
    var e_1, _a, e_2, _b, e_3, _c;
    var result = [];
    if (schemaList.length === 0) {
        return [];
    }
    var memo = new Map();
    try {
        for (var schemaList_1 = __values(schemaList), schemaList_1_1 = schemaList_1.next(); !schemaList_1_1.done; schemaList_1_1 = schemaList_1.next()) {
            var schema = schemaList_1_1.value;
            var recordItm = memo.get(schema.keyName);
            var record = recordItm !== null && recordItm !== void 0 ? recordItm : [];
            record.push(schema);
            if (!recordItm) {
                memo.set(schema.keyName, record);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (schemaList_1_1 && !schemaList_1_1.done && (_a = schemaList_1.return)) _a.call(schemaList_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var memo_1 = __values(memo), memo_1_1 = memo_1.next(); !memo_1_1.done; memo_1_1 = memo_1.next()) {
            var _d = __read(memo_1_1.value, 2), keyName = _d[0], recordSchemaList = _d[1];
            var firstSchema = recordSchemaList[0];
            // 需要合并子节点
            if (recordSchemaList.length > 0) {
                var scm = (0, lodash_1.cloneDeep)(firstSchema);
                scm.params = [];
                var waitMergeSchema = [];
                try {
                    for (var recordSchemaList_1 = (e_3 = void 0, __values(recordSchemaList)), recordSchemaList_1_1 = recordSchemaList_1.next(); !recordSchemaList_1_1.done; recordSchemaList_1_1 = recordSchemaList_1.next()) {
                        var rsm = recordSchemaList_1_1.value;
                        (0, util_1.pushArray)(waitMergeSchema, rsm.params);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (recordSchemaList_1_1 && !recordSchemaList_1_1.done && (_c = recordSchemaList_1.return)) _c.call(recordSchemaList_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                scm.params = ParserKeyName2Schema.deepMergeSchemaList(waitMergeSchema);
                result.push(scm);
                continue;
            }
            result.push(firstSchema);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (memo_1_1 && !memo_1_1.done && (_b = memo_1.return)) _b.call(memo_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return result;
};
ParserKeyName2Schema.appendSchemeList = function (parserKeyName2SchemaWrap, appendSchema, appendSchemaKeyNameMemo) {
    var e_4, _a;
    if (parserKeyName2SchemaWrap.length > 0) {
        var merged = ParserKeyName2Schema.deepMergeSchemaList(parserKeyName2SchemaWrap);
        try {
            for (var merged_1 = __values(merged), merged_1_1 = merged_1.next(); !merged_1_1.done; merged_1_1 = merged_1.next()) {
                var m = merged_1_1.value;
                if (!appendSchemaKeyNameMemo.includes(m.keyName)) {
                    appendSchemaKeyNameMemo.push(m.keyName);
                    appendSchema.params.push(m);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (merged_1_1 && !merged_1_1.done && (_a = merged_1.return)) _a.call(merged_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    }
};
exports.default = ParserKeyName2Schema;
