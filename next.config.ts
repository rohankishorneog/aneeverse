import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Allow build to continue even with TypeScript errors
  },
  eslint:{
    ignoreDuringBuilds: true, // Allow build to continue even with ESLint errors
  }
};

export default nextConfig;
