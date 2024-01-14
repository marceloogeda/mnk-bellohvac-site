/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    nextScriptWorkers: false,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
  //   images: {
  //   domains: ['https://ghosttest-valter.ghost.io'],
  // },

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'ghosttest-valter.ghost.io',
  //     },
  //   ],
  // },

  // headers: async () => {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
  //     },
  //   ]
  // },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
