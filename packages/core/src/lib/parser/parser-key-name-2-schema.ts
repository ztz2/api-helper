import { cloneDeep } from 'lodash';

import { pushArray } from '../utils/util';
import { APIHelper, createSchema } from '../../index';

// keyName[0].name => Schema
// [0].updateValue => Schema
// params.updateValue.name => Schema
export class ParserKeyName2Schema{
  static deepMergeSchemaList: (schema: APIHelper.SchemaList) => APIHelper.SchemaList;
  static appendSchemeList: (
    parserKeyName2SchemaWrap: APIHelper.SchemaList,
    appendSchema: APIHelper.Schema,
    appendSchemaKeyNameMemo: Array<string>
  ) => void;

  // 解析 "[" 开始
  private BRACKET_NOTATION_START = 'BRACKET_NOTATION_START';
  // 获取 "[值]"
  private BRACKET_NOTATION_IN = 'BRACKET_NOTATION_IN';
  // 解析 "]" 结束
  private BRACKET_NOTATION_END = 'BRACKET_NOTATION_END';
  // 解析 "." 开始
  private DOT_NOTATION = 'DOT_NOTATION';

  value = '';
  valueType: APIHelper.SchemaType;

  text = '';
  status = '';

  wrapSchema: APIHelper.Schema = null!;
  recordSchema: APIHelper.Schema = null!;
  targetSchema: APIHelper.Schema = null!;

  constructor(value = '', valueType: APIHelper.SchemaType) {
    this.value = value;
    this.valueType = valueType;
  }

  parse(): null | { targetSchema: APIHelper.Schema; wrapSchema: APIHelper.Schema; } {
    if (!this.value?.length || (!this.value.includes('.') && !this.value.includes('['))) {
      return null;
    }

    const {
      value,
      BRACKET_NOTATION_START,
      BRACKET_NOTATION_END,
      DOT_NOTATION,
    } = this;
    for (let index = 0; index < value.length; index++) {
      const char = value[index];
      const isEnd = index === value.length - 1;
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
              this.targetSchema.params.push(createSchema(this.valueType));
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
  }

  private pushSchema(isEnd = false) {
    let schema = createSchema('string', {
      keyName: this.text,
      type: isEnd ? this.valueType : this.getStatusType(),
    });

    if (isEnd) {
      this.targetSchema = schema;
    }
    if (this.wrapSchema == null) {
      this.wrapSchema = schema;
    }

    let nextSchema = schema;
    // 属性节点，需增加Object包装类
    if (this.status === this.DOT_NOTATION
      && this.text
      && this.recordSchema
      && this.recordSchema.type !== 'object'
    ) {
      const itm = createSchema('object');
      itm.params.push(schema);
      nextSchema = itm;
    }

    if (this.recordSchema == null) {
      this.recordSchema = nextSchema;
    } else {
      this.recordSchema.params.push(schema);
      this.recordSchema = nextSchema;
    }
  }

  private getStatusType(): string {
    const typeMap: Recordable = {
      BRACKET_NOTATION_START: 'array',
      DOT_NOTATION: 'object',
    }
    return typeMap?.[this.status] ?? 'string';
  }
}

ParserKeyName2Schema.deepMergeSchemaList = function (schemaList: APIHelper.SchemaList): APIHelper.SchemaList {
  const result: APIHelper.SchemaList = [];
  if (schemaList.length === 0) {
    return [];
  }
  const memo = new Map<string, APIHelper.SchemaList>();
  for (const schema of schemaList) {
    const recordItm = memo.get(schema.keyName);
    const record: APIHelper.SchemaList = recordItm ?? [];
    record.push(schema);
    if (!recordItm) {
      memo.set(schema.keyName, record);
    }
  }
  for (const [keyName, recordSchemaList] of memo) {
    const firstSchema = recordSchemaList[0];
    // 需要合并子节点
    if (recordSchemaList.length > 0) {
      const scm = cloneDeep(firstSchema);
      scm.params = [];
      const waitMergeSchema: APIHelper.SchemaList = [];
      for (const rsm of recordSchemaList) {
        pushArray(waitMergeSchema, rsm.params);
      }
      scm.params = ParserKeyName2Schema.deepMergeSchemaList(waitMergeSchema);
      result.push(scm);
      continue;
    }
    result.push(firstSchema);
  }
  return result;
}

ParserKeyName2Schema.appendSchemeList = function (parserKeyName2SchemaWrap, appendSchema, appendSchemaKeyNameMemo) {
  if (parserKeyName2SchemaWrap.length > 0) {
    const merged = ParserKeyName2Schema.deepMergeSchemaList(parserKeyName2SchemaWrap);
    for (const m of merged) {
      if (!appendSchemaKeyNameMemo.includes(m.keyName)) {
        appendSchemaKeyNameMemo.push(m.keyName);
        appendSchema.params.push(m);
      }
    }
  }
}

export default ParserKeyName2Schema;
