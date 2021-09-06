const withMDX = require('@next/mdx')({
  extenstion: /\.mdx$/,
});
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
module.exports = withPWA(
  withMDX({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    async rewrites() {
      return [
        {
          source: '/:staticPage',
          destination: '/:staticPage/index.html',
        },
      ];
    },

    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
    },
  })
);
