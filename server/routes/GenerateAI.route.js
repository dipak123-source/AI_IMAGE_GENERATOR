import express from "express";
import { generateAIImage } from "../controllers/GenerateAI.controller.js";
const router = express.Router();

router.get("/", generateAIImage);

export default router;