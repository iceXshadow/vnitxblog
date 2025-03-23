import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bookmark } from "lucide-react"

export default function UserBookmarks() {
  const bookmarks = [
    {
      id: 1,
      title: "The Rise of No-Code Platforms: Are Developers at Risk?",
      excerpt:
        "Exploring the growing popularity of no-code solutions and their impact on traditional software development.",
      category: "Technology",
      author: "Emma Wilson",
      date: "Mar 21, 2025",
    },
    {
      id: 2,
      title: "Sustainable Web Design: Reducing Your Digital Carbon Footprint",
      excerpt:
        "Learn how to create beautiful websites while minimizing environmental impact through sustainable design practices.",
      category: "Design",
      author: "Michael Brown",
      date: "Mar 19, 2025",
    },
    {
      id: 3,
      title: "The Psychology of User Experience: Why Users Do What They Do",
      excerpt: "Understanding the psychological principles behind effective UX design and user behavior patterns.",
      category: "UX Design",
      author: "Sophia Martinez",
      date: "Mar 18, 2025",
    },
  ]

  return (
    <div className="space-y-6">
      {bookmarks.map((bookmark) => (
        <Card key={bookmark.id} className="overflow-hidden">
          <div className="grid gap-4 md:grid-cols-[2fr_3fr]">
            <div className="aspect-video overflow-hidden md:aspect-square md:h-full">
              <Image
                src={`/placeholder.svg?height=300&width=300`}
                alt={bookmark.title}
                width={300}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="flex flex-col justify-center p-4 md:p-6">
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="secondary">{bookmark.category}</Badge>
                <span className="text-xs text-muted-foreground">{bookmark.date}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <Link href={`/post/${bookmark.id}`} className="hover:text-primary">
                  {bookmark.title}
                </Link>
              </h3>
              <p className="mb-4 text-sm text-muted-foreground md:line-clamp-2">{bookmark.excerpt}</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg"
                      alt={bookmark.author}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium">{bookmark.author}</p>
                </div>
                <button className="rounded-full p-1 text-primary hover:bg-muted">
                  <Bookmark className="h-5 w-5 fill-current" />
                </button>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}

