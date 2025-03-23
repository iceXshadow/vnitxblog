import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FileText, MessageSquare, BarChart3, Settings, Shield } from "lucide-react"
import AdminSidebar from "@/components/admin-sidebar"
import UsersTable from "@/components/users-table"
import ContentModeration from "@/components/content-moderation"
import AdminAnalytics from "@/components/admin-analytics"

export default function AdminPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your blog platform</p>
          </div>
          <Button variant="outline" className="gap-2" asChild>
            <Link href="/admin/settings">
              <Settings className="h-4 w-4" /> Settings
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,853</div>
              <p className="text-xs text-muted-foreground">+156 new users this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,429</div>
              <p className="text-xs text-muted-foreground">+83 new posts this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Comments</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,294</div>
              <p className="text-xs text-muted-foreground">+512 new comments this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342,856</div>
              <p className="text-xs text-muted-foreground">+24% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="mt-8">
          <TabsList className="mb-4">
            <TabsTrigger value="users" className="gap-2">
              <Users className="h-4 w-4" /> Users
            </TabsTrigger>
            <TabsTrigger value="content" className="gap-2">
              <Shield className="h-4 w-4" /> Content Moderation
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="h-4 w-4" /> Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="users">
            <UsersTable />
          </TabsContent>
          <TabsContent value="content">
            <ContentModeration />
          </TabsContent>
          <TabsContent value="analytics">
            <AdminAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

