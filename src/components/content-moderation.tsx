"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flag, CheckCircle, XCircle, AlertTriangle, MessageSquare, FileText } from "lucide-react"

export default function ContentModeration() {
  const [reportedComments] = useState([
    {
      id: 1,
      content: "This is completely wrong. The author clearly doesn't know what they're talking about!",
      author: "user123",
      post: "The Future of Web Development",
      date: "Mar 22, 2025",
      reason: "Harassment",
    },
    {
      id: 2,
      content: "Check out my website for more information: spamsite.com/buy-now",
      author: "marketing_pro",
      post: "10 Productivity Hacks",
      date: "Mar 21, 2025",
      reason: "Spam",
    },
    {
      id: 3,
      content: "This article contains misleading information about security practices.",
      author: "security_expert",
      post: "Web Security Basics",
      date: "Mar 20, 2025",
      reason: "Misinformation",
    },
  ])

  const [reportedPosts] = useState([
    {
      id: 1,
      title: "Get Rich Quick with These Simple Tricks",
      author: "money_maker",
      date: "Mar 19, 2025",
      reason: "Spam/Scam",
    },
    {
      id: 2,
      title: "Controversial Opinion: Why Framework X is Terrible",
      author: "tech_critic",
      date: "Mar 18, 2025",
      reason: "Inflammatory Content",
    },
  ])

  return (
    <Tabs defaultValue="comments">
      <TabsList className="mb-4">
        <TabsTrigger value="comments" className="gap-2">
          <MessageSquare className="h-4 w-4" /> Reported Comments
        </TabsTrigger>
        <TabsTrigger value="posts" className="gap-2">
          <FileText className="h-4 w-4" /> Reported Posts
        </TabsTrigger>
      </TabsList>

      <TabsContent value="comments">
        <Card>
          <CardHeader>
            <CardTitle>Reported Comments</CardTitle>
            <CardDescription>Review and moderate reported comments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reportedComments.map((comment) => (
                <div key={comment.id} className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Flag className="h-4 w-4 text-red-500" />
                      <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-900 dark:text-red-300">
                        {comment.reason}
                      </Badge>
                    </div>
                    <span className="text-xs text-muted-foreground">Reported on {comment.date}</span>
                  </div>
                  <p className="mb-2 text-sm">{comment.content}</p>
                  <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>By: {comment.author}</span>
                    <span>•</span>
                    <span>On: {comment.post}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" /> Approve
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1">
                      <XCircle className="h-4 w-4 text-red-500" /> Remove
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1">
                      <AlertTriangle className="h-4 w-4 text-amber-500" /> Warn User
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="posts">
        <Card>
          <CardHeader>
            <CardTitle>Reported Posts</CardTitle>
            <CardDescription>Review and moderate reported posts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reportedPosts.map((post) => (
                <div key={post.id} className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Flag className="h-4 w-4 text-red-500" />
                      <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-900 dark:text-red-300">
                        {post.reason}
                      </Badge>
                    </div>
                    <span className="text-xs text-muted-foreground">Reported on {post.date}</span>
                  </div>
                  <h3 className="mb-2 font-medium">{post.title}</h3>
                  <div className="mb-4 text-xs text-muted-foreground">By: {post.author}</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" /> Approve
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1">
                      <XCircle className="h-4 w-4 text-red-500" /> Remove
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1">
                      <AlertTriangle className="h-4 w-4 text-amber-500" /> Warn Author
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

