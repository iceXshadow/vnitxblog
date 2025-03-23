import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, MessageSquare, ThumbsUp, Bookmark } from "lucide-react"

export default function TrendingPosts() {
  const trendingPosts = [
    {
      id: 1,
      title: "10 Productivity Hacks Every Developer Should Know",
      excerpt:
        "Boost your coding efficiency with these proven productivity techniques that will transform your workflow.",
      category: "Productivity",
      author: "David Chen",
      date: "Mar 22, 2025",
      readTime: "6 min read",
      comments: 42,
      likes: 189,
    },
    {
      id: 2,
      title: "The Rise of No-Code Platforms: Are Developers at Risk?",
      excerpt:
        "Exploring the growing popularity of no-code solutions and their impact on traditional software development.",
      category: "Technology",
      author: "Emma Wilson",
      date: "Mar 21, 2025",
      readTime: "7 min read",
      comments: 38,
      likes: 156,
    },
    {
      id: 3,
      title: "Sustainable Web Design: Reducing Your Digital Carbon Footprint",
      excerpt:
        "Learn how to create beautiful websites while minimizing environmental impact through sustainable design practices.",
      category: "Design",
      author: "Michael Brown",
      date: "Mar 19, 2025",
      readTime: "5 min read",
      comments: 27,
      likes: 134,
    },
    {
      id: 4,
      title: "The Psychology of User Experience: Why Users Do What They Do",
      excerpt: "Understanding the psychological principles behind effective UX design and user behavior patterns.",
      category: "UX Design",
      author: "Sophia Martinez",
      date: "Mar 18, 2025",
      readTime: "8 min read",
      comments: 31,
      likes: 142,
    },
  ]

  return (
    <div className="space-y-4">
      {trendingPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <div className="grid gap-4 md:grid-cols-[2fr_3fr]">
            <div className="aspect-video overflow-hidden md:aspect-square md:h-full">
              <Image
                src={`/placeholder.svg?height=300&width=300`}
                alt={post.title}
                width={300}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="flex flex-col justify-center p-4 md:p-6">
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  <span>Trending</span>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <Link href={`/post/${post.id}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </h3>
              <p className="mb-4 text-sm text-muted-foreground md:line-clamp-2">{post.excerpt}</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <Image src="/placeholder.svg" alt={post.author} width={32} height={32} className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {post.date} · {post.readTime}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-xs">{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-xs">{post.likes}</span>
                  </div>
                  <button className="rounded-full p-1 hover:bg-muted">
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}

