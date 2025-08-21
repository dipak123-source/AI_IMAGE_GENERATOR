import express from "express";
import { createError } from "../error";
import { Configuration,OpenAIApi } from "openai";
dotenv.config();

// Setup openAI api key
const configuration = new Configuration({
    apikey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// controller to generate AI immages

const generateAIImage = async (req, res, next) => {
    try {
        const { prompt } = req.body;
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64json"
        });
        const generatedImage = response.data.data[0].b64_json;
        return res
        .status(200)
        .json({
            photo: generatedImage,
        })
    }
    catch (error) {
        return next(
            createError(
                error.status,
                error?.response?.data?.error?.message || error?.message
            )
        )
    }
}

export { generateAIImage};
