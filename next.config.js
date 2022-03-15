/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: `https://returnstem.org/courses`,
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
