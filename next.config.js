/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fakestoreapi.com'],
  },
  staticPageGenerationTimeout: 10,
  redirects: async () => {
    return [
      {
        source: '/product',
        destination: '/shop/all',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
