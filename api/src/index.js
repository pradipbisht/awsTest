import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import itemRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect
connectDb();

// routes
app.use("/api/items", itemRoutes);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});