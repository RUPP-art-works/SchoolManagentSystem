/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev, isServer }) => {
    config.cache = { type: 'memory' };
    return config;
  },
  optimizeFonts: false
};

module.exports = nextConfig;