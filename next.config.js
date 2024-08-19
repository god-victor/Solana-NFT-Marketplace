/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["ipfs.io"], // Add ipfs.io to the list of allowed domains
  },
};

module.exports = nextConfig;
