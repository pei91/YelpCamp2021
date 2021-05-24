import mongoose from "mongoose";

const CampgroundSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const PostReview = mongoose.model("PostReview", reviewSchema);

export default PostReview;
