import { createFileRoute } from "@tanstack/react-router";
import { DownloadPage } from "@/features/download/components/download-page";

export const Route = createFileRoute("/_public/download")({
  component: DownloadPage,
  head: () => ({
    meta: [
      { title: "资源下载 · Rikka 的小站" },
      { name: "description", content: "Minecraft 客户端与常用资源下载" },
    ],
  }),
});
