import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/src/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const lastModified = new Date();

  // Define your routes here
  const routes = [
    "",           // Home
    "/projects",  // Projects page
    "/about",     // About page
    "/contact",   // Contact page
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly", // Home updates more often
    priority: route === "" ? 1 : 0.8,                  // Home is highest priority
  }));
}