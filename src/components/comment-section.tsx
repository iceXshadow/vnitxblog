"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/Button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ThumbsUp, MessageSquare, Flag } from "lucide-react"

export default function CommentSection() {
  const [comment, setComment] = useState("")

  const comments = [
    {
      id: 1,
      author: "Alex Johnson",
      avatar: "/placeholder.svg",
      date: "Mar 16, 2025",
      content:
        "This is a fantastic article! I've been following these trends and completely agree with your assessment of AI-driven development. It's already changing how I work.",
      likes: 24,
      replies: [
        {
          id: 101,
          author: "Jane Doe",
          avatar: "/placeholder.svg",
          date: "Mar 16, 2025",
          content:
            "Thanks Alex! I'm glad you found it insightful. I'm curious about how you're using AI in your workflow?",
          likes: 8,
        },
      ],
    },
    {
      id: 2,
      author: "Sarah Miller",
      avatar: "/placeholder.svg",
      date: "Mar 17, 2025",
      content:
        "I'm particularly excited about the edge computing developments. The performance improvements for global applications are game-changing. Have you seen any good case studies on this?",
      likes: 16,
      replies: [],
    },
    {
      id: 3,
      author: "Michael Brown",
      avatar: "/placeholder.svg",
      date: "Mar 18, 2025",
      content:
        "Great overview! I think accessibility deserves even more attention than it's getting. It's not just about compliance but about making the web truly universal.",
      likes: 19,
      replies: [],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle comment submission
    setComment("")
  }

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Comments (24)</h2>

      {/* Comment form */}
      <div className="mb-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-start gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="Your avatar" />
              <AvatarFallback>YA</AvatarFallback>
            </Avatar>
            <Textarea
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[100px] flex-1"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={!comment.trim()}>
              Post Comment
            </Button>
          </div>
        </form>
      </div>

      <Separator className="my-6" />

      {/* Comments list */}
      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            <div className="flex gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.avatar} alt={comment.author} />
                <AvatarFallback>{comment.author[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment.author}</span>
                  <span className="text-xs text-muted-foreground">{comment.date}</span>
                </div>
                <p className="mt-2">{comment.content}</p>
                <div className="mt-2 flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{comment.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>Reply</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Flag className="h-4 w-4" />
                    <span className="sr-only">Report</span>
                  </Button>
                </div>

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="mt-4 space-y-4 pl-6">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={reply.avatar} alt={reply.author} />
                          <AvatarFallback>{reply.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{reply.author}</span>
                            <span className="text-xs text-muted-foreground">{reply.date}</span>
                          </div>
                          <p className="mt-2">{reply.content}</p>
                          <div className="mt-2 flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="h-7 gap-1 px-2 text-xs">
                              <ThumbsUp className="h-3 w-3" />
                              <span>{reply.likes}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="h-7 gap-1 px-2 text-xs">
                              <MessageSquare className="h-3 w-3" />
                              <span>Reply</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline">Load More Comments</Button>
      </div>
    </div>
  )
}

