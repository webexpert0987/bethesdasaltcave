import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bethesdasaltcave.s3.us-east-2.amazonaws.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
export default nextConfig;
