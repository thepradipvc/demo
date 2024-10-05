// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https", // or http
        hostname: "images.pexels.com",
      },
      {
        protocol: "https", // or http
        hostname: "assets.stanwith.me",
      },
      {
        protocol: "https", // or http
        hostname: "ugc.production.linktr.ee",
      },
      {
        protocol: "https", // or http
        hostname: "assets.production.linktr.ee",
      },
      {
        protocol: "https", // or http
        hostname: "devlnkr.s3.amazonaws.com",
      },
    ],
  },
  sassOptions: {
    includePaths: ['./styles'], // Optional: Custom path for your Sass files
  },
};

export default nextConfig;
