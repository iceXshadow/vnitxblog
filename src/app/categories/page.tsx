import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import CategoryGrid from "@/components/category-grid"
import CategoryGrid from "@/components/category-grid"

export const metadata = {
  title: "Categories - Browse Content by Topic | BlogHub",
  description:
    "Explore our diverse range of content categories, from Technology and Design to Business and Lifestyle. Find articles that match your interests.",
}

export default function CategoriesPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero section */}
      <section className="mb-12 space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Browse by Category</h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Explore our diverse collection of articles organized by topic to find exactly what interests you.
        </p>
        <div className="mx-auto flex max-w-md flex-col gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search categories or topics..." className="pl-8" />
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="mb-12">
        <CategoryGrid showCount={true} />
      </section>

      {/* Featured categories */}
      <section className="mb-16">
        <Tabs defaultValue="technology">
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight">Featured Categories</h2>
            <TabsList className="w-full justify-start overflow-auto">
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="productivity">Productivity</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="technology" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{generateCategoryPosts("Technology", 6)}</div>
          </TabsContent>

          <TabsContent value="design" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{generateCategoryPosts("Design", 6)}</div>
          </TabsContent>

          <TabsContent value="business" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{generateCategoryPosts("Business", 6)}</div>
          </TabsContent>

          <TabsContent value="productivity" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{generateCategoryPosts("Productivity", 6)}</div>
          </TabsContent>

          <TabsContent value="education" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{generateCategoryPosts("Education", 6)}</div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Popular tags */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Link key={tag.name} href={`/tags/${tag.slug}`}>
              <Badge variant="secondary" className="px-3 py-1 text-sm">
                {tag.name} <span className="ml-1 text-xs text-muted-foreground">({tag.count})</span>
              </Badge>
            </Link>
          ))}
        </div>
      </section>

      {/* Category directory */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Category Directory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {Object.entries(categoryDirectory).map(([letter, categories]) => (
                <div key={letter}>
                  <h3 className="mb-2 text-lg font-bold">{letter}</h3>
                  <ul className="space-y-1">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <Link
                          href={`/categories/${category.slug}`}
                          className="flex items-center justify-between text-sm hover:text-primary"
                        >
                          <span>{category.name}</span>
                          <span className="text-xs text-muted-foreground">({category.count})</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <p className="text-sm text-muted-foreground">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              to suggest a new category.
            </p>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

// Helper function to generate posts for each category tab
function generateCategoryPosts(category: string, count: number) {
  const posts = []
  const titles = {
    Technology: [
      "The Future of AI in Everyday Applications",
      "Understanding Blockchain Beyond Cryptocurrency",
      "5G Technology: What It Means for Connectivity",
      "Quantum Computing Explained for Non-Physicists",
      "The Rise of Edge Computing in IoT Devices",
      "Cybersecurity Best Practices for Remote Teams",
    ],
    Design: [
      "Color Theory Fundamentals for Digital Designers",
      "Typography Trends That Will Dominate 2025",
      "User-Centered Design: Principles and Practices",
      "The Psychology of Effective UI Design",
      "Minimalism vs. Maximalism in Modern Web Design",
      "Designing for Accessibility: A Comprehensive Guide",
    ],
    Business: [
      "Remote Work Culture: Building Teams Across Borders",
      "Sustainable Business Models for the Digital Age",
      "Venture Capital Trends for Tech Startups",
      "Customer Experience as a Competitive Advantage",
      "The Future of E-commerce After the Pandemic",
      "Building a Personal Brand in a Crowded Market",
    ],
    Productivity: [
      "Deep Work: Achieving Flow in a Distracted World",
      "Time Blocking Techniques for Maximum Efficiency",
      "Digital Minimalism: Decluttering Your Online Life",
      "The Science of Habit Formation for Professionals",
      "Burnout Prevention Strategies for Knowledge Workers",
      "Task Management Systems That Actually Work",
    ],
    Education: [
      "The Future of Online Learning Platforms",
      "Microlearning: Small Lessons, Big Impact",
      "Gamification in Educational Technology",
      "Personalized Learning Paths with AI",
      "Teaching Critical Thinking in the Digital Age",
      "The Role of VR and AR in Modern Education",
    ],
  }

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
            <span className="text-xs text-muted-foreground">Mar {15 - i}, 2025</span>
          </div>
          <h3 className="line-clamp-2 text-lg font-bold">
            <Link href={`/post/${i + 1}`} className="hover:text-primary">
              {titles[category as keyof typeof titles][i]}
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
          <span className="text-xs text-muted-foreground">{4 + i} min read</span>
        </CardFooter>
      </Card>,
    )
  }

  return posts
}

// Popular tags data
const popularTags = [
  { name: "JavaScript", slug: "javascript", count: 128 },
  { name: "UX Design", slug: "ux-design", count: 94 },
  { name: "Productivity", slug: "productivity", count: 87 },
  { name: "Artificial Intelligence", slug: "artificial-intelligence", count: 76 },
  { name: "Remote Work", slug: "remote-work", count: 72 },
  { name: "Web Development", slug: "web-development", count: 68 },
  { name: "Career Advice", slug: "career-advice", count: 65 },
  { name: "Data Science", slug: "data-science", count: 61 },
  { name: "Startups", slug: "startups", count: 58 },
  { name: "Mobile Development", slug: "mobile-development", count: 52 },
  { name: "Leadership", slug: "leadership", count: 49 },
  { name: "Cybersecurity", slug: "cybersecurity", count: 45 },
]

// Category directory data
const categoryDirectory = {
  A: [
    { name: "Accessibility", slug: "accessibility", count: 28 },
    { name: "Artificial Intelligence", slug: "artificial-intelligence", count: 76 },
    { name: "Architecture", slug: "architecture", count: 19 },
  ],
  B: [
    { name: "Business", slug: "business", count: 94 },
    { name: "Blockchain", slug: "blockchain", count: 42 },
    { name: "Books", slug: "books", count: 31 },
  ],
  C: [
    { name: "Career", slug: "career", count: 65 },
    { name: "Cybersecurity", slug: "cybersecurity", count: 45 },
    { name: "Cloud Computing", slug: "cloud-computing", count: 38 },
  ],
  D: [
    { name: "Design", slug: "design", count: 112 },
    { name: "Data Science", slug: "data-science", count: 61 },
    { name: "DevOps", slug: "devops", count: 29 },
  ],
  E: [
    { name: "Education", slug: "education", count: 47 },
    { name: "Entrepreneurship", slug: "entrepreneurship", count: 53 },
    { name: "Environment", slug: "environment", count: 22 },
  ],
  F: [
    { name: "Finance", slug: "finance", count: 36 },
    { name: "Future of Work", slug: "future-of-work", count: 41 },
    { name: "Freelancing", slug: "freelancing", count: 27 },
  ],
}

