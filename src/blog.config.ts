import type { SiteConfig } from "@/features/config/site-config.schema";

export const blogConfig = {
  title: "Rikka 的小站",
  author: "Rikka",
  description:
    "Rikka 的个人小站 —— 记录生活，分享 Minecraft 与资源。",
  social: [
    { platform: "github", url: "https://github.com/example" },
    { platform: "email", url: "mailto:example@email.com" },
    { platform: "rss", url: "/rss.xml" },
  ],
  navLinks: [],
  icons: {
    faviconSvg: "/favicon.svg",
    faviconIco: "/favicon.ico",
    favicon96: "/favicon-96x96.png",
    appleTouchIcon: "/apple-touch-icon.png",
    webApp192: "/web-app-manifest-192x192.png",
    webApp512: "/web-app-manifest-512x512.png",
  },
  theme: {
    fuwari: {
      homeBg: "/images/home-bg.webp",
      avatar: "/images/avatar.png",
      primaryHue: 210,
    },
  },
} as const satisfies SiteConfig;
