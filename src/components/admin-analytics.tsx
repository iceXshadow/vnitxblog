import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, LineChart, Users, Eye } from "lucide-react"

export default function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Total Views", value: "342,856", icon: Eye, change: "+24%" },
              { title: "Unique Visitors", value: "89,721", icon: Users, change: "+18%" },
              { title: "Avg. Time on Site", value: "4m 32s", icon: LineChart, change: "+12%" },
              { title: "Bounce Rate", value: "32.4%", icon: BarChart3, change: "-5%" },
            ].map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change} from last month</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Traffic Overview</CardTitle>
                <CardDescription>Daily page views over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-lg border bg-muted p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-center text-muted-foreground">Traffic chart visualization would go here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
                <CardDescription>Top performing content categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-lg border bg-muted p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-center text-muted-foreground">Content performance chart would go here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your visitors are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full rounded-lg border bg-muted p-4">
                <div className="flex h-full items-center justify-center">
                  <p className="text-center text-muted-foreground">Traffic sources chart would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Analytics</CardTitle>
              <CardDescription>Performance metrics for your content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="h-[300px] w-full rounded-lg border bg-muted p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-center text-muted-foreground">Top posts by views chart would go here</p>
                  </div>
                </div>
                <div className="h-[300px] w-full rounded-lg border bg-muted p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-center text-muted-foreground">Engagement by content type chart would go here</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Demographics</CardTitle>
              <CardDescription>Insights about your user base</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="h-[300px] w-full rounded-lg border bg-muted p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-center text-muted-foreground">User demographics chart would go here</p>
                  </div>
                </div>
                <div className="h-[300px] w-full rounded-lg border bg-muted p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-center text-muted-foreground">User activity chart would go here</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

