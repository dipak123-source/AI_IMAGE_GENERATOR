import express from "express";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import axios from "axios";

dotenv.config();

// controller to generate AI images with Stability AI
const generateAIImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    // Stability API endpoint (Stable Diffusion XL)
    const response = await axios.post(
      "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image",
      {
        text_prompts: [
          {
            text: prompt,
          },
        ],
        cfg_scale: 7, // prompt strength
        height: 1024,
        width: 1024,
        samples: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`, // ✅ API key
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    // Stability returns base64 images directly
    const base64Image = response.data.artifacts[0].base64;

    return res.status(200).json({
      success: true,
      base64: base64Image,
      url: `data:image/png;base64,${base64Image}`, // for <img src=""> usage
    });
  } catch (error) {
    return next(
      createError(
        error.response?.status || 500,
        error.response?.data?.message || error.message
      )
    );
  }
};

export { generateAIImage };
