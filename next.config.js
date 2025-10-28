// next.config.js
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  outputFileTracingRoot: path.resolve(__dirname),
}

module.exports = nextConfig
