/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: ".",
  async redirects() {
    return [
      {
        source: "/products/:id",
        destination: "/items/:id",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/Sprint_Mission/**",
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
