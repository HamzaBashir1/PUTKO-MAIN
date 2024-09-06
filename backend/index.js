import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from './Routes/auth.js'
import adminRouter from './Routes/adminRoutes.js';
import userRoutes from "./Routes/user.js"; 
import cors from "cors";


dotenv.config();

const app = express();
const Port = process.env.Port || 8000;


const corsOptions = {
  origin: ["https://putko-main.vercel.app"],
  methods: ["POST","GET"],
  Credential: true
}

app.get("/", (req, res) => {
  res.json("API is working");
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
app.use(cors(corsOptions));
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRouter);

app.listen(Port, () => {
  connectDB();
  console.log("Server is running on port " + Port);
});
