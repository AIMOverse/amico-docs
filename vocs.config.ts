import { defineConfig } from "vocs";

export default defineConfig({
  title: "Amico Docs",
  rootDir: ".",
  basePath: "/amico-docs",
  sidebar: {
    "/docs/": [
      {
        text: "Introduction",
        link: "/docs/introduction",
      },
      {
        text: "Getting Started",
        link: "/docs/getting-started",
      },
      {
        text: "Packages",
        collapsed: true,
        items: [
          {
            text: "Overview",
            link: "/docs/packages/overview",
          },
          {
            text: "Core Library",
            link: "/docs/packages/amico-core",
          },
          {
            text: "Amico Runtime",
            link: "/docs/packages/amico",
          },
        ],
      },
    ],
  },
  topNav: [
    {
      text: "Documentation",
      link: "/docs/introduction",
      match: "/docs/",
    },
    {
      text: "Tutorials",
      link: "/tutorials",
      match: "/tutorials/",
    }
  ]
});
