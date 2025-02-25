import { defineConfig } from "vocs";

const basePath = "/";
const docsPath = `/docs`;
//const tutorPath = `/tutorials`;

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
        text: "Architecture Overview",
        link: `${docsPath}/introduction/architecture-overview`,
      },
      {
        text: "Our vision",
        link: `${docsPath}/introduction/our-vision`,
      },
      {
        text: "Contributing",
        link: `${docsPath}/contributing`,
      },
      {
        text: "Getting Started",
        items: [
          {
            text: "Running Amico",
            link: `${docsPath}/getting-started/run-amico`,
          },
          {
            text: "Plugin Development",
            link: `${docsPath}/getting-started/plugin-dev`,
          },
        ],
      },
      {
        text: "Packages",
        collapsed: true,
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
      // {
      //   text: "Dependencies",
      //   collapsed: true,
      //   items: [
      //     {
      //       text: "Rig-rs",
      //       link: "https://rig.rs",
      //     }
      //   ],
      // },
    ],
  },
  topNav: [
    {
      text: "Documentation",
      link: `${docsPath}/introduction`,
      match: `${docsPath}/`,
    },
    {
      text: "Community",
      link: "t.me/amico_community",
    },
    {
      text: "Twitter",
      link: "https://x.com/amico_rs",
    },
    {
      text: "Github",
      link: "https://github.com/AIMOverse/amico",
    },
    {
      text: "Dexscreener",
      link: "https://dexscreener.com/solana/hpbwufq3ewkejawybpujci4paxvk5re58vypvuskpxlc",
    },
  ],
});
