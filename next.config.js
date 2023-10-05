const path = require('path')
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['cdn.mobygames.com'],
  },
  output: 'standalone',
}

module.exports = nextConfig
