import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/src/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const lastModified = new Date();

  // Define your single page route here since it's a SPA portfolio
  const routes = [
    "",           // Home
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly", // Home updates more often
    priority: route === "" ? 1 : 0.8,                  // Home is highest priority
  }));
}