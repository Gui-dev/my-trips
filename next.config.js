const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com']
  }
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
