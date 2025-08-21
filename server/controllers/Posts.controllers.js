import Post from "../models/Posts.models.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

// configure cloudinary



export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find().sort({})
        return res
        .status(200)
        .json({
            success: true,
            message: "Posts fetched successfully",
            data: posts,
        })
    } catch (error) {
        next(
            createError(
                error.status,
                error?.response?.data?.error?.message || error.message
            )
        )
    }
}