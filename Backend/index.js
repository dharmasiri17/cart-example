import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";

const app = express();
app.use(express.json());

// MongoDB Connection
const connectionString = "mongodb+srv://chathura101:chathura101@cluster-0.yltf4rs.mongodb.net/yoyo?retryWrites=true&w=majority&appName=Cluster-0";
mongoose.connect(connectionString)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/products", productRouter);

// Default route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Server
app.listen(5000, () => {
    console.log("🚀 Server is running on port 5000");
});
