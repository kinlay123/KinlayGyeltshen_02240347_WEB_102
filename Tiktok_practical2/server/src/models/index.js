const dataStore = {
  users: [
    {
      id: 1,
      username: 'Kinlay',
      email: 'Kinlay@gmail.com',
      name: 'kinlay gyeltshen',
      followers: [10000],
      following: [10],
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      username: 'bgyelsob',
      email: 'gyels@gmail.com',
      name: 'Bob',
      followers: [2000],
      following: [5],
      createdAt: new Date().toISOString()
    }
  ],
  videos: [
    {
      id: 1,
      title: 'My First Video',
      description: 'Hello world!',
      url: 'https://example.com/video1.mp4',
      userId: 1,
      likes: [],
      createdAt: new Date().toISOString()
    }
  ],
  comments: [
    {
      id: 1,
      text: 'Great video!',
      userId: 2,
      videoId: 1,
      likes: [],
      createdAt: new Date().toISOString()
    }
  ],
  nextIds: {
    users: 3,
    videos: 2,
    comments: 2
  }
};

module.exports = dataStore;