const { comments } = require("../models");

// Get all comments
exports.getComments = (req, res) => {
  res.json(comments);
};

// Create comment
exports.createComment = (req, res) => {
  const newComment = {
    id: comments.length + 1,
    text: req.body.text,
    videoId: req.body.videoId
  };

  comments.push(newComment);
  res.json(newComment);
};