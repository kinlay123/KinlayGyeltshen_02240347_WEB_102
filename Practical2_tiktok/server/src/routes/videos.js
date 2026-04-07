const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

router.get("/", videoController.getVideos);
router.get("/:id", videoController.getVideoById);
router.post("/", videoController.createVideo);
router.get("/:id/comments", videoController.getVideoComments);

module.exports = router;