import webpack = require('webpack');
import webpackMerge = require('webpack-merge');
import common from './webpack.common';
import path, { resolve, join } from 'path';

const proxy = require('./config/proxy');
const PORT = +(process.env.PORT || 3201);

const config: webpack.Configuration = webpackMerge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: join(__dirname, 'public'),
    disableHostCheck: true,
    historyApiFallback: true,
    compress: true,
    host: '0.0.0.0',
    port: PORT,
    proxy
  },
  entry: [
    `webpack-dev-server/client?http://127.0.0.1:${PORT}`,
    'webpack/hot/only-dev-server',
    resolve(__dirname, 'src/index')
  ],
  module: {
    rules: [

    ]
  }
});

export default config;
