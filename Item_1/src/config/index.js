require('dotenv').config();

const config = {
    hostname: process.env.HOSTNAME || '127.0.0.1',
    port: process.env.PORT || 3000,
    githubUsername: process.env.GITHUB_USERNAME || 'google'
};

module.exports = config;
