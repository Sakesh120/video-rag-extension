import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import healthRouter from "./routes/health.js";
import videoRouter from "./routes/video.js";
import chatRouter from "./routes/chat.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/health", healthRouter);
app.use("/api/video", videoRouter);
app.use("/api/chat", chatRouter);

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "VideoChat server is running",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`VideoChat server running on http://localhost:${PORT}`);
});
