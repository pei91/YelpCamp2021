import express from "express";

import {
  getCampgrounds,
  createCampground,
  updateCampground,
  deleteCampground,
  likeCampground,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getCampgrounds);
router.post("/", createCampground);
router.patch("/:id", updateCampground);
router.delete("/:id", deleteCampground);
router.patch("/:id/likeCampground", likeCampground);

export default router;
