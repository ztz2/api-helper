import { createApp } from 'vue';
import '@arco-design/web-vue/dist/arco.css';
import ArcoVue, { Message } from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/atom-one-dark.css';

import hljsVuePlugin from '@highlightjs/vue-plugin';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import less from 'highlight.js/lib/languages/less';
import json from 'highlight.js/lib/languages/json';
import java from 'highlight.js/lib/languages/java';
import kotlin from 'highlight.js/lib/languages/kotlin';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

import store from './store';
import router from './router';
import './style/index.scss';
import App from './App.vue';
import components from './components';

hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('less', less);
hljs.registerLanguage('json', json);
hljs.registerLanguage('java', java);
hljs.registerLanguage('kotlin', kotlin);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

const app = createApp(App);

Message._context = app._context;

app
  .use(ArcoVue)
  .use(ArcoVueIcon)
  .use(hljsVuePlugin)
  .use(components)
  .use(store)
  .use(router)
  .mount('#app');
