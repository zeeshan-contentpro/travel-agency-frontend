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
  env: {
    MONGODB_URI:
      "mongodb+srv://travelPro:travelPro@cluster1.hlubnab.mongodb.net/travelPro?retryWrites=true&w=majority",
    DB_URI: "mongodb://localhost:27017/travelPro",
    NEXTAUTH_SECRET: "travelPro",
    GOOGLE_CLIENT_ID:
      "456377208438-sv2jj9tceamho1011u1tn21ckc643gcg.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

module.exports = nextConfig;
