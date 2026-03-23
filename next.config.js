/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "minio.ellequin.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

module.exports = nextConfig;
