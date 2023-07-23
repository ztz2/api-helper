import { TemplateCategory } from '@/store/template/interface';
import javascript from './javascript';
import typescript from './typescript';
import elementUi from './element-ui';
import elementPlus from './element-plus';
import antd from './ant-design';
import antdv from './ant-design-vue';
import arco from './arco-design';

export default [
  typescript,
  javascript,
  elementUi,
  elementPlus,
  arco,
  antdv,
  // React 组件
  antd,
] as TemplateCategory[];
