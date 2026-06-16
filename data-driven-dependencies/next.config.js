const path = require('path');
const relay = require('./relay.config.json');

module.exports = {
  compiler: {
    relay: {
      src: relay.src,
      artifactDirectory: relay.artifactDirectory,
    },
    externalDir: true,
  },
  experimental: {
    runtime: 'nodejs',
    concurrentFeatures: true,
  },
  serverRuntimeConfig: {
    projectRoot: __dirname,
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
    };
    return config;
  },
};
