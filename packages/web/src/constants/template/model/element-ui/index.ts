import { TemplateCategory } from '@/store/template/interface';
import formTemplate from './form';
import tableTemplate from './table';

export default new TemplateCategory('element-ui', [
  formTemplate,
  tableTemplate,
]);
