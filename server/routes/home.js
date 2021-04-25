import express from "express";
import { courseCatalog } from "../controllers/home/courseCatalogController.js";
import { courseDetails } from "../controllers/home/courseDetailsController.js";
import { faqAll, faqTop5 } from "../controllers/home/faqController.js";

const router = express.Router();

router.get("/courseCatalog", courseCatalog);
router.get("/faqAll", faqAll);
router.get("/faqTop5", faqTop5);
router.get("/courseDetails", courseDetails);

export default router;
