"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, PenLine, Eye, Trash2 } from "lucide-react"

export default function PostsTable() {
  const [posts] = useState([
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      status: "Published",
      date: "Mar 15, 2025",
      views: 1245,
      comments: 24,
      likes: 142,
    },
    {
      id: 2,
      title: "10 Productivity Hacks Every Developer Should Know",
      status: "Published",
      date: "Mar 10, 2025",
      views: 982,
      comments: 18,
      likes: 97,
    },
    {
      id: 3,
      title: "Understanding WebAssembly: The Future of Web Performance",
      status: "Published",
      date: "Mar 5, 2025",
      views: 756,
      comments: 12,
      likes: 84,
    },
    {
      id: 4,
      title: "Building Accessible Web Applications from the Ground Up",
      status: "Published",
      date: "Feb 28, 2025",
      views: 543,
      comments: 9,
      likes: 62,
    },
    {
      id: 5,
      title: "Edge Computing: Bringing the Cloud Closer to Users",
      status: "Published",
      date: "Feb 20, 2025",
      views: 421,
      comments: 7,
      likes: 53,
    },
  ])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Posts</CardTitle>
        <CardDescription>Manage and track your published content</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]">Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-right">Comments</TableHead>
              <TableHead className="text-right">Likes</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">
                  <Link href={`/post/${post.id}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300">
                    {post.status}
                  </Badge>
                </TableCell>
                <TableCell>{post.date}</TableCell>
                <TableCell className="text-right">{post.views.toLocaleString()}</TableCell>
                <TableCell className="text-right">{post.comments}</TableCell>
                <TableCell className="text-right">{post.likes}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href={`/post/${post.id}`}>
                          <Eye className="mr-2 h-4 w-4" /> View
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/edit/${post.id}`}>
                          <PenLine className="mr-2 h-4 w-4" /> Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600 dark:text-red-400">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

