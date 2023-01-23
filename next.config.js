/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/post",
        destination: "https://www.naver.com",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
