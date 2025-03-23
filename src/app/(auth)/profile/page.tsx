import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Settings, Edit, User, Mail, MapPin, LinkIcon, Calendar, BookOpen } from "lucide-react"
import UserPosts from "@/components/user-posts"
import UserBookmarks from "@/components/user-bookmarks"

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">Manage your profile and account settings</p>
        </div>
        <Button variant="outline" className="gap-2" asChild>
          <Link href="/profile/settings">
            <Settings className="h-4 w-4" /> Settings
          </Link>
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg"
                      alt="Profile picture"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full bg-background shadow-sm"
                  >
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit profile picture</span>
                  </Button>
                </div>
                <h2 className="text-xl font-bold">Jane Doe</h2>
                <p className="text-sm text-muted-foreground">Senior Web Developer</p>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Web Development</Badge>
                  <Badge variant="secondary">UI/UX</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                </div>
                <Button className="mt-4 w-full">Edit Profile</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm">
                Web developer with over 10 years of experience specializing in frontend technologies. I write about
                emerging trends and best practices in web development.
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>Jane Doe</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>jane.doe@example.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>San Francisco, CA</span>
                </li>
                <li className="flex items-center gap-2">
                  <LinkIcon className="h-4 w-4 text-muted-foreground" />
                  <a href="#" className="text-primary hover:underline">
                    janedoe.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined March 2023</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stats</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">42</p>
                  <p className="text-xs text-muted-foreground">Posts</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">1,205</p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">342</p>
                  <p className="text-xs text-muted-foreground">Comments</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">24,521</p>
                  <p className="text-xs text-muted-foreground">Views</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="posts">
            <TabsList className="mb-6">
              <TabsTrigger value="posts" className="gap-2">
                <BookOpen className="h-4 w-4" /> Posts
              </TabsTrigger>
              <TabsTrigger value="bookmarks" className="gap-2">
                <BookOpen className="h-4 w-4" /> Bookmarks
              </TabsTrigger>
            </TabsList>
            <TabsContent value="posts">
              <UserPosts />
            </TabsContent>
            <TabsContent value="bookmarks">
              <UserBookmarks />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

