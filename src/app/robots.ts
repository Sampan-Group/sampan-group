import type { MetadataRoute } from "next";
// deindex
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.sampangroup.com.bd/sitemap.xml",
  };
}
