import express from "express";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { OpenAI } from "openai";
import axios from "axios";
dotenv.config();

// Setup openAI api key

const openai = new OpenAI({
    apikey: process.env.OPENAI_API_KEY,
});

// controller to generate AI images

const generateAIImage = async (req, res, next) => {
    try {
        const { prompt } = req.body;
        const response = await openai.images.generate({
            model: "gpt-image-1",
            prompt,
            n: 1,
            size: "1024x1024"
        });
        const generatedImage = response.data[0].url;
        const imageResponse = await axios.get(generatedImage, { responseType: "arraybuffer" });
        const base64Image = Buffer.from(imageResponse.data, "binary").toString("base64");
        return res
        .status(200)
        .json({
            success: true,
            url: generatedImage,
            base64: base64Image,
        })
    }
    catch (error) {
        return next(
            createError(
                error.status || 500,
                error?.response?.data?.error?.message || error?.message
            )
        )
    }
}

export { generateAIImage };