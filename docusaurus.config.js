// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Carbonext - API Docs",
  url: "https://b2b-docs.carbonext.com.br",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "carbonext-co2e", // Usually your GitHub org/user name.
  projectName: "api-b2b-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/carbonext-co2e/api-b2b-docs/tree/master/src/pages",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/carbonext-co2e/api-b2b-docs/tree/master/blog",
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
      navbar: {
        style: "dark",
        logo: {
          alt: "Carbonext Logo",
          src: "img/logo-clean.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://b2b.carbonext.com.br",
            label: "App B2B",
            position: "left",
          },
          {
            href: "https://app.carbonext.com.br/",
            label: "App B2C",
            position: "left",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/carbonext-co2e/api-b2b-docs",
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
                label: "Introduction",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/carbonext-sa",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/carbonext.oficial",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/carbonext.oficial",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/carbonext-co2e/api-b2b-docs",
              },
              {
                label: "Website",
                href: "https://carbonext.com.br",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCSfI3nEPvcDXG-GES7lVsjA",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Carbonext.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-BR"],
    localeConfigs: {
      en: {
        label: "English",
      },
      ptBR: {
        label: "Português",
      },
    },
  },
};

module.exports = config;
