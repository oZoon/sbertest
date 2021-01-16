"use strict";

/* eslint-disable no-undef */
var paths = require('./paths');

var _require = require('clean-webpack-plugin'),
    CleanWebpackPlugin = _require.CleanWebpackPlugin;

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [paths.src + '/index.tsx'],
  output: {
    path: paths.build,
    filename: '[name].build.js',
    publicPath: '/',
    assetModuleFilename: 'resources/[name][ext]'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    title: 'webpack Boilerplate',
    favicon: paths.src + '/images/favicon.ico',
    template: paths.src + '/template.html',
    filename: 'index.html'
  })],
  module: {
    rules: [// js
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, // ts
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: ['ts-loader']
    }, // styles
    {
      test: /\.(scss|css)$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 1
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }]
    }, // images
    {
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      type: 'asset/resource'
    } // fonts and SVG
    //   {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},
    ]
  }
};