import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "api.classbon.com",
    },
    {
      protocol: "https",
      hostname: "minio-classbon.darkube.app",
    },
    {
      protocol: "https",
      hostname: "react-architecture.darkube.ir",
    },
  ],
}
};

export default nextConfig;
