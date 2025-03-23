"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
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
import { MoreHorizontal, Search, UserPlus, Edit, Lock, Trash2 } from "lucide-react"

export default function UsersTable() {
  const [users] = useState([
    {
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      role: "Admin",
      status: "Active",
      posts: 42,
      joined: "Mar 15, 2023",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "Author",
      status: "Active",
      posts: 28,
      joined: "Apr 20, 2023",
    },
    {
      id: 3,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      role: "Author",
      status: "Active",
      posts: 15,
      joined: "May 10, 2023",
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "Subscriber",
      status: "Inactive",
      posts: 0,
      joined: "Jun 5, 2023",
    },
    {
      id: 5,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      role: "Author",
      status: "Active",
      posts: 12,
      joined: "Jul 15, 2023",
    },
  ])

  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="relative w-full sm:w-[300px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search users..." className="pl-8" />
        </div>
        <Button className="gap-2">
          <UserPlus className="h-4 w-4" /> Add User
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Posts</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant={user.role === "Admin" ? "default" : "outline"}>{user.role}</Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      user.status === "Active"
                        ? "bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : "bg-red-50 text-red-700 dark:bg-red-900 dark:text-red-300"
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{user.posts}</TableCell>
                <TableCell>{user.joined}</TableCell>
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
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Lock className="mr-2 h-4 w-4" /> Change Role
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
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <strong>5</strong> of <strong>100</strong> users
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

