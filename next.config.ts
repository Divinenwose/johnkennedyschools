import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Temporary placeholder photography lives on Unsplash until real
    // John Kennedy International Schools photographs are supplied.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
