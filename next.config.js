// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["http://192.168.10.6:3000"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xxxxxxxxxxxxxx.supabase.co",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
  compiler: {
    styledComponents: true, // ← これ追加する！
  },
};

module.exports = nextConfig;

