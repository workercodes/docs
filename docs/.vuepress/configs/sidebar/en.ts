import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/': [
    {
      text: 'Introduction',
      children: [
        '/getting-started',
        'tutorials',
        'templates',
      ],
    },
  ],
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md',
        '/guide/cache',
        '/guide/sql',
        '/guide/event',
        '/guide/store',
      ],
    },
  ],
  '/runtime/': [
    {
      text: 'Runtime',
      children: [
        '/runtime/add-event-listener',
        '/runtime/broadcast-channel',
        '/runtime/cache',
        '/runtime/fetch-event',
        '/runtime/fetch',
        '/runtime/request',
        '/runtime/response',
        '/runtime/header',
      ],
    },
  ],
  // '/guide/': [
  //   {
  //     text: 'Guide',
  //     children: [
  //       '/guide/README.md',
  //       '/guide/getting-started.md',
  //       '/guide/configuration.md',
  //       '/guide/page.md',
  //       '/guide/markdown.md',
  //       '/guide/assets.md',
  //       '/guide/i18n.md',
  //       '/guide/deployment.md',
  //       '/guide/theme.md',
  //       '/guide/plugin.md',
  //       '/guide/bundler.md',
  //       '/guide/migration.md',
  //     ],
  //   },
  // ],
  // '/advanced/': [
  //   {
  //     text: 'Advanced',
  //     children: [
  //       '/advanced/architecture.md',
  //       '/advanced/plugin.md',
  //       '/advanced/theme.md',
  //     ],
  //   },
  //   {
  //     text: 'Cookbook',
  //     children: [
  //       '/advanced/cookbook/README.md',
  //       '/advanced/cookbook/usage-of-client-app-enhance.md',
  //       '/advanced/cookbook/adding-extra-pages.md',
  //       '/advanced/cookbook/extending-a-theme.md',
  //       '/advanced/cookbook/passing-data-to-client-code.md',
  //       '/advanced/cookbook/markdown-and-vue-sfc.md',
  //     ],
  //   },
  // ],
  // '/reference/': [
  //   {
  //     text: 'VuePress Reference',
  //     collapsible: true,
  //     children: [
  //       '/reference/cli.md',
  //       '/reference/config.md',
  //       '/reference/frontmatter.md',
  //       '/reference/components.md',
  //       '/reference/plugin-api.md',
  //       '/reference/theme-api.md',
  //       '/reference/client-api.md',
  //       '/reference/node-api.md',
  //     ],
  //   },
  //   {
  //     text: 'Bundlers Reference',
  //     collapsible: true,
  //     children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
  //   },
  //   {
  //     text: 'Default Theme Reference',
  //     collapsible: true,
  //     children: [
  //       '/reference/default-theme/config.md',
  //       '/reference/default-theme/frontmatter.md',
  //       '/reference/default-theme/components.md',
  //       '/reference/default-theme/markdown.md',
  //       '/reference/default-theme/styles.md',
  //     ],
  //   },
  //   {
  //     text: 'Official Plugins Reference',
  //     collapsible: true,
  //     children: [
  //       {
  //         text: 'Common Features',
  //         children: [
  //           '/reference/plugin/back-to-top.md',
  //           '/reference/plugin/container.md',
  //           '/reference/plugin/external-link-icon.md',
  //           '/reference/plugin/google-analytics.md',
  //           '/reference/plugin/medium-zoom.md',
  //           '/reference/plugin/nprogress.md',
  //           '/reference/plugin/register-components.md',
  //         ],
  //       },
  //       {
  //         text: 'Content Search',
  //         children: [
  //           '/reference/plugin/docsearch.md',
  //           '/reference/plugin/search.md',
  //         ],
  //       },
  //       {
  //         text: 'PWA',
  //         children: [
  //           '/reference/plugin/pwa.md',
  //           '/reference/plugin/pwa-popup.md',
  //         ],
  //       },
  //       {
  //         text: 'Syntax Highlighting',
  //         children: [
  //           '/reference/plugin/prismjs.md',
  //           '/reference/plugin/shiki.md',
  //         ],
  //       },
  //       {
  //         text: 'Theme Development',
  //         children: [
  //           '/reference/plugin/active-header-links.md',
  //           '/reference/plugin/debug.md',
  //           '/reference/plugin/git.md',
  //           '/reference/plugin/palette.md',
  //           '/reference/plugin/theme-data.md',
  //           '/reference/plugin/toc.md',
  //         ],
  //       },
  //     ],
  //   },
  // ],
}
