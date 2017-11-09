
// 引入相关依赖和插件j
var helpers = require('./helpers');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');


module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    // 将打包后的文件提取成外部css文件
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    port: 3375,
    // historyApiFallback: true,
    // stats: 'minimal'
  }
});