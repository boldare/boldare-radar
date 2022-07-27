/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Boldare Radar",
  tagline: "Boldare Radar",
  url: "https://boldare.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/icon.png",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  customFields: {
    REACT_APP_AMPLITUDE_API_KEY: process.env.REACT_APP_AMPLITUDE_API_KEY,
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/boldare/boldare-radar/edit/main",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Radar",
        hideOnScroll: true,
        logo: {
          alt: "Boldare Radar",
          src: "img/logo-light.svg",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "tech/radar",
            position: "left",
            label: "Tech",
          },
          {
            href: "https://github.com/boldare/boldare-radar",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Prototype",
                to: "/docs/category/prototype",
              },
              {
                label: "MVP",
                to: "/docs/category/mvp",
              },
              {
                label: "Product Market Fit",
                to: "/docs/category/pmf",
              },
              {
                label: "Scaling",
                to: "/docs/category/scaling",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Facebook",
                to: "https://www.facebook.com/boldarecom/",
              },
              {
                label: "Instagram",
                to: "https://www.instagram.com/boldarecom/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/boldare/boldare-radar/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Boldare Radar.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
  scripts: [
    {
      src: "https://accounts.google.com/gsi/client",
      async: true,
      defer: true,
    },
  ],
};

module.exports = config;
