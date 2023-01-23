/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/post",
        destination: "https://link.coupang.com/a/M0VAE",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
