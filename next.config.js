/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/post/:path",
        destination: "https://link.coupang.com/a/:path",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
