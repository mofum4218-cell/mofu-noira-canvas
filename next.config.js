const path = require('path');

const nextConfig = {
  allowedDevOrigins: ["http://192.168.10.6:3000"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xxxxxx.supabase.co",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

module.exports = nextConfig;
