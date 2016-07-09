module.exports = {
  // App Settings
  MONGO_URI: process.env.MONGO_URI || 'localhost',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',

  // OAuth 2.0
  GITHUB_SECRET: process.env.GITHUB_SECRET || 'YOUR_GITHUB_CLIENT_SECRET'
};
