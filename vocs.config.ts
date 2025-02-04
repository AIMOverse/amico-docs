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
        text: "Contributing",
        link: `${docsPath}/contributing`,
      },
      {
        text: "Getting Started",
        items: [
          {
            text: "Running Amico Instance",
            link: `${docsPath}/getting-started/running-instance`,
          },
          {
            text: "Plugin Development",
            link: `${docsPath}/getting-started/plugin-dev`,
          },
        ]
      },
      {
        text: "Packages",
        items: [
          {
            text: "Overview",
            link: `${docsPath}/packages/overview`,
          },
          {
            text: "Core Library",
            link: `${docsPath}/packages/amico-core`,
          },
          {
            text: "Amico Plugins",
            link: `${docsPath}/packages/amico-plugins`,
          },
          {
            text: "Builtin Plugins",
            link: `${docsPath}/packages/amico-std`,
          },
          {
            text: "Firmware drivers",
            link: `${docsPath}/packages/amico-firmware`,
          },
          {
            text: "Procedural Macros",
            link: `${docsPath}/packages/amico-macros`,
          },
          {
            text: "Standalone Runtime",
            link: `${docsPath}/packages/amico`,
          },
        ],
      },
      {
        text: "Dependencies",
        collapsed: true,
        items: [
          {
            text: "Rig-rs",
            link: "https://rig.rs",
          },
          {
            text: "Listen-rs",
            link: "https://listen-rs.com",
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
