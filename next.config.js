module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'null'
    }
    return config
  }
};

// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//     }
//     return config;
//   },
// }
const withImages = require('next-images')
module.exports = withImages()
module.exports = {
  distDir: 'build',
}