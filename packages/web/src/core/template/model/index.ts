import { TemplateClassify } from '@/store/template/interface';
import mapTemplate from './map';
import classTemplate from './class';
import interfaceTemplate from './interface';

export default [
  new TemplateClassify('ES6',[
    mapTemplate,
    classTemplate
  ]),
  new TemplateClassify('TS',[
    interfaceTemplate
  ])
];
