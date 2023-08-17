/** @type {import('next').NextConfig} */
const { i18n } = require('./i18n.config')

const nextConfig = {
  reactStrictMode: true,
  i18n,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_BASE_URL || '/'],
  },
  eslint: {
    dirs: ['src'],
  },
  pageExtensions: ['page.tsx', 'api.ts'],
}

module.exports = nextConfig
