import { TemplateCategory } from '@/store/template/interface';
import mapTemplate from './map';
import classTemplate from './class';

export default new TemplateCategory('Javascript', {
  id: '13adc55a513256ed',
  options: [
    mapTemplate,
    classTemplate,
  ],
});
