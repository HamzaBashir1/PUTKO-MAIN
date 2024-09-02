import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Routes/userRoutes.js"; // Added `.js` extension
import adminRoutes from "./Routes/adminRoutes.js"; // Added `.js` extension

dotenv.config();

const app = express();
const Port = process.env.Port || 8000;

app.get("/", (req, res) => {
  res.send("API is working");
});

// Database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("MongoDB is connected");
  } catch (err) {
    console.log("MongoDB connection failed", err.message);
  }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

app.listen(Port, () => {
  connectDB();
  console.log("Server is running on port " + Port);
});
