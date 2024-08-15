// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ReitCircles Documentation',
  tagline: 'Learn how to use the Portal',
  favicon: 'img/reit-logo.png',

  // Set the production url of your site here
  url: 'https://reitcircles.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ReitCircles', // Usually your GitHub org/user name.
  projectName: 'portal documentation', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/reitcircles-labs/cportal-docs',
        },

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/reitcircles-labs/cportal-docs',
            blogSidebarTitle: '',
            blogSidebarCount: 0,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ReitCircles Documentation',
        logo: {
          alt: 'ReitCircles Logo',
          src: 'img/reit-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'User Guides',
          },

          {
            to: 'docs/API Reference/intro',
            label: 'API Reference',
            position: 'left',
          },
      
          {to: '/blog', label: 'University', position: 'left'},
          {
            href: 'https://github.com/reitcircles-labs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Guides',
                to: '/docs/token-gating-login',
              },
              {
                label: 'API Reference',
                to: 'docs/API Reference/intro',
              },

            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/malay-saha-ba890880/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/mU8dmkrQZC',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/reitcircles',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'University',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/reitcircles-labs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ReitCircles Documentation.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
