/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during production builds
  },
  images: {
    domains: ["pershiv-fe.netlify.app"], // Add the domains you need to fetch images from
  },
};

module.exports = nextConfig;
