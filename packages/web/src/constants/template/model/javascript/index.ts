import { TemplateClassify } from '@/store/template/interface';
import mapTemplate from './map';
import classTemplate from './class';

export default new TemplateClassify('Javascript', [
  mapTemplate,
  classTemplate,
]);
