/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/thereport', // Add base path for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
