const videoRoutes = require('./src/routes/videos');
const userRoutes = require('./src/routes/users');
const commentRoutes = require('./src/routes/comments');
console.log('videoRoutes:', videoRoutes, 'type:', typeof videoRoutes, 'use?', typeof videoRoutes.use);
console.log('userRoutes:', userRoutes, 'type:', typeof userRoutes, 'use?', typeof userRoutes.use);
console.log('commentRoutes:', commentRoutes, 'type:', typeof commentRoutes, 'use?', typeof commentRoutes.use);
