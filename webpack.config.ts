import webpack = require('webpack');
import webpackMerge = require('webpack-merge');
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from "path";
import common from './webpack.common';

const config: webpack.Configuration = webpackMerge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.[hash:8].js',
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['build', 'build.zip'],
      verbose: true
    })
  ]
});

export default config;
