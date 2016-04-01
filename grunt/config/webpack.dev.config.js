var path = require("path");
var webpack = require("webpack");
var extend = require('extend');
var files = require('./files.path.config');
var webpackFailPlugin = require('webpack-fail-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        "main-front": files.source_ts + '/app-front/main-front.tsx',
        "main-back": files.source_ts + '/app-back/main-back.ts'
    },
    devtool: 'eval-source-map',
    output: {
        path: files.assets,
        filename: '[name].js',
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
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.less'],
        modulesDirectories: [
            './node_modules',
            files.js_resources,
            files.source_ts,
            files.resources
        ],
        alias: {
            'jquery': 'jquery/jquery-2.1.3.min',
            'json': 'json/json2.min',
            'underscore': 'underscore/underscore',
            'backbone': 'backbone/backbone',
            'fileupload': 'fileupload/jquery.fileupload',
            // unescape module name with \\
            'jquery.ui.widget': '\\jquery/jquery.ui.widget',
            'iframe.transport': '\\jquery/jquery.iframe-transport',
            'log4javascript': 'log4javascript/log4javascript.js'
        }

    },
    // what comes as external dependencies
    externals: {
        "jquery": "$",
        "backbone": "Backbone"
    },
    plugins: [
        // The ProvidePlugin replaces a symbol in another source through the respective import
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            React: "react"
        }),
        // Webpack plugin that will make the process return status code 1 when it finishes with errors in single-run mode.
        webpackFailPlugin,
        new ExtractTextPlugin("[name].css")
    ],
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loaders: [
                    'react-hot',
                    'ts-loader'
                ]
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader?sourceMap!less-loader?sourceMap'
            }
        ]
    }
};
