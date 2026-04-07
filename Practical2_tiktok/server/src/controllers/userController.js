const { users, videos } = require("../models");

// Get all users
exports.getUsers = (req, res) => {
  res.json(users);
};

// Get user by ID
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  res.json(user);
};

// Create user
exports.createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    username: req.body.username,
    email: req.body.email
  };

  users.push(newUser);
  res.json(newUser);
};

// Get videos of a user
exports.getUserVideos = (req, res) => {
  const userVideos = videos.filter(v => v.userId == req.params.id);
  res.json(userVideos);
};