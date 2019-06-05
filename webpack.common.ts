import webpack from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractTextPlugin = new ExtractTextPlugin(`resources/style.[hash].css`);
const pkg = require('./package');
const resolveToStaticPath = (relativePath: string) => resolve(__dirname, relativePath);
const ICON_PATH = [].map(resolveToStaticPath);
const FONT_PATH = [].map(resolveToStaticPath);

const config: webpack.Configuration = {
  entry: './src/index',
  output: {
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          publicPath: '/',
          name: 'resources/images/[name].ext'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)($|\?)/,
        include: FONT_PATH,
        loader: 'url-loader',
        options: {
            limit: 1,
            size: 16,
            hash: 'sha512',
            digest: 'hex',
            name: `resources/fonts/[hash].[ext]`,
            publicPath: '/'
        }
      },
      {
        test: /\.svg/,
        loader: 'svg-sprite-loader',
        include: ICON_PATH,
        options: {
          symbolId: 'icon-[name]',
          name: 'resources/images/svg/[hash].ext'
        }
      },
      {
        test: /\.less$/,
        loader: extractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
                javascriptEnabled: true
              }
            }
          ],
          fallback: 'style-loader?{attrs:{prop: "value"}}'
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.version': JSON.stringify(pkg.version)
    }),
    new HtmlWebpackPlugin({
      title: 'react-cli',
      template: 'src/index.html',
      excludeChunks: []
    }),
    extractTextPlugin
  ]
};

export default config;
