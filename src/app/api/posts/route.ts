/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Post from "@/models/Posts";

const dummyData = {
  title: "The Future of Web Development: Trends to Watch in 2025",
  description: "Explore the emerging technologies and methodologies that will shape the future of web development.",
  category: "Technology",
  readTime: "8 min read",
  author: {
    name: "Jane Doe",
    avatar: "/placeholder.svg",
    bio: "Senior Web Developer & Technical Writer",
  },
  date: "Mar 15, 2025",
  comments: 24,
  likes: 142,
  image: "/placeholder.svg?height=600&width=1200",
  content: [
    { type: "paragraph", text: "As we move further into the digital age, web development continues to evolve at a rapid pace..." },
    { type: "heading", text: "1. AI-Driven Development" },
    { type: "paragraph", text: "Artificial intelligence is no longer just a buzzword—it’s becoming an integral part of development..." },
    { type: "heading", text: "2. WebAssembly and the Future of Browser Performance" },
    { type: "paragraph", text: "WebAssembly (Wasm) continues to gain traction as a way to run high-performance code in browsers..." },
  ],
};

// 🟢 GET a single Post by `?slug=...`
export async function GET(req: NextRequest) {
  await connectDB();
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug"); // Get slug from query params

    if (!slug) {
      return NextResponse.json(
        { message: "Slug is required" },
        { status: 400 }
      );
    }

    const post = await Post.findOne({ slug });

    if (!post) {
      return NextResponse.json(
        { message: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as any)?.message },
      { status: 500 }
    );
  }
}

// 🟡 UPDATE a Post by `?slug=...`
export async function PUT(req: NextRequest) {
  await connectDB();
  try {
    const slug = req.nextUrl.searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ message: "Slug is required" }, { status: 400 });
    }

    const updates = await req.json();
    const updatedPost = await Post.findOneAndUpdate({ slug }, updates, {
      new: true,
    });

    if (!updatedPost)
      return NextResponse.json({ message: "Post not found" }, { status: 404 });

    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as any)?.message },
      { status: 500 }
    );
  }
}

// 🔴 DELETE a Post by `?slug=...`
export async function DELETE(req: NextRequest) {
  await connectDB();
  try {
    const slug = req.nextUrl.searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ message: "Slug is required" }, { status: 400 });
    }

    const deletedPost = await Post.findOneAndDelete({ slug });

    if (!deletedPost)
      return NextResponse.json({ message: "Post not found" }, { status: 404 });

    return NextResponse.json({ message: "Post deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as any)?.message },
      { status: 500 }
    );
  }
}
