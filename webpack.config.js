const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const express = require('express');
// const app = express();

//mini-css-extract-plugin替代了它 用来把css打包成单独文件
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const axios = require('axios');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  mode: 'development',//开发模式 代码无压缩
  entry: {
    index: ['./src/index.js'] //入口
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      'common': resolve('src/common'),
      'components': resolve('src/components'),
      'asset': resolve('src/asset'),
      'api': resolve('src/api'),
      'base': resolve('src/base'),
      'store': resolve('src/store'),
    },
  },
  devtool: 'eval',
  devServer: {
    contentBase: './dist', //指定服务文件
    hot: true, //热更新
    historyApiFallback: {
      index: '/', //output.publicPath
    },
    disableHostCheck: true,
    before: function(app, server) {

      app.get('/img/:imgName', function (req, res) {
        console.log("req.params", req.params); 
        let filePath = path.join(__dirname, 'src', 'asset', 'img', req.params.imgName);
        res.sendfile(filePath);
        
      });

      // CSRF测试
      app.get('/api/BigType/getBig', function (req, res) {
        var url = 'http://www.shashafushi.cn:8080/api/BigType/getBig';
    
        axios.get(url, {
          headers: {
            // "host": 'www.shashafushi.cn:8080',
            // "referer": 'http://www.shashafushi.cn:8080/',
            // "origin": 'http://www.shashafushi.cn:8080/',
            "Cookie" : 'state=' + 123456,
          }
        }).then(response => {
          console.log("getBig", response.config);
          res.json(response.data);
        }).catch(e => {
          console.log(e);
        })
      });
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
            require.resolve('style-loader'),
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]--[hash:5]'
              }
            },
            {
              loader: 'less-loader', // compiles Less to CSS
            },
        ],
      },
      {
        test: /\.css$/, 
        exclude: /node_modules/,
        use:  [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:5]'
            }
          }
        ]
         
      },
      {
        test: /\.css$/, 
        include: /antd/,
        use:  [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",  //es6 babel
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader", 
          }
        ]
      }
    ],
  },
  plugins: [
    //new CleanWebpackPlugin(['dist']), //先清理dist文件
    new HtmlWebpackPlugin({ //将src/index.html转换到dist/index.html
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
};


// 1. react-router
// 2. react-redux
// 3. less