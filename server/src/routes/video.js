import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { videoId } = req.body;

  if (!videoId) {
    return res.status(400).json({
      status: "false",
      message: "videoId is required",
    });
  }

  res.json({
    status: "true",
    message: "videoId received successfully",
    videoId,
  });
});

export default router;
