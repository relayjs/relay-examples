const relay = require('./relay.config.json');

module.exports = {
  compiler: {
    relay: {
      src: relay.src,
      artifactDirectory: relay.artifactDirectory,
    },
  },
};
