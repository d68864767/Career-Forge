// Load environment variables
require('dotenv').config();

// Configuration object
const config = {
  port: process.env.PORT || 3000,
  database: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/careerforge',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  auth: {
    secretKey: process.env.AUTH_SECRET_KEY || 'your-secret-key',
    expiresIn: process.env.AUTH_EXPIRES_IN || '1d',
  },
};

module.exports = config;

