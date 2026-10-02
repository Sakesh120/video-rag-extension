import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { videoId, question } = req.body;

  if (!videoId) {
    return res.status(400).json({
      success: false,
      message: "videoId is required",
    });
  }

  if (!question || question.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "question is required",
    });
  }

  res.json({
    success: true,
    message: "Question received successfully",
    videoId,
    question,
  });
});

export default router;
