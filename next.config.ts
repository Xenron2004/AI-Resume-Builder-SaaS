import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "9x02daft5v1omw6p.public.blob.vercel-storage.com"
      }
    ]
  }
};

export default nextConfig;
