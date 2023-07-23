import { TemplateCategory } from '@/store/template/interface';
import formTemplate from './form';
import tableTemplate from './table';

export default new TemplateCategory('arco-design', {
  id: 'fc231b1da9c0929f',
  options: [
    formTemplate,
    tableTemplate,
  ],
});
