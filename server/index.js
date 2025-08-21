import cors from 'cors';
import express from "express";
import mongoose, { mongo } from "mongoose";
import * as dotenv from "dotenv";
import { error } from 'console';
import PostRoute from "./routes/Posts.route.js";
import generateImageRouter from "./routes/GenerateAI.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded({ extended: true}));
app.use("/api/generateAIImage", generateImageRouter);

app.use("/api/post", PostRoute);
//error handling middleware
app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    })
})


//Default get
app.get("/", async (req, res)=>{
    res.status(200).json({
        message: "Hello from the server!",
    });
});

//function to connect to MongoDB
const connectDB = async () =>{
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err)=>{
        console.error("Error connecting to MongoDB: ");
        console.error(err);
    });
}

//function to start the server
const startServer = async () => {
    try {
    await connectDB();
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`));
    } catch (error) {
        console.log("Error starting the server: ",error);
    }
}

startServer();