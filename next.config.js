/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  staticPageGenerationTimeout: 10,
  
}

module.exports = nextConfig
