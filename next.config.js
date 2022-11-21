const path = require('path');

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  } /* 웹팩 부가 설정 */,

  reactStrictMode: true,
  swcMinify: true,
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === 'production',
  // },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/form',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
