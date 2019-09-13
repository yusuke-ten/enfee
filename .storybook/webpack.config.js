const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');

module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      {
        loader: 'thread-loader',
        options: {
          workers: require('os').cpus().length - 1,
        },
      },
      {
        loader: 'ts-loader',
        options: {
          happyPackMode: true,
        },
      },
    ],
  })
  config.resolve.alias = {
    'src': SRC_PATH,
    'components': SRC_PATH + '/components/',
    'containers': SRC_PATH + '/containers/',
    'atoms': SRC_PATH + 'components/atoms/',
    'const': SRC_PATH + 'const/',
  },
  config.resolve.extensions.push('.ts', '.tsx', 'js', 'jsx');
  return config;
};
