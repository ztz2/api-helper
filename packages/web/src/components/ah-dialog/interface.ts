export type OpenData = Recordable | null;
export type OpenConfig = {
  // 操作类型，默认ADD
  type: 'ADD' | 'EDIT' | 'DETAIL';
  // 是否重置表单，默认true
  resetForm?: boolean;
  // 模态框标题
  title?: string;
};
