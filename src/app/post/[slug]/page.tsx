import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ThumbsUp, MessageSquare, Share2, Bookmark, Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
import CommentSection from "@/components/comment-section"
import RelatedPosts from "@/components/related-posts"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container py-8 md:py-12">
      <article className="mx-auto max-w-3xl">
        {/* Post header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-2">
            <Badge>Technology</Badge>
            <span className="text-sm text-muted-foreground">8 min read</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The Future of Web Development: Trends to Watch in 2025
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore the emerging technologies and methodologies that will shape the future of web development in the
            coming years.
          </p>

          {/* Author info */}
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg" alt="Jane Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Jane Doe</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Mar 15, 2025</span>
                <span>·</span>
                <Link href="#comments" className="text-primary hover:underline">
                  24 comments
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Featured image"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>

        {/* Post content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p>
            As we move further into the digital age, web development continues to evolve at a rapid pace. New
            technologies, frameworks, and methodologies emerge regularly, changing how developers build applications and
            how users interact with them.
          </p>

          <h2>1. AI-Driven Development</h2>
          <p>
            Artificial intelligence is no longer just a buzzword—it&apos;s becoming an integral part of the development
            process. AI-powered tools can now generate code, identify bugs, and even design user interfaces based on
            simple prompts.
          </p>
          <p>
            Developers are increasingly using AI assistants to handle repetitive tasks, allowing them to focus on more
            complex and creative aspects of development. This shift is not about replacing developers but augmenting
            their capabilities and productivity.
          </p>

          <h2>2. WebAssembly and the Future of Browser Performance</h2>
          <p>
            WebAssembly (Wasm) continues to gain traction as a way to run high-performance code in browsers. Originally
            designed to enable C/C++ code to run on the web, Wasm now supports many languages and is becoming essential
            for computationally intensive web applications.
          </p>
          <p>
            The ability to run near-native speed code in the browser is opening new possibilities for web applications,
            from advanced games to complex data visualization and machine learning models running directly in the
            browser.
          </p>

          <h2>3. The Rise of Edge Computing</h2>
          <p>
            Edge computing is changing how web applications are deployed and served. By moving computation closer to the
            user, edge functions reduce latency and improve performance, especially for users in regions far from
            traditional cloud data centers.
          </p>
          <p>
            Frameworks and platforms that seamlessly integrate edge computing capabilities are becoming increasingly
            popular, allowing developers to deploy globally distributed applications with minimal configuration.
          </p>

          <h2>4. Micro-Frontends Architecture</h2>
          <p>
            As web applications grow in complexity, the micro-frontends architecture is gaining popularity. This
            approach extends microservices principles to frontend development, allowing teams to work independently on
            different parts of an application.
          </p>
          <p>
            By breaking down monolithic frontends into smaller, more manageable pieces, organizations can scale their
            development efforts more effectively and adopt new technologies incrementally.
          </p>

          <h2>5. Accessibility as a Priority</h2>
          <p>
            Web accessibility is no longer an afterthought but a fundamental aspect of web development. With increasing
            regulatory requirements and a growing awareness of the importance of inclusive design, developers are
            prioritizing accessibility from the start of projects.
          </p>
          <p>
            New tools and frameworks are making it easier to build accessible applications, with built-in features for
            keyboard navigation, screen reader compatibility, and other accessibility requirements.
          </p>

          <h2>Conclusion</h2>
          <p>
            The future of web development is exciting and full of possibilities. By staying informed about these trends
            and embracing new technologies thoughtfully, developers can build better, more inclusive, and more powerful
            web applications.
          </p>
          <p>
            As we look ahead to 2025 and beyond, the web will continue to evolve as a platform, offering new
            capabilities and reaching more users than ever before.
          </p>
        </div>

        {/* Post actions */}
        <div className="my-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <ThumbsUp className="h-4 w-4" />
              <span>142 Likes</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>24 Comments</span>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Share section */}
        <div className="mb-8 rounded-lg bg-muted p-4">
          <h3 className="mb-4 text-sm font-medium">Share this article</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Facebook className="h-4 w-4" />
              <span>Facebook</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Twitter className="h-4 w-4" />
              <span>Twitter</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <LinkIcon className="h-4 w-4" />
              <span>Copy Link</span>
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Author bio */}
        <div className="mb-8 rounded-lg border p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg" alt="Jane Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-xl font-bold">Jane Doe</h3>
              <p className="mb-2 text-muted-foreground">Senior Web Developer & Technical Writer</p>
              <p className="text-sm">
                Jane is a web developer with over 10 years of experience specializing in frontend technologies. She
                writes about emerging trends and best practices in web development.
              </p>
            </div>
            <Button>Follow</Button>
          </div>
        </div>

        {/* Comments section */}
        <div id="comments">
          <CommentSection />
        </div>
      </article>

      {/* Related posts */}
      <div className="mx-auto mt-16 max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold">Related Articles</h2>
        <RelatedPosts />
      </div>
    </div>
  )
}

