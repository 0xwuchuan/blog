import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "wuchuan",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "blog.wuchuan.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Chivo",
        body: "Source Sans Pro",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "rgb(255, 252, 240)",
          lightgray: "rgb(230, 228, 217)",
          gray: "rgb(206, 205, 195)",
          darkgray: "rgb(16, 15, 15)",
          dark: "rgb(111, 110, 105)",
          secondary: "rgb(32, 94, 166)",
          tertiary: "rgb(32, 94, 166)",
          highlight: "rgba(36, 131, 123, 0.15)",
          textHighlight: "rgba(36, 131, 123, 0.15)",
        },
        darkMode: {
          light: "rgb(16, 15, 15)",
          lightgray: "rgb(40, 39, 38)",
          gray: "rgb(64, 62, 60)",
          darkgray: "rgb(206, 205, 195)",
          dark: "rgb(135, 133, 128)",
          secondary: "rgb(67, 133, 190)",
          tertiary: "rgb(67, 133, 190)",
          highlight: "rgba(36, 131, 123, 0.15)",
          textHighlight: "rgba(36, 131, 123, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
