/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    protocol: "https",
    hostname: "unsplash.com",
    port: "",
    domains: ["images.unsplash.com", "unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;

