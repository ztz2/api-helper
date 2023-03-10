import { nanoid } from 'nanoid';

export interface ITemplate {
  // 模板名称
  label?: string;
  // 唯一ID
  value: string;
  // 模板内容
  content: string;
}

export class Template implements ITemplate {
  value;
  label;
  content;
  constructor(params: ITemplate) {
    this.label = params.label;
    this.content = params.content;
    this.value = params.value ? params.value : nanoid();
  }
}

export interface ITemplateClassify {
  id: string;
  label: string;
  isGroup: boolean;
  options: Array<ITemplate>;
}

export class TemplateClassify implements ITemplateClassify{
  id = nanoid();
  label;
  isGroup = true;
  options;
  constructor(label: string, options: Array<ITemplate>) {
    this.label = label;
    this.options = options;
  }
}
