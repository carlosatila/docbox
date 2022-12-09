export default {
  url: process.env.URL || 'http://localhost:3333',
  port: process.env.PORT || 3333,
  appUrl: process.env.APP_URL || 'http://localhost:5173',
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/docbox',
  cors: {
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
  },
  extensions: ['exe', 'zip', 'bat'],
};
