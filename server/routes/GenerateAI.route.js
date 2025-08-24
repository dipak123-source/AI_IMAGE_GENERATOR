import express from "express";
import { generateAIImage } from "../controllers/GenerateAIImage.controller.js";
const router = express.Router();

router.post("/", generateAIImage);

export default router;