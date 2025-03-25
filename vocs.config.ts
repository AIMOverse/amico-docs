import { defineConfig } from "vocs";

const basePath = `/`;
const docsPath = `/docs`;
const modulesPath = `${docsPath}/modules`;
const gettingStartedPath = `${docsPath}/getting-started`;
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
        link: `${docsPath}/architecture-overview`,
      },
      {
        text: "Our vision",
        link: `${docsPath}/our-vision`,
      },
      {
        text: "Contributing",
        link: `${docsPath}/contributing`,
      },
      {
        text: "Getting Started",
        items: [
          {
            text: "Development",
            link: `${gettingStartedPath}/development`,
          },
          {
            text: "Running Amico",
            link: `${gettingStartedPath}/run`,
          },
          {
            text: "SDK Guide",
            link: `${gettingStartedPath}/sdk-guide`,
          },
          {
            text: "Modules Development",
            link: `${gettingStartedPath}/modules-dev`,
          },
        ],
      },
      {
        text: "Modules",
        collapsed: true,
        items: [
          {
            text: "Overview",
            link: `${modulesPath}/overview`,
          },
          {
            text: "amico",
            link: `${modulesPath}/amico`,
          },
          {
            text: "amico-core",
            link: `${modulesPath}/amico-core`,
          },
          {
            text: "amico-mods",
            link: `${modulesPath}/amico-mods`,
          },
          {
            text: "amico-hal",
            link: `${modulesPath}/amico-hal`,
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
      link: "https://t.me/amico_community",
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
