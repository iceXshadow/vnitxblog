/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose, { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    likes: { type: Number, default: 0 },
    comments: { type: Array, default: [] },
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", PostSchema);
export default Post;