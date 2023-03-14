import { TemplateClassify } from '@/store/template/interface';
import formTemplate from './form';
import tableTemplate from './table';

export default new TemplateClassify('element-ui', [
  formTemplate,
  tableTemplate,
]);
