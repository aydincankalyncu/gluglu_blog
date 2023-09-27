import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true
    },
    img: {
      type: String,
      default: null
    },
    postIds: [{type: Schema.Types.ObjectId, ref: "Post"}]
  },
  { timestamps: true }
);

const Category =  mongoose.models.Category || mongoose.model('Category', categorySchema);
export default Category;

/**
 * model Category {
  id    String  @id @default(cuid()) @map("_id")
  slug  String  @unique
  title String
  img   String?
  Posts Post[]
}
 */