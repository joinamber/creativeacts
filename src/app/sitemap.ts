import type { MetadataRoute } from "next";

const BASE = "https://www.adptv.xyz/creativeacts";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/process", "/contact"];

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
