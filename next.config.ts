import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    typedRoutes: true,
    typedEnv: true
  },
  images: {
    dangerouslyAllowSVG: true
  }
};

export default nextConfig;
