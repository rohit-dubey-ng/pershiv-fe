/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during production builds
  },
  images: {
    localPatterns: [
      {
        pathname: "/images/assets/**",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
