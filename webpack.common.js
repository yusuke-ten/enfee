const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/index.tsx'),
  output: {
    filename: 'js/bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.*(ts|tsx)$/,
        exclude: /node_modules/,
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
              getCustomTransformers: path.join(__dirname, './webpack.ts-transformers.js')
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
          ],
        }),
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200,
            },
          },
        ],
      },
      {
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
      }
    ],
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src/'),
      'components': path.resolve(__dirname, './src/components/'),
      'containers': path.resolve(__dirname, './src/containers/'),
      'atoms': path.resolve(__dirname, './src/components/atoms/'),
      'const': path.resolve(__dirname, './src/const/'),
      'modules': path.resolve(__dirname, './src//modules/'),
      'services': path.resolve(__dirname, './src/services/'),
      'config': path.resolve(__dirname, './src/config/'),
      'utils': path.resolve(__dirname, './src//utils/')
    },
    extensions: ['.tsx', '.ts',  '.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/style.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
    }),
  ],
};
