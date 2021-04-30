import express from "express";
import { getBlog } from "../controllers/blogs/getBlogController.js";
import { getRange } from "../controllers/blogs/getRangeController.js";
import { postBlog } from "../controllers/blogs/postBlogController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/getBlog", getBlog);
router.post("/getRange", getRange);
router.post("/postBlog", verifyToken ,postBlog);

export default router;
