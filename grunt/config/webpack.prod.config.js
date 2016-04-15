var path = require("path");
var webpack = require("webpack");
var extend = require('extend');
var files = require('./files.path.config');
var webpackFailPlugin = require('webpack-fail-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        "main-front": ['babel-polyfill', files.source_ts + '/app-front/main-front.tsx'],
        "main-back": ['babel-polyfill', files.source_ts + '/app-back/main-back.tsx']
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
                    'babel-loader?presets[]=es2015',
                    'ts-loader'
                ]
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    }
};
