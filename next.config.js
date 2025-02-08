/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  webpack: (config) => {
    // Add support for PDF generation
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      stream: false,
      path: false,
      process: false
    };
    return config;
  }
}

module.exports = nextConfig 