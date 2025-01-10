import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    typedRoutes: true,
    typedEnv: true
  }
};

export default nextConfig;
