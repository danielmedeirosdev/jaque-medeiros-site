import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/trajetoria",
    "/pesquisa",
    "/atuacao",
    "/projetos",
    "/noticias",
    "/galeria",
    "/contato",
    "/contribua",
  ];

  return paths.map((path) => ({
    url: `${site.domain}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
