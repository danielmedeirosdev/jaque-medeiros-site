import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-19T00:00:00-03:00");
  const routes = [
    { path: "", priority: 1 },
    { path: "/trajetoria", priority: 0.9 },
    { path: "/manifesto", priority: 0.8 },
    { path: "/atuacao", priority: 0.8 },
    { path: "/projetos", priority: 0.7 },
    { path: "/pesquisa", priority: 0.7 },
    { path: "/galeria", priority: 0.6 },
    { path: "/contato", priority: 0.6 },
    { path: "/contribua", priority: 0.5 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${site.domain}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));
}
