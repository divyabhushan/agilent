module.exports = {
  title: "Agilent Documentation",
  tagline: "Integrated BIHub platform for ABRT Reports",
  url: "https://github.com/divyabhushan/agilent",
  baseUrl: "/agilent/",
  onBrokenLinks: "ignore",
  favicon: "img/favicon.ico",
  organizationName: "divyabhushan", // Usually your GitHub org/user name.
  projectName: "agilent", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    /*
    algolia: {
      apiKey: "api-key",
      indexName: "index-name",
      algoliaOptions: {}, // Optional, if provided by Algolia
  },
  */
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Agilent",
        src: "img/agilent_logo.png",
        
      },
      items: [
        /*
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',

        },
        */
        /*        {to: 'blog', label: 'Blog', position: 'left'}, */
        /*        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
*/
        {
          to: "/docs/",
          label: "Docs",
          position: "left",
          activeBaseRegex: "^((?!admin|user).)*$",
        },
        {
          to: "/docs/",
          label: "Administration",
          position: "right",
          activeBaseRegex: "admin",
        },
        {
          to: "docs/user-mode/welcome",
          label: "User Guide",
          position: "right",
          activeBaseRegex: "user-mode",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc.`,
    },
  },
  plugins: ["docusaurus-lunr-search"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          
          sidebarPath: require.resolve("./sidebars.js"),
        },
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        */
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
