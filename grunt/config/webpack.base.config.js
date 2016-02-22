var webpack = require("webpack");
var files = require('./files.path.config');
var webpackFailPlugin = require('webpack-fail-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var DEV_MODE = process.env.NODE_ENV === 'dev';

module.exports = {
    entry: {
        "main-front": DEV_MODE ?
            ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', files.source_ts + '/app-front/main-front.tsx']
            : files.source_ts + '/app-front/main-front.tsx',
        "main-back": DEV_MODE ?
            ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', files.source_ts + '/app-back/main-back.ts']
            : files.source_ts + '/app-back/main-back.ts'
    },
    output: {
        path: files.assets,
        filename: '[name].js'
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
                    'ts-loader'
                ]
            },
            {
                test: /\.less$/,
                loader: DEV_MODE ? 'style-loader!css-loader?sourceMap!less-loader?sourceMap'
                    : ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    }
};