let users = [
  { id: 1, username: "kinlay", email: "kinlay@gmail.com" },
  { id: 2, username: "tashi", email: "tashi@gmail.com" }
];

let videos = [
  { id: 1, title: "My first video", userId: 1 },
  { id: 2, title: "Funny video", userId: 2 }
];

let comments = [
  { id: 1, text: "Nice video!", videoId: 1 },
  { id: 2, text: "Awesome!", videoId: 2 }
];

module.exports = { users, videos, comments };