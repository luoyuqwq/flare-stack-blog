import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/features/gallery/components/gallery-page";

export const Route = createFileRoute("/_public/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "图片墙 · Rikka 的小站" },
      { name: "description", content: "Rikka 的图片墙" },
    ],
  }),
});
