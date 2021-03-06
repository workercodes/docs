import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'VuePress' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Worker Codes',
      description: 'A Cloud for the Next Billion Ideas. Build your apps in hours, deploy them in seconds.',
    }
  },

  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER ??
    // use vite by default
    '@vuepress/vite',

  themeConfig: {
    logo: '/images/hero.png',

    repo: 'https://github.com/workercodes/docs',

    docsDir: 'docs',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: 'Edit this page on GitHub',
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  },

  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  },

  plugins: [
    // ['@vuepress/plugin-debug'],
    // [
    //   '@vuepress/plugin-docsearch',
    //   {
    //     apiKey: '3a539aab83105f01761a137c61004d85',
    //     indexName: 'vuepress',
    //     searchParameters: {
    //       facetFilters: ['tags:v2'],
    //     },
    //     locales: {
    //       '/zh/': {
    //         placeholder: '????????????',
    //       },
    //     },
    //   },
    // ],
    // [
    //   '@vuepress/plugin-google-analytics',
    //   {
    //     // we have multiple deployments, which would use different id
    //     id: process.env.DOCS_GA_ID,
    //   },
    // ],
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    // only enable shiki plugin in production mode
    [
      '@vuepress/plugin-shiki',
      isProd
        ? {
            theme: 'dark-plus',
          }
        : false,
    ],
  ],
  dest: `./dist`,
  temp: `./.temp`,
  cache: `./.cache`,
})
