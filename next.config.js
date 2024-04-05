import { withFaust } from "@faustwp/core";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withFaust({
  ...nextConfig,
});

// module.exports = nextConfig;
