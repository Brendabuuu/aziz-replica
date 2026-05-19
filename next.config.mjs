/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "azizkhaldi.com",
      },
    ],
  },
};

export default nextConfig;
