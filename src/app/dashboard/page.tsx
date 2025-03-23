import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PenLine, MessageSquare, ThumbsUp, Eye, Clock, Plus } from "lucide-react"
import DashboardStats from "@/components/dashboard-stats"
import PostsTable from "@/components/posts-table"

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Manage your content and track performance</p>
        </div>
        <Button className="gap-2" asChild>
          <Link href="/dashboard/new-post">
            <Plus className="h-4 w-4" /> New Post
          </Link>
        </Button>
      </div>

      <DashboardStats />

      <Tabs defaultValue="posts" className="mt-8">
        <TabsList className="mb-4">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="posts">
          <PostsTable />
        </TabsContent>
        <TabsContent value="drafts">
          <Card>
            <CardHeader>
              <CardTitle>Drafts</CardTitle>
              <CardDescription>Continue working on your draft posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden bg-muted">
                      <Image
                        src={`/placeholder.svg?height=200&width=400`}
                        alt={`Draft ${i}`}
                        width={400}
                        height={200}
                        className="h-full w-full object-cover opacity-50"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <Badge variant="outline">Draft</Badge>
                        <span className="text-xs text-muted-foreground">Last edited 2 days ago</span>
                      </div>
                      <h3 className="line-clamp-2 text-lg font-medium">
                        <Link href={`/dashboard/edit/${i}`} className="hover:text-primary">
                          {i === 1
                            ? "The Impact of AI on Content Creation"
                            : i === 2
                              ? "10 Tips for Better Code Reviews"
                              : "Building Scalable Web Applications"}
                        </Link>
                      </h3>
                      <div className="mt-4 flex items-center justify-between">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/dashboard/edit/${i}`}>
                            <PenLine className="mr-2 h-4 w-4" /> Continue Editing
                          </Link>
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Clock className="mr-2 h-4 w-4" /> Schedule
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="comments">
          <Card>
            <CardHeader>
              <CardTitle>Recent Comments</CardTitle>
              <CardDescription>Manage and respond to comments on your posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-4 rounded-lg border p-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg" alt="Commenter" />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <div>
                          <span className="font-medium">
                            {i === 1
                              ? "Alex Johnson"
                              : i === 2
                                ? "Sarah Miller"
                                : i === 3
                                  ? "Michael Brown"
                                  : "Emma Wilson"}
                          </span>
                          <span className="ml-2 text-xs text-muted-foreground">
                            {i === 1 ? "2 hours ago" : i === 2 ? "1 day ago" : i === 3 ? "2 days ago" : "3 days ago"}
                          </span>
                        </div>
                        <Link href={`/post/${i}`} className="text-xs text-muted-foreground hover:text-primary">
                          View Post
                        </Link>
                      </div>
                      <p className="text-sm">
                        {i === 1
                          ? "Great article! I've been following these trends and completely agree with your assessment."
                          : i === 2
                            ? "I'm particularly excited about the edge computing developments. Have you seen any good case studies on this?"
                            : i === 3
                              ? "I think accessibility deserves even more attention than it's getting. It's not just about compliance."
                              : "This is exactly what I needed to read today. Thanks for the insights!"}
                      </p>
                      <div className="mt-2 flex gap-2">
                        <Button size="sm" variant="outline">
                          Reply
                        </Button>
                        <Button size="sm" variant="ghost">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Track the performance of your content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full rounded-lg border bg-muted p-4">
                <div className="flex h-full items-center justify-center">
                  <p className="text-center text-muted-foreground">Analytics visualization would go here</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Total Views", value: "24,521", icon: Eye },
                  { label: "Avg. Read Time", value: "4m 32s", icon: Clock },
                  { label: "Comments", value: "342", icon: MessageSquare },
                  { label: "Likes", value: "1,205", icon: ThumbsUp },
                ].map((stat) => (
                  <Card key={stat.label}>
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Avatar({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`relative overflow-hidden rounded-full ${className}`}>{children}</div>
}

function AvatarImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image src={src || "/placeholder.svg"} alt={alt} width={40} height={40} className="h-full w-full object-cover" />
  )
}

function AvatarFallback({ children }: { children: React.ReactNode }) {
  return <div className="flex h-full w-full items-center justify-center bg-muted text-xs font-medium">{children}</div>
}

