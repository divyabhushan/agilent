module.exports = {
  title: "Agilent Documentation",
  tagline: "Integrated BIHub platform for ABRT Reports",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "divyabhushan", // Usually your GitHub org/user name.
  projectName: "agilent", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Agilent",
      style: 'primary',
      logo: {
        alt: "My Site Logo",
        src: "img/agilent_logo.png",
        href: "https://www.agilent.com/",
      },
      hideOnScroll: true,
      items: [
        {
          to: "/",
          label: "Docs",
          title: "Docs Home",
          position: "left",
        },
        {
          to: "docs/admin-mode/welcome",
	        activeBaseRegex: 'admin',          
          label: "Administration",
          position: "right",
        },
        {
          to: "docs/user-mode/welcome",
	        activeBaseRegex: "user-mode",          
          label: "Reports",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
