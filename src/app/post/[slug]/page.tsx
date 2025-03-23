"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ThumbsUp, MessageSquare } from "lucide-react"
import CommentSection from "@/components/comment-section"
import RelatedPosts from "@/components/related-posts"

const dummyData = {
  title: "The Future of Web Development: Trends to Watch in 2025",
  description: "Explore the emerging technologies and methodologies that will shape the future of web development.",
  category: "Technology",
  readTime: "8 min read",
  author: {
    name: "Jane Doe",
    avatar: "/placeholder.svg",
    bio: "Senior Web Developer & Technical Writer",
  },
  date: "Mar 15, 2025",
  comments: 24,
  likes: 142,
  image: "/placeholder.svg?height=600&width=1200",
  content: [
    { type: "paragraph", text: "As we move further into the digital age, web development continues to evolve at a rapid pace..." },
    { type: "heading", text: "1. AI-Driven Development" },
    { type: "paragraph", text: "Artificial intelligence is no longer just a buzzword—it’s becoming an integral part of development..." },
    { type: "heading", text: "2. WebAssembly and the Future of Browser Performance" },
    { type: "paragraph", text: "WebAssembly (Wasm) continues to gain traction as a way to run high-performance code in browsers..." },
  ],
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const [postData, setPostData] = useState(dummyData)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts?slug=${params.slug}`);
        if (!response.ok) throw new Error("Failed to fetch post")
        const data = await response.json()
        setPostData(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.slug])

  if (loading) return <div className="text-center py-12">Loading...</div>

  return (
    <div className="container py-8 md:py-12">
      <article className="mx-auto max-w-3xl">
        {/* Post header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-2">
            <Badge>{postData.category}</Badge>
            <span className="text-sm text-muted-foreground">{postData.readTime}</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{postData.title}</h1>
          <p className="text-xl text-muted-foreground">{postData.description}</p>

          {/* Author info */}
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={postData.author.avatar} alt={postData.author.name} />
              <AvatarFallback>{postData.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{postData.author.name}</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{postData.date}</span>
                <span>·</span>
                <Link href="#comments" className="text-primary hover:underline">
                  {postData.comments} comments
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <Image src={postData.image} alt="Featured image" width={1200} height={600} className="w-full object-cover" />
        </div>

        {/* Post content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          {postData.content.map((section, index) => (
            section.type === "heading" ? <h2 key={index}>{section.text}</h2> : <p key={index}>{section.text}</p>
          ))}
        </div>

        {/* Post actions */}
        <div className="my-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <ThumbsUp className="h-4 w-4" />
              <span>{postData.likes} Likes</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>{postData.comments} Comments</span>
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Comments section */}
        <div id="comments">
          <CommentSection />
        </div>
      </article>

      {/* Related posts */}
      <div className="mx-auto mt-16 max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold">Related Articles</h2>
        <RelatedPosts />
      </div>
    </div>
  )
}
