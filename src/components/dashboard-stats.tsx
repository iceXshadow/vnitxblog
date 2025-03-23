import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, MessageSquare, Eye } from "lucide-react"

export default function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Views</CardTitle>
          <Eye className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24,521</div>
          <p className="text-xs text-muted-foreground">
            <TrendingUp className="mr-1 inline h-3 w-3 text-green-500" />
            +12.5% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">42</div>
          <p className="text-xs text-muted-foreground">
            <TrendingUp className="mr-1 inline h-3 w-3 text-green-500" />
            +4 new posts this month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Comments</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">342</div>
          <p className="text-xs text-muted-foreground">
            <TrendingUp className="mr-1 inline h-3 w-3 text-green-500" />
            +18% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Followers</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,205</div>
          <p className="text-xs text-muted-foreground">
            <TrendingUp className="mr-1 inline h-3 w-3 text-green-500" />
            +32 new followers this month
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

