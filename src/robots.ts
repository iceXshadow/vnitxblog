import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/admin/", "/profile/"],
    },
    sitemap: "https://bloghub.com/sitemap.xml",
  }
}

