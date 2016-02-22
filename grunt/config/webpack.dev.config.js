var path = require("path");
var webpack = require("webpack");
var extend = require('extend');

var config = require('./webpack.base.config');

var devConfig = {
    devtool: 'eval-source-map',
    output: {
        publicPath: '/js/'
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        proxy: {
            '*': 'http://localhost:8090'
        }
    },
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loaders: [
                    'react-hot',
                    'ts-loader'
                ]
            }
        ]
    }
};

module.exports = extend(true, config, devConfig);
