const withMDX = require('@next/mdx')({
  extenstion: /\.mdx$/,
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
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
});
