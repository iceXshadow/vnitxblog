import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ThumbsUp, Eye } from "lucide-react"

export default function UserPosts() {
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Explore the emerging technologies and methodologies that will shape the future of web development in the coming years.",
      category: "Technology",
      date: "Mar 15, 2025",
      views: 1245,
      comments: 24,
      likes: 142,
    },
    {
      id: 2,
      title: "10 Productivity Hacks Every Developer Should Know",
      excerpt:
        "Boost your coding efficiency with these proven productivity techniques that will transform your workflow.",
      category: "Productivity",
      date: "Mar 10, 2025",
      views: 982,
      comments: 18,
      likes: 97,
    },
    {
      id: 3,
      title: "Understanding WebAssembly: The Future of Web Performance",
      excerpt:
        "Dive deep into WebAssembly and learn how it's revolutionizing performance for complex web applications.",
      category: "Technology",
      date: "Mar 5, 2025",
      views: 756,
      comments: 12,
      likes: 84,
    },
    {
      id: 4,
      title: "Building Accessible Web Applications from the Ground Up",
      excerpt:
        "Learn how to create inclusive web experiences that work for everyone, regardless of ability or disability.",
      category: "Accessibility",
      date: "Feb 28, 2025",
      views: 543,
      comments: 9,
      likes: 62,
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={`/placeholder.svg?height=200&width=400`}
              alt={post.title}
              width={400}
              height={200}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>
            <h3 className="line-clamp-2 text-lg font-bold">
              <Link href={`/post/${post.id}`} className="hover:text-primary">
                {post.title}
              </Link>
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t p-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{post.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>{post.likes}</span>
              </div>
            </div>
            <Link href={`/dashboard/edit/${post.id}`} className="text-xs text-primary hover:underline">
              Edit
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

