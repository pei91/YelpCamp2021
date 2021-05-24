import mongoose from "mongoose";
import PostCampground from "../models/campground.js";

export const getCampgrounds = async (req, res) => {
  try {
    const postCampground = await PostCampground.find();
    res.status(200).json(postCampground);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCampground = async (req, res) => {
  const campground = req.body;
  const newCampground = new PostCampground(campground);

  try {
    await newCampground.save();
    res.status(201).json(newCampground);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateCampground = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedPost = await PostCampground.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};

export const deleteCampground = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await PostCampground.findByIdAndRemove(id);
  console.log("I delete");
  res.json({ message: "Camp ground deleted successfully" });
};

export const likeCampground = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  const campground = await PostCampground.findById(id);

  const updatedPost = await PostCampground.findByIdAndUpdate(
    id,
    { likeCount: campground.likeCount + 1 },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};
