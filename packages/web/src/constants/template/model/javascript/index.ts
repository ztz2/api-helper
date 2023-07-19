import { TemplateCategory } from '@/store/template/interface';
import mapTemplate from './map';
import classTemplate from './class';

export default new TemplateCategory('Javascript', [
  mapTemplate,
  classTemplate,
]);
