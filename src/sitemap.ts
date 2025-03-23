import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "http://localhost:3000"

  // Main pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/categories`, lastModified: new Date() },
    { url: `${baseUrl}/trending`, lastModified: new Date() },
    { url: `${baseUrl}/login`, lastModified: new Date() },
    { url: `${baseUrl}/signup`, lastModified: new Date() },
    { url: `${baseUrl}/dashboard`, lastModified: new Date() },
    { url: `${baseUrl}/profile`, lastModified: new Date() },
  ]

  // Category pages
  const categories = [
    "technology",
    "design",
    "business",
    "productivity",
    "education",
    "photography",
    "food",
    "travel",
    "fitness",
    "music",
    "movies",
    "health",
    "environment",
    "mobile",
    "home",
    "shopping",
  ]

  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: new Date(),
  }))

  // Sample blog posts (in a real app, these would be dynamically generated)
  const blogPosts = Array.from({ length: 20 }, (_, i) => ({
    url: `${baseUrl}/post/${i + 1}`,
    lastModified: new Date(),
  }))

  return [...staticPages, ...categoryPages, ...blogPosts]
}

