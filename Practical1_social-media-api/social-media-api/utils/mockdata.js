// Mock Users
const users = [
  {
    id: 1,
    username: "karma_traveler",
    email: "karma@gmail.com",
    full_name: "Karma Dorji",
    profile_picture: "https://example.com/profiles/user1.jpg",
    bio: "Travel photographer from Bhutan",
    created_at: "2023-01-10"
  },
  {
    id: 2,
    username: "sonam_foodie",
    email: "sonam@gmail.com",
    full_name: "Sonam Wangmo",
    profile_picture: "https://example.com/profiles/user2.jpg",
    bio: "Food lover 🍜",
    created_at: "2023-02-15"
  },
  {
    id: 3,
    username: "tashi_dev",
    email: "tashi@gmail.com",
    full_name: "Tashi Phuntsho",
    profile_picture: "https://example.com/profiles/user3.jpg",
    bio: "Web developer 💻",
    created_at: "2023-03-01"
  }
];


// Mock Posts
const posts = [
  {
    id: 1,
    user_id: 1,
    image_url: "https://example.com/posts/post1.jpg",
    caption: "Beautiful mountains of Bhutan 🏔️",
    created_at: "2023-03-10"
  },
  {
    id: 2,
    user_id: 2,
    image_url: "https://example.com/posts/post2.jpg",
    caption: "Delicious momo 😋",
    created_at: "2023-03-12"
  },
  {
    id: 3,
    user_id: 3,
    image_url: "https://example.com/posts/post3.jpg",
    caption: "Working on a new API project 🚀",
    created_at: "2023-03-15"
  }
];


// Mock Comments
const comments = [
  {
    id: 1,
    post_id: 1,
    user_id: 2,
    comment: "Wow! Amazing view 😍",
    created_at: "2023-03-11"
  },
  {
    id: 2,
    post_id: 1,
    user_id: 3,
    comment: "So beautiful!",
    created_at: "2023-03-11"
  },
  {
    id: 3,
    post_id: 2,
    user_id: 1,
    comment: "Looks delicious 😋",
    created_at: "2023-03-13"
  }
];


// Mock Likes
const likes = [
  { id: 1, post_id: 1, user_id: 2 },
  { id: 2, post_id: 1, user_id: 3 },
  { id: 3, post_id: 2, user_id: 1 },
  { id: 4, post_id: 3, user_id: 2 }
];


// Mock Followers
const followers = [
  { id: 1, user_id: 1, follower_id: 2 },
  { id: 2, user_id: 1, follower_id: 3 },
  { id: 3, user_id: 2, follower_id: 1 },
  { id: 4, user_id: 3, follower_id: 1 }
];


// Export All Data
module.exports = {
  users,
  posts,
  comments,
  likes,
  followers
};