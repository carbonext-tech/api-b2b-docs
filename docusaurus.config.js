// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Carbonext - API B2B",
  tagline:
    "API para calculo, compra, venda e neutralização de créditos de carbono.",
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
        // title: "Carbonext",
        style: 'dark',
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
          { href: "https://app.carbonext.com.br/", label: "App Cbx", position: "left" },
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
                label: "Instagram",
                href: "https://instagram.com/carbonext.oficial",
              },
              {
                label: "Website",
                href: "https://carbonext.com.br",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/carbonext-co2e/api-b2b-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Carbonext. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
