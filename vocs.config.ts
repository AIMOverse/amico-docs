import { defineConfig } from "vocs";

const basePath = "/amico-docs";
const docsPath = `/docs`;
const tutorPath = `/tutorials`;

export default defineConfig({
  title: "Amico Docs",
  rootDir: ".",
  basePath,
  sidebar: {
    [`${docsPath}/`]: [
      {
        text: "Introduction",
        link: `${docsPath}/introduction`,
      },
      {
        text: "Getting Started",
        link: `${docsPath}/getting-started`,
      },
      {
        text: "Contributing",
        link: `${docsPath}/contributing`,
      },
      {
        text: "Packages",
        items: [
          {
            text: "Overview",
            link: `${docsPath}/packages/overview`,
          },
          {
            text: "Dev Plan",
            link: `${docsPath}/packages/dev-plan`,
          },
          {
            text: "Core Library",
            link: `${docsPath}/packages/amico-core`,
          },
          {
            text: "Amico Runtime",
            link: `${docsPath}/packages/amico`,
          },
        ],
      },
    ],
  },
  topNav: [
    {
      text: "Documentation",
      link: `${docsPath}/introduction`,
      match: `${docsPath}/`,
    },
    {
      text: "Tutorials",
      link: `${tutorPath}/`,
      match: `${tutorPath}/`,
    }
  ]
});
