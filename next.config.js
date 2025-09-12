/** @type {import('next').NextConfig} */
const nextConfig = {
  // For now, we'll start with a basic configuration
  // Module Federation will be added later when we create the remote apps
  webpack(config, options) {
    // Basic webpack configuration
    return config;
  },
};

module.exports = nextConfig;
