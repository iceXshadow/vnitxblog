"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Save, ImageIcon, Calendar, Eye, ArrowLeft } from "lucide-react"

export default function NewPostPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to Dashboard</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create New Post</h1>
          <p className="text-muted-foreground">Draft a new blog post</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="featured-image">Featured Image</Label>
            <Card className="cursor-pointer border-dashed">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                <ImageIcon className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Drag and drop an image, or click to browse</p>
                <Button variant="secondary" size="sm">
                  Upload Image
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="content">Content</Label>
              <Tabs defaultValue="write">
                <TabsList className="grid w-[200px] grid-cols-2">
                  <TabsTrigger value="write">Write</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <Tabs defaultValue="write" className="w-full">
              <TabsContent value="write" className="mt-0">
                <Textarea
                  id="content"
                  placeholder="Write your post content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[400px] resize-none"
                />
              </TabsContent>
              <TabsContent value="preview" className="mt-0">
                <div className="min-h-[400px] rounded-md border border-input bg-background p-4">
                  {content ? (
                    <div className="prose max-w-none dark:prose-invert">
                      {content.split("\n").map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground">Nothing to preview yet</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Publish</Label>
                  <div className="flex gap-2">
                    <Button className="flex-1 gap-2">
                      <Save className="h-4 w-4" /> Save Draft
                    </Button>
                    <Button variant="outline" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue="draft">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publish-date">Publish Date</Label>
                  <div className="relative">
                    <Input id="publish-date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                    <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue="technology">
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="productivity">Productivity</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="gap-1">
                      Web Development
                      <button className="ml-1 text-muted-foreground hover:text-foreground">×</button>
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      JavaScript
                      <button className="ml-1 text-muted-foreground hover:text-foreground">×</button>
                    </Badge>
                    <Input placeholder="Add a tag..." className="h-7 w-24 flex-1" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Write a short excerpt for your post..."
                    className="h-24 resize-none"
                  />
                  <p className="text-xs text-muted-foreground">This will be displayed on the blog index page</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="seo-title">SEO Title</Label>
                  <Input id="seo-title" placeholder="SEO title" defaultValue={title} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="seo-description">SEO Description</Label>
                  <Textarea id="seo-description" placeholder="SEO description" className="h-24 resize-none" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

