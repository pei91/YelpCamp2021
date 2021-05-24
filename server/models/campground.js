import mongoose from "mongoose";

const CampgroundSchema = new mongoose.Schema({
  creator: String,
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostCampground = mongoose.model("PostCampground", CampgroundSchema);

export default PostCampground;
