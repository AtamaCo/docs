// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function getConfig() {
  const mdxMermaid = await import('mdx-mermaid')

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'Atama Documentation',
    tagline: 'Unlock the value of Composable MACH Architecture',
    url: 'https://docs.atama.co',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    trailingSlash: false,
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'atamaco', // Usually your GitHub org/user name.
    projectName: 'documentation', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Remove this to remove the "edit this page" links.
            editUrl: 'https://github.com/AtamaCo/docs/tree/main/',
            remarkPlugins: [[mdxMermaid.default, {
                mermaid: {
                  theme: 'base',
                  themeVariables: {
                    // Same font family as Docusaurus
                    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif',
                    // Carolina.600
                    primaryColor: '#57ACE6',
                    // Yale.900
                    primaryBordercolor: '#08559D',
                    // White
                    primaryTextColor: '#fff',
                    // Yale.900
                    lineColor: '#08559D'
                  }
                }
            }]],
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          logo: {
            alt: 'Atama Logo',
            src: 'img/atama-logo.svg',
            width: '120px'
          },
          items: [
            {
              to: '/docs/getting-started',
              label: 'Getting Started',
              position: 'left'
            },
            {
              to: '/docs/composer-core',
              label: 'Composer Core',
              position: 'left'
            },
            {
              to: '/docs/composer-studio',
              label: 'Composer Studio',
              position: 'left'
            },
            {
              to: '/docs/reference',
              label: 'Reference',
              position: 'right'
            },
            {
              to: '/docs/composer-lens',
              label: 'Composer Lens',
              position: 'left'
            },
            {
              href: 'https://www.atama.co',
              label: 'Atama Website',
              position: 'right',
            },
            {
              href: 'https://github.com/atamaco',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          links: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/atama_team',
            },
            {
              label: 'Blog',
              href: 'https://www.atama.co/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/atamaco',
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Atama Technologies`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ['graphql'],
        },
        colorMode: {
          respectPrefersColorScheme: true
        },
        algolia: {
          appId: 'ENYBEQWB9S',
          apiKey: '4375e3a9ca0bed2ccb22dc140f07d1e1',
          indexName: 'atama',
          contextualSearch: true,
          searchPagePath: 'search',
        },
      }),

      plugins: [
        [
          require.resolve('docusaurus-gtm-plugin'),
          {
            id: 'GTM-5X8LPZ7',
          }
        ]
      ],
  };

  return config;
}

module.exports = getConfig();
