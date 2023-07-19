import { TemplateCategory } from '@/store/template/interface';
import defaultTemplate from './default';

export default [
  new TemplateCategory('默认分组', [
    defaultTemplate,
  ]),
];
