const withImages = require('next-images');

const redirects = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboards/tasks',
        permanent: true
      },
      // ... other redirects
    ];
  }
};

module.exports = withImages(redirects);
