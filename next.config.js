/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['app-coffee-shop.herokuapp.com'],
  },
}
module.exports = nextConfig
