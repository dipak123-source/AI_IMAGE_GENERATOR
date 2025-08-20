import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true,
    },
    prompt: {
        type: string,
        required: true,
    },
    photo: {
        type: string,
        required: true,
    },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;