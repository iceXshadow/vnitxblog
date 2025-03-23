import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturedPosts() {
	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
			<Card className="col-span-full overflow-hidden md:col-span-2">
				<div className="grid gap-4 md:grid-cols-2">
					<div className="aspect-video overflow-hidden md:aspect-auto md:h-full">
						<Image
							src="/placeholder.svg?height=400&width=600"
							alt="Featured post"
							width={600}
							height={400}
							className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
						/>
					</div>
					<CardContent className="flex flex-col justify-center p-24">
						<div className="mb-2 flex gap-2">
							<Badge>Featured</Badge>
							<Badge variant="secondary">Technology</Badge>
						</div>
						<h3 className="mb-2 text-2xl font-bold">
							<Link href="/post/1" className="hover:text-primary">
								The Evolution of Artificial Intelligence in Modern Applications
							</Link>
						</h3>
						<p className="mb-4 text-muted-foreground">
							Discover how AI is transforming industries and reshaping the way
							we interact with technology in our daily lives.
						</p>
						<div className="mt-auto flex items-center gap-2">
							<div className="relative h-8 w-8 overflow-hidden rounded-full">
								<Image
									src="/placeholder.svg"
									alt="Author"
									width={32}
									height={32}
									className="object-cover"
								/>
							</div>
							<div>
								<p className="text-sm font-medium">Alex Johnson</p>
								<p className="text-xs text-muted-foreground">
									Mar 20, 2025 · 8 min read
								</p>
							</div>
						</div>
					</CardContent>
				</div>
			</Card>

			{[1, 2, 3].map((i) => (
				<Card key={i} className="overflow-hidden">
					<div className="aspect-video overflow-hidden">
						<Image
							src={`/placeholder.svg?height=200&width=400`}
							alt={`Featured post ${i}`}
							width={400}
							height={200}
							className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
						/>
					</div>
					<CardContent className="p-4">
						<div className="mb-2 flex gap-2">
							<Badge variant="secondary">Design</Badge>
						</div>
						<h3 className="mb-2 line-clamp-2 text-lg font-bold">
							<Link href={`/post/${i + 1}`} className="hover:text-primary">
								UX Design Principles That Will Improve Your Product Instantly
							</Link>
						</h3>
						<p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
							Learn the fundamental UX design principles that can transform your
							digital product and enhance user experience.
						</p>
						<div className="flex items-center gap-2">
							<div className="relative h-6 w-6 overflow-hidden rounded-full">
								<Image
									src="/placeholder.svg"
									alt="Author"
									width={24}
									height={24}
									className="object-cover"
								/>
							</div>
							<p className="text-xs">
								<span className="font-medium">Sarah Miller</span>
								<span className="text-muted-foreground"> · Mar 18, 2025</span>
							</p>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
