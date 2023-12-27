/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: "",
        pathname: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "platform-lookaside.fbsbx.com",
      },
    ],

    formats: ["image/avif", "image/webp"],
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://travelPro:travelPro@cluster1.hlubnab.mongodb.net/travelPro?retryWrites=true&w=majority",
    DB_URI: "mongodb://localhost:27017/travelPro",
    NEXTAUTH_SECRET: "travelpro",
    GOOGLE_CLIENT_ID:
      "456377208438-sv2jj9tceamho1011u1tn21ckc643gcg.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    FACEBOOK_CLIENT_ID: "749302219868912",
    FACEBOOK_CLIENT_SECRET: "b6b360af74957ca7642cc970fa2fb32f",
  },
};

module.exports = nextConfig;
