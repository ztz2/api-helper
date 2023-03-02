import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

const nav: ThemeConfig['nav'] = [
  { text: '指南', link: '/guide/introduction', activeMatch: `^/guide/introduction/`},
  { text: 'CLI', link: '/guide/config/cli', activeMatch: `^/guide/config/cli/`}
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: '准备开始',
      items: [
        { text: '指南', link: '/guide/introduction' },
        {
          text: '快速开始',
          link: '/guide/quick-start'
        }
      ]
    },
    {
      text: '配置',
      items: [
        {
          text: 'CLI',
          link: '/guide/config/cli'
        }
      ]
    }
  ],
  // '/examples/': [
  //   {
  //     text: 'Basic',
  //     items: [
  //       {
  //         text: 'Hello World',
  //         link: '/examples/#hello-world'
  //       },
  //       {
  //         text: 'Handling User Input',
  //         link: '/examples/#handling-input'
  //       },
  //       {
  //         text: 'Attribute Bindings',
  //         link: '/examples/#attribute-bindings'
  //       },
  //       {
  //         text: 'Conditionals and Loops',
  //         link: '/examples/#conditionals-and-loops'
  //       },
  //       {
  //         text: 'Form Bindings',
  //         link: '/examples/#form-bindings'
  //       },
  //       {
  //         text: 'Simple Component',
  //         link: '/examples/#simple-component'
  //       }
  //     ]
  //   },
  //   {
  //     text: 'Practical',
  //     items: [
  //       {
  //         text: 'Markdown Editor',
  //         link: '/examples/#markdown'
  //       },
  //       {
  //         text: 'Fetching Data',
  //         link: '/examples/#fetching-data'
  //       },
  //       {
  //         text: 'Grid with Sort and Filter',
  //         link: '/examples/#grid'
  //       },
  //       {
  //         text: 'Tree View',
  //         link: '/examples/#tree'
  //       },
  //       {
  //         text: 'SVG Graph',
  //         link: '/examples/#svg'
  //       },
  //       {
  //         text: 'Modal with Transitions',
  //         link: '/examples/#modal'
  //       },
  //       {
  //         text: 'List with Transitions',
  //         link: '/examples/#list-transition'
  //       },
  //       {
  //         text: 'TodoMVC',
  //         link: '/examples/#todomvc'
  //       }
  //     ]
  //   },
  //   {
  //     // https://eugenkiss.github.io/7guis/
  //     text: '7 GUIs',
  //     items: [
  //       {
  //         text: 'Counter',
  //         link: '/examples/#counter'
  //       },
  //       {
  //         text: 'Temperature Converter',
  //         link: '/examples/#temperature-converter'
  //       },
  //       {
  //         text: 'Flight Booker',
  //         link: '/examples/#flight-booker'
  //       },
  //       {
  //         text: 'Timer',
  //         link: '/examples/#timer'
  //       },
  //       {
  //         text: 'CRUD',
  //         link: '/examples/#crud'
  //       },
  //       {
  //         text: 'Circle Drawer',
  //         link: '/examples/#circle-drawer'
  //       },
  //       {
  //         text: 'Cells',
  //         link: '/examples/#cells'
  //       }
  //     ]
  //   }
  // ],
  // '/style-guide/': [
  //   {
  //     text: 'Style 指南',
  //     items: [
  //       {
  //         text: 'Overview',
  //         link: '/style-guide/'
  //       },
  //       {
  //         text: 'A - Essential',
  //         link: '/style-guide/rules-essential'
  //       },
  //       {
  //         text: 'B - Strongly Recommended',
  //         link: '/style-guide/rules-strongly-recommended'
  //       },
  //       {
  //         text: 'C - Recommended',
  //         link: '/style-guide/rules-recommended'
  //       },
  //       {
  //         text: 'D - Use with Caution',
  //         link: '/style-guide/rules-use-with-caution'
  //       }
  //     ]
  //   }
  // ]
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
