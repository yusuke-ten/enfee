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
  config.module.rules.push({
    test: /\.svg$/,
    use: [
      "babel-loader",
      {
        loader: "react-svg-loader",
        options: {
          svgo: {
            plugins: [
              { removeTitle: false }
            ],
            floatPrecision: 2
          }
        }
      }
    ]
  })
  // react-svg-loaderを使用するため、storybookのdefaultで設定されているものを削除し競合を解決
  // yarn storybook --debug-webpack で実行するとwebpackの内容が出力され確認出来る
  config.module.rules = config.module.rules.map(rule => {
    {
      if (String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/)) {
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        };
      }

      return rule;
    }
  })
  config.resolve.alias = {
    'src': SRC_PATH,
    'components': SRC_PATH + '/components/',
    'containers': SRC_PATH + '/containers/',
    'atoms': SRC_PATH + '/components/atoms/',
    'const': SRC_PATH + '/const/',
    'modules': SRC_PATH + '/modules/',
    'services': SRC_PATH + '/services/',
    'config': SRC_PATH + '/config/',
    'utils': SRC_PATH + '/utils/'
  },
  config.resolve.extensions.push('.ts', '.tsx', 'js', 'jsx');
  return config;
};
