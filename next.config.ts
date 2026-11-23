import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The on-screen dev-tools badge only ever renders in `next dev`, never in a
  // production build, but it floats over the corner of full-bleed hero sections
  // and gets mistaken for site chrome during design review.
  devIndicators: false,
  images: {
    // All photography is local under public/images/library/.
    remotePatterns: [],
  },
};

export default nextConfig;
