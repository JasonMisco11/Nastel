import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Version static asset URLs per commit so Vercel/CDN caches cannot mix
  // CSS from an older release with the current page markup.
  deploymentId: process.env.VERCEL_GIT_COMMIT_SHA ?? "nastel-local",
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
