import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions"
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified: new Date("2025-01-01"),
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.7 : 1
  }));
}
