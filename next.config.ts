import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'site-porque.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
