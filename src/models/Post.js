import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    img: {
      type: String,
      default: null,
    },
    views: {
      type: Number,
      default: 0,
    },
    categorySlug: {
      type: String,
      required: true,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
