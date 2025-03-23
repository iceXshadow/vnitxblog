import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function RelatedPosts() {
  const relatedPosts = [
    {
      id: 1,
      title: "Understanding WebAssembly: The Future of Web Performance",
      category: "Technology",
      author: "Michael Chen",
      date: "Mar 10, 2025",
    },
    {
      id: 2,
      title: "Building Accessible Web Applications from the Ground Up",
      category: "Accessibility",
      author: "Emma Wilson",
      date: "Mar 12, 2025",
    },
    {
      id: 3,
      title: "Edge Computing: Bringing the Cloud Closer to Users",
      category: "Cloud",
      author: "David Kim",
      date: "Mar 14, 2025",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {relatedPosts.map((post) => (
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
            <div className="mb-2">
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            <h3 className="line-clamp-2 text-lg font-bold">
              <Link href={`/post/${post.id}`} className="hover:text-primary">
                {post.title}
              </Link>
            </h3>
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t p-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder.svg" alt={post.author} />
                <AvatarFallback>{post.author[0]}</AvatarFallback>
              </Avatar>
              <span className="text-xs">{post.author}</span>
            </div>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

