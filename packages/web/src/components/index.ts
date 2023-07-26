import { App } from 'vue';
import ApihCategory from './apih-category/index.vue';
import ApihCode from './apih-code/index.vue';
import ApihCodeMirror from './apih-code-mirror/index.vue';
import ApihDrawer from '@/components/apih-drawer/index.vue';
import ApihDrawerCodeMirror from './apih-drawer-code-mirror/index.vue';
import ApihLogo from './apih-logo/index.vue';
import ApihSchemaTree from './apih-schema-tree/index.vue';
import ApihTooltip from './apih-tooltip/index.vue';
import ApihCollapse from './apih-collapse/apih-collapse.vue';
import ApihCollapseItem from './apih-collapse/apih-collapse-item.vue';
import ApihTree from './apih-tree/index.vue';
import ApihSelect from './apih-select/index.vue';

const components = {
  ApihCategory,
  ApihCode,
  ApihCodeMirror,
  ApihDrawer,
  ApihDrawerCodeMirror,
  ApihLogo,
  ApihSchemaTree,
  ApihTooltip,
  ApihCollapse,
  ApihCollapseItem,
  ApihTree,
  ApihSelect,
};

export default function install(app: App): App {
  for (const [componentName, component] of Object.entries(components)) {
    app.component(componentName, component);
  }
  return app;
}
