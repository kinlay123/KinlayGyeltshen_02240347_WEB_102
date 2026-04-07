const { videos, comments } = require("../models");

// Get all videos
exports.getVideos = (req, res) => {
  res.json(videos);
};

// Get video by ID
exports.getVideoById = (req, res) => {
  const video = videos.find(v => v.id == req.params.id);
  res.json(video);
};

// Create video
exports.createVideo = (req, res) => {
  const newVideo = {
    id: videos.length + 1,
    title: req.body.title,
    userId: req.body.userId
  };

  videos.push(newVideo);
  res.json(newVideo);
};

// Get comments of a video
exports.getVideoComments = (req, res) => {
  const videoComments = comments.filter(c => c.videoId == req.params.id);
  res.json(videoComments);
};