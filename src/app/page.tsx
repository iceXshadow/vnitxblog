import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import FeaturedPosts from "@/components/featured-posts";
import CategoryList from "@/components/category-list";
import TrendingPosts from "@/components/trending-posts";
import NewsletterSignup from "@/components/newsletter-signup";

export default function HomePage() {
	return (
		<div className="container px-4 py-8 md:px-6 lg:px-8 md:py-12">
			{/* Hero section */}
			<section className="mb-12 space-y-4 text-center">
				<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
					Discover, Read, and Share
				</h1>
				<p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
					Join our community of writers and readers to explore ideas, share
					stories, and connect with others.
				</p>
				<div className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
					<Button size="lg" className="w-full" asChild>
						<Link href="/signup">Start Writing</Link>
					</Button>
					<Button size="lg" variant="outline" className="w-full" asChild>
						<Link href="/categories">Explore Content</Link>
					</Button>
				</div>
			</section>

			{/* Search and categories */}
			<section className="mb-12">
				<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<h2 className="text-2xl font-bold tracking-tight">Explore Topics</h2>
					<div className="relative w-full sm:w-[300px]">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search posts..."
							className="pl-8"
						/>
					</div>
				</div>
				<CategoryList />
			</section>

			{/* Featured posts */}
			<section className="mb-12">
				<h2 className="mb-8 text-2xl font-bold tracking-tight">
					Featured Posts
				</h2>
				<FeaturedPosts />
			</section>

			{/* Content tabs */}
			<section className="mb-12">
				<Tabs defaultValue="latest" className="w-full">
					<div className="mb-8 flex items-center justify-between">
						<TabsList>
							<TabsTrigger value="latest">Latest</TabsTrigger>
							<TabsTrigger value="trending">Trending</TabsTrigger>
							<TabsTrigger value="popular">Popular</TabsTrigger>
						</TabsList>
						<Button variant="ghost" size="sm" asChild>
							<Link href="/posts">View all</Link>
						</Button>
					</div>
					<TabsContent value="latest" className="space-y-4">
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{[1, 2, 3, 4, 5, 6].map((i) => (
								<PostCard key={i} />
							))}
						</div>
					</TabsContent>
					<TabsContent value="trending" className="space-y-4">
						<TrendingPosts />
					</TabsContent>
					<TabsContent value="popular" className="space-y-4">
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{[1, 2, 3, 4, 5, 6].map((i) => (
								<PostCard key={i} />
							))}
						</div>
					</TabsContent>
				</Tabs>
			</section>

			{/* Newsletter signup */}
			<section className="mb-12">
				<NewsletterSignup />
			</section>
		</div>
	);
}

function PostCard() {
	return (
		<Card className="overflow-hidden">
			<div className="aspect-video w-full overflow-hidden">
				<Image
					src="/placeholder.svg?height=250&width=500"
					alt="Post thumbnail"
					width={500}
					height={250}
					className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
				/>
			</div>
			<CardHeader className="p-4">
				<div className="flex items-center gap-2">
					<Badge variant="secondary">Technology</Badge>
					<span className="text-xs text-muted-foreground">5 min read</span>
				</div>
				<CardTitle className="line-clamp-2 text-xl">
					<Link href="/post/1" className="hover:text-primary">
						The Future of Web Development: Trends to Watch in 2025
					</Link>
				</CardTitle>
			</CardHeader>
			<CardContent className="p-4 pt-0">
				<p className="line-clamp-3 text-sm text-muted-foreground">
					Explore the emerging technologies and methodologies that will shape
					the future of web development in the coming years.
				</p>
			</CardContent>
			<CardFooter className="flex items-center justify-between border-t p-4">
				<div className="flex items-center gap-2">
					<Avatar className="h-6 w-6">
						<AvatarImage src="/placeholder.svg" alt="Author" />
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
					<span className="text-xs">Jane Doe</span>
				</div>
				<span className="text-xs text-muted-foreground">Mar 15, 2025</span>
			</CardFooter>
		</Card>
	);
}

function Avatar({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<div className={`relative overflow-hidden rounded-full ${className}`}>
			{children}
		</div>
	);
}

function AvatarImage({ src, alt }: { src: string; alt: string }) {
	return (
		<Image
			src={src || "/placeholder.svg"}
			alt={alt}
			width={40}
			height={40}
			className="h-full w-full object-cover"
		/>
	);
}

function AvatarFallback({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-full w-full items-center justify-center bg-muted text-xs font-medium">
			{children}
		</div>
	);
}
