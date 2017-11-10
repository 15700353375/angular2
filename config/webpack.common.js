
// 引入相关依赖和插件j

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');


module.exports = {
  // polyfills - 使得Angular应用能够运行在大多数的现代浏览器。
  // vendor - 第三方依赖，如Angular、lodash和bootstrap.css。
  // app - 应用代码。
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  // resolve 无扩展名的文件导入
  // 实际上大部分import语句都不带扩展名，我们可以告诉Webpack，
  // 在查找这些没有扩展名的文件时，自动加上.ts或者.js扩展名来匹配
  resolve: {
    extensions: ['.ts', '.js', '.css']
  },

// module是一个对象，里面的rules属性用来决定文件如何加载。
// include 表示哪些目录中的 .js 文件需要进行 babel-loader
// exclude 表示哪些目录中的 .js 文件不要进行 babel-loader
  module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular2-router-loader',
                    'angular2-template-loader'
                ],
                exclude: /node_modules/
            }, 
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader', 'postcss-loader']
            }, 
            {
                test: /\.scss$/,
                use: ['to-string-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
              test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
              use:[{
                      loader: 'url-loader',
                      options: {
                          limit: 10000
                      }
                  }]
            },
            {
                test: /\.html$/,
                use: ['raw-loader']
            }
        ]
    },

   // 创建插件的实例。
   plugins: [

       // 解决 core.es5
      new webpack.ContextReplacementPlugin(
          /angular(\\|\/)core(\\|\/)@angular/,/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
          helpers.root('../src'), 
          {} 
      ),
      // new webpack.ContextReplacementPlugin(
      //             /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      //             path.resolve(__dirname, 'doesnotexist/')
      //         ),
      // Workaround for angular/angular#11580
      // new webpack.ContextReplacementPlugin(
      //   // The (\\|\/) piece accounts for path separators in *nix and Windows
      //   /angular(\\|\/)core(\\|\/)@angular/,
      //   helpers.root('./src'), // location of your src
      //   {} // a map of your routes
      // ),

      // 将三个模块的插件合理放进来，有共享依赖时，就把它们从app中移除
      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
      }),

      // Webpack可以通过HtmlWebpackPlugin
      // 自动为我们注入那些script和link标签将打包后的文件插入到index.html中
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]


}