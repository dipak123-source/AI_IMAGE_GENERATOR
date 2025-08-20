import cors from 'cors';
import express from "express";
import mongoose, { mongo } from "mongoose";
import * as dotenv from "dotenv";
import { error } from 'console';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded({ extended: true}));

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
    res.send(200).json({
        message: "Hello from the server!",
    });
})

//function to connect to MongoDB
const connectDB = async () =>{
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err)=>{
        console.error("Error connecting to MongoDB: ");
        console.error(err);
    })
}

//function to start the server
const startServer = async () => {
    try {
        connectDB();
        app.listen(8080,"0.0.0.0", ()=> console.log("Server is running on port 8080"));
    } catch (error) {
        console.log("Error starting the server: ",error);
    }
}