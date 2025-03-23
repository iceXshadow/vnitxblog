import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function NewsletterSignup() {
  return (
    <Card className="bg-muted/50">
      <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:text-left md:p-8">
        <Mail className="h-12 w-12 text-primary" />
        <div className="flex-1 space-y-2">
          <CardTitle>Subscribe to our newsletter</CardTitle>
          <CardDescription>Get the latest posts delivered right to your inbox every week.</CardDescription>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <Input type="email" placeholder="Enter your email" className="w-full sm:w-[240px]" />
          <Button>Subscribe</Button>
        </div>
      </CardContent>
    </Card>
  )
}

