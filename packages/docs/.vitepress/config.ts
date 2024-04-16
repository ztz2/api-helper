import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'

const nav: ThemeConfig['nav'] = [
  {
    text: '生成API',
    activeMatch: `^/use/(cli|config-in-file)`,
    items: [
      {
        text: '使用CLI',
        activeMatch: `^/use/cli`,
        link: '/use/cli.html'
      },
      {
        text: '使用配置文件',
        activeMatch: `^/use/config-in-file`,
        link: '/use/config-in-file.html'
      },
    ],
  },
  {
    text: 'web服务',
    activeMatch: `^/use/web-server`,
    link: '/use/web-server.html'
  },
]

const sidebars = [
  {
    text: '开始',
    items: [
      { text: '简介', link: '/guide/introduction' },
    ]
  },
  {
    text: '生成API',
    items: [
      { text: '使用 CLI', link: '/use/cli' },
      { text: '使用配置文件', link: '/use/config-in-file' },
    ]
  },
  {
    text: 'web服务',
    items: [
      { text: '配置', link: '/use/web-server' },
    ]
  },
];

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': sidebars,
  '/use/': sidebars,
}

// Placeholder of the i18n config for @vuejs-translations.
// const i18n: ThemeConfig['i18n'] = {
// }

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'zh',
  title: 'API Helper',
  description: 'API Helper',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'theme-color', content: '#ff5722' }],
    // ['meta', { property: 'og:url', content: 'https://github.com/ztz2/api-helper' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'API Helper' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'API Helper - 帮助开发者生成interface、类、对象等代码模板'
      }
    ],
    // [
    //   'meta',
    //   {
    //     property: 'og:image',
    //     // content: 'https://vuejs.org/images/logo.png'
    //   }
    // ],
    // ['meta', { name: 'twitter:site', content: '@vuejs' }],
    // ['meta', { name: 'twitter:card', content: 'summary' }],
    // [
    //   'link',
    //   {
    //     rel: 'preconnect',
    //     href: 'https://sponsors.vuejs.org'
    //   }
    // ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    [
      'script',
      {
        src: 'https://vueschool.io/banner.js?affiliate=vuejs&type=top',
        async: 'true'
      }
    ]
  ],

  themeConfig: {
    nav,
    sidebar,

    // algolia: {
    //   indexName: '',
    //   appId: 'ML0LEBN7FQ',
    //   apiKey: '21cf9df0734770a2448a9da64a700c22',
    //   searchParameters: {
    //     facetFilters: ['version:v3']
    //   }
    // },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ztz2/api-helper' },
    ],

    // editLink: {
    //   repo: 'vuejs/docs',
    //   text: 'Edit this page on GitHub'
    // },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2014-${new Date().getFullYear()} ztz2`
    }
  },

  markdown: {
    theme: 'github-dark',
    config(md) {
      md.use(headerPlugin)
      // .use(textAdPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  }
})
