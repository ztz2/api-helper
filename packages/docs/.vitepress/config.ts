import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

const nav: ThemeConfig['nav'] = [
  { text: '指南', link: '/guide/introduction', activeMatch: `^/guide/introduction/`},
  { text: '生成API', link: '/config/cli', activeMatch: `^/config/cli/`},
  { text: '生成模板代码', link: '/config/template', activeMatch: `^/config/cli/`}
]

const sidebarConfig = [
  {
    text: '准备开始',
    items: [
      { text: '指南', link: '/guide/introduction' }
    ]
  },
  {
    text: '配置',
    items: [
      { text: '生成API', link: '/config/cli' },
      { text: '生成模板代码', link: '/config/template' },
    ]
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide': sidebarConfig,
  '/config': sidebarConfig
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
  scrollOffset: 'header',

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'twitter:site', content: '@api-helper' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    // [
    //   'script',
    //   {
    //     src: 'https://cdn.usefathom.com/script.js',
    //     'data-site': 'XNOLWPLB',
    //     'data-spa': 'auto',
    //     defer: ''
    //   }
    // ]
  ],

  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    // i18n,

    // localeLinks: [
    //   {
    //     link: '',
    //     text: 'English',
    //     repo: ''
    //   },
    //   {
    //     link: '/translations/',
    //     text: 'Help Us Translate!',
    //     isTranslationsDesc: true
    //   }
    // ],

    // 搜索功能配置
    algolia: {
      indexName: 'apih',
      appId: 'AXQQ8FK489',
      apiKey: 'd648d1c71b9cb5d0b7bf1ec28ab4ec35',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ztz2/api-helper' }
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
      copyright: `Copyright © 2023-${new Date().getFullYear()} ztz2`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
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
  },

  vue: {
    reactivityTransform: true
  }
})
