import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/Button"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Filter, ArrowUpDown } from "lucide-react"
import CategoryDescription from "@/components/category-description"
import { Metadata } from "next"

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${categoryName} Articles - BlogHub`,
    description: `Explore our collection of articles about ${categoryName.toLowerCase()}. Find tips, tutorials, and insights from industry experts.`,
  }
}

export default function CategoryPage({ params }: Props) {
  const categorySlug = params.slug
  const categoryName = categorySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="container py-8 md:py-12">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="mx-2 h-4 w-4" />
        <Link href="/categories" className="hover:text-foreground">
          Categories
        </Link>
        <ChevronRight className="mx-2 h-4 w-4" />
        <span className="text-foreground">{categoryName}</span>
      </div>

      {/* Category header */}
      <section className="mb-12">
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{categoryName}</h1>
            <CategoryDescription category={categorySlug} />
            <div className="mt-4 flex items-center gap-2">
              <Badge variant="outline" className="text-sm">
                {getPostCount(categorySlug)} articles
              </Badge>
              <Badge variant="outline" className="text-sm">
                {getAuthorCount(categorySlug)} authors
              </Badge>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="mb-2 font-medium">Popular in {categoryName}</h3>
              <ul className="space-y-2 text-sm">
                {getPopularTopics(categorySlug).map((topic, index) => (
                  <li key={index}>
                    <Link href={`/tags/${topic.slug}`} className="hover:text-primary">
                      {topic.name} <span className="text-muted-foreground">({topic.count})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mb-8" />

      {/* Filters and sorting */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowUpDown className="h-4 w-4" /> Sort
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Showing <strong>{getPostCount(categorySlug)}</strong> articles in <strong>{categoryName}</strong>
        </p>
      </div>

      {/* Articles grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{generateCategoryPosts(categoryName, 12)}</div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

// Helper function to generate posts for the category
function generateCategoryPosts(category: string, count: number) {
  const posts = []

  // Generate different titles based on the category
  const getTitles = (category: string) => {
    const baseTitles = {
      Technology: [
        "The Future of AI in Everyday Applications",
        "Understanding Blockchain Beyond Cryptocurrency",
        "5G Technology: What It Means for Connectivity",
        "Quantum Computing Explained for Non-Physicists",
        "The Rise of Edge Computing in IoT Devices",
        "Cybersecurity Best Practices for Remote Teams",
        "The Evolution of Programming Languages",
        "Web3: Beyond the Hype",
        "Machine Learning for Beginners",
        "The Ethics of Artificial Intelligence",
        "Virtual Reality: The Next Computing Platform",
        "Open Source Software Development Trends",
      ],
      Design: [
        "Color Theory Fundamentals for Digital Designers",
        "Typography Trends That Will Dominate 2025",
        "User-Centered Design: Principles and Practices",
        "The Psychology of Effective UI Design",
        "Minimalism vs. Maximalism in Modern Web Design",
        "Designing for Accessibility: A Comprehensive Guide",
        "The Evolution of Logo Design",
        "Responsive Design Best Practices",
        "Design Systems: Building for Scale",
        "Animation Principles for UI/UX Designers",
        "The Role of Whitespace in Modern Design",
        "Designing for Dark Mode: Best Practices",
      ],
      Business: [
        "Remote Work Culture: Building Teams Across Borders",
        "Sustainable Business Models for the Digital Age",
        "Venture Capital Trends for Tech Startups",
        "Customer Experience as a Competitive Advantage",
        "The Future of E-commerce After the Pandemic",
        "Building a Personal Brand in a Crowded Market",
        "Subscription Business Models: Pros and Cons",
        "B2B Marketing Strategies That Actually Work",
        "The Art of Negotiation in Business Deals",
        "Financial Planning for Small Businesses",
        "Scaling Your Startup: Lessons Learned",
        "International Expansion: Market Entry Strategies",
      ],
    }

    // Return titles for the specific category or generate generic ones
    return (
      baseTitles[category as keyof typeof baseTitles] ||
      Array(12)
        .fill(0)
        .map((_, i) => `Essential ${category} Tips and Strategies (Part ${i + 1})`)
    )
  }

  const titles = getTitles(category)

  for (let i = 0; i < count; i++) {
    posts.push(
      <Card key={i} className="overflow-hidden">
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={`/placeholder.svg?height=200&width=400`}
            alt={`${category} post ${i + 1}`}
            width={400}
            height={200}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="secondary">{category}</Badge>
            <span className="text-xs text-muted-foreground">Mar {15 - (i % 30)}, 2025</span>
          </div>
          <h3 className="line-clamp-2 text-lg font-bold">
            <Link href={`/post/${i + 1}`} className="hover:text-primary">
              {titles[i % titles.length]}
            </Link>
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            Explore the latest trends and insights in {category.toLowerCase()} with this comprehensive guide.
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-full">
              <Image src="/placeholder.svg" alt="Author" width={24} height={24} className="object-cover" />
            </div>
            <span className="text-xs">
              {
                ["Alex Johnson", "Sarah Chen", "Michael Rodriguez", "Emma Wilson", "David Kim", "Olivia Martinez"][
                  i % 6
                ]
              }
            </span>
          </div>
          <span className="text-xs text-muted-foreground">{4 + (i % 10)} min read</span>
        </CardFooter>
      </Card>,
    )
  }

  return posts
}

// Helper functions to get category-specific data
function getPostCount(categorySlug: string) {
  const counts: Record<string, number> = {
    technology: 128,
    design: 112,
    business: 94,
    productivity: 87,
    education: 47,
    photography: 38,
    food: 56,
    travel: 72,
    fitness: 43,
    music: 29,
    movies: 34,
  }

  return counts[categorySlug] || Math.floor(Math.random() * 100) + 20
}

function getAuthorCount(categorySlug: string) {
  const counts: Record<string, number> = {
    technology: 42,
    design: 38,
    business: 31,
    productivity: 27,
    education: 19,
    photography: 15,
    food: 23,
    travel: 29,
    fitness: 18,
    music: 12,
    movies: 14,
  }

  return counts[categorySlug] || Math.floor(Math.random() * 30) + 10
}

function getPopularTopics(categorySlug: string) {
  const topics: Record<string, Array<{ name: string; slug: string; count: number }>> = {
    technology: [
      { name: "Artificial Intelligence", slug: "artificial-intelligence", count: 32 },
      { name: "Web Development", slug: "web-development", count: 28 },
      { name: "Cybersecurity", slug: "cybersecurity", count: 24 },
      { name: "Cloud Computing", slug: "cloud-computing", count: 19 },
      { name: "Mobile Development", slug: "mobile-development", count: 17 },
    ],
    design: [
      { name: "UX Design", slug: "ux-design", count: 34 },
      { name: "Typography", slug: "typography", count: 26 },
      { name: "Color Theory", slug: "color-theory", count: 21 },
      { name: "Design Systems", slug: "design-systems", count: 18 },
      { name: "Accessibility", slug: "accessibility", count: 15 },
    ],
    business: [
      { name: "Startups", slug: "startups", count: 29 },
      { name: "Marketing", slug: "marketing", count: 25 },
      { name: "Remote Work", slug: "remote-work", count: 22 },
      { name: "Leadership", slug: "leadership", count: 19 },
      { name: "E-commerce", slug: "e-commerce", count: 16 },
    ],
  }

  return (
    topics[categorySlug] || [
      {
        name: `${categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)} Basics`,
        slug: `${categorySlug}-basics`,
        count: Math.floor(Math.random() * 20) + 10,
      },
      {
        name: `Advanced ${categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)}`,
        slug: `advanced-${categorySlug}`,
        count: Math.floor(Math.random() * 15) + 10,
      },
      {
        name: `${categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)} Trends`,
        slug: `${categorySlug}-trends`,
        count: Math.floor(Math.random() * 10) + 10,
      },
      {
        name: `${categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)} Tips`,
        slug: `${categorySlug}-tips`,
        count: Math.floor(Math.random() * 8) + 10,
      },
      {
        name: `${categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)} Tools`,
        slug: `${categorySlug}-tools`,
        count: Math.floor(Math.random() * 5) + 10,
      },
    ]
  )
}