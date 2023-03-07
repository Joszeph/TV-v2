/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const { parsed: localEnv } = require('dotenv').config();

module.exports = {
  env: {
    API_KEY: localEnv.API_KEY
  },
};
