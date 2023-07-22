import { App } from 'vue';
import ApihCategory from './apih-category/index.vue';
import ApihCode from './apih-code/index.vue';
import ApihCodeMirror from './apih-code-mirror/index.vue';
import ApihDialog from './apih-dialog/index.vue';
import ApihLogo from './apih-logo/index.vue';
import ApihSchemaTree from './apih-schema-tree/index.vue';
import ApihDialogCodeMirror from './apih-dialog-code-mirror/index.vue';
import ApihTooltip from './apih-tooltip/index.vue';

const components = {
  ApihCategory,
  ApihCode,
  ApihCodeMirror,
  ApihDialog,
  ApihLogo,
  ApihSchemaTree,
  ApihDialogCodeMirror,
  ApihTooltip,
};

export default function install(app: App): App {
  for (const [componentName, component] of Object.entries(components)) {
    app.component(componentName, component);
  }
  return app;
}
