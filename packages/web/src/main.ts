import { createApp } from 'vue';

import '@arco-design/web-vue/dist/arco.css';
import { Message } from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/stackoverflow-light.css'
import hljsVuePlugin from '@highlightjs/vue-plugin';
import css from 'highlight.js/lib/languages/css.js';
import scss from 'highlight.js/lib/languages/scss.js';
import less from 'highlight.js/lib/languages/less.js';
import json from 'highlight.js/lib/languages/json.js';
import java from 'highlight.js/lib/languages/java.js';
import kotlin from 'highlight.js/lib/languages/kotlin.js';
import javascript from 'highlight.js/lib/languages/javascript.js';
import typescript from 'highlight.js/lib/languages/typescript.js';

import store from './store';
import router from './router';
import './style/index.scss'
import App from './App.vue'

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

app.use(ArcoVueIcon).use(hljsVuePlugin).use(store).use(router).mount('#app')
