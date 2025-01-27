/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/thereport',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/thereport/',
};

export default nextConfig;
