/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Versioned image directories — safe to cache for 1 year
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/logos/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Root-level images (og-image, favicons, etc.) — 1 day, not immutable
        source: '/:file((?!.*\\/).+\\.(?:png|jpg|jpeg|gif|svg|webp|ico))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ]
  },
}

export default nextConfig
