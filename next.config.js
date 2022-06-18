/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    ENV: process.env.ENV,
  },
};

module.exports = withPlugins(
  [
    withSvgr,
    // your other plugins here
  ],
  nextConfig,
);
