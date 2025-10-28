// next.config.js

const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
  formats: ['image/avif', 'image/webp'],
},
}

module.exports = nextConfig

