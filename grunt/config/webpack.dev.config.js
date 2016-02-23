var path = require("path");
var webpack = require("webpack");
var extend = require('extend');

var config = require('./webpack.base.config');

var devConfig = {
    devtool: 'eval-source-map',
    output: {
        publicPath: '/assets/'
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        proxy: {
            '*': {
                target: 'http://localhost:8090',
                bypass: function (req, res, proxyOptions) {
                    // remove "/assets/.css" files for webpack-dev-server page to exclude wrong css overriding
                    if (req.url && req.url.match(/\/assets\/.+?\.css/)) {
                        console.warn("WARN: file=" + req.url + " will not be proxied for dev purpose.");
                        return '/404.html';
                    }
                }
            }
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
