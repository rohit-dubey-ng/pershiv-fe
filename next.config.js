/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during production builds
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
