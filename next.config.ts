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
    // 90 is used for full-bleed hero/page-banner images (see Hero.tsx and
    // PageHeader.tsx) since these display much larger than the default
    // 75 comfortably supports; 75 remains the default elsewhere.
    qualities: [75, 90],
  },
};

export default nextConfig;
