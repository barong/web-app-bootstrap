var webpack = require("webpack");
var webpackFailPlugin = require('webpack-fail-plugin');

module.exports = function (grunt) {
    'use strict';
    return {
        development: {
            entry: {
                "main-front": './<%= config.source_ts %>/app-front/main-front.ts',
                "main-back": './<%= config.source_ts %>/app-back/main-back.ts'
            },
            output: {
                path: './<%= config.target_js %>',
                filename: '[name].js'
                //filename: './build/resources/main/static/js/main.js'
            },
            resolve: {
                extensions: ['', '.ts', '.tsx', '.js'],
                modulesDirectories: [
                   './node_modules',
                    './<%= config.js_resources %>',
                    './<%= config.source_ts %>'
                ],
                alias: {
                    'jquery': 'jquery/jquery-2.1.3.min',
                    'json': 'json/json2.min',
                    'underscore': 'underscore/underscore',
                    'backbone': 'backbone/backbone',
                    'react': 'react/react',
                    // unescape module name with \\
                    'react/addons': '\\react/react-with-addons',
                    'fileupload': 'fileupload/jquery.fileupload',
                    'jquery.ui.widget': '\\jquery/jquery.ui.widget',
                    'iframe.transport': '\\jquery/jquery.iframe-transport',
                    'log4javascript': 'log4javascript/log4javascript.js'
                }

            },
            devtool: 'source-map',
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
                webpackFailPlugin
            ],
            module: {
                loaders: [
                    { test: /\.ts(x?)$/, loader: 'ts-loader' }
                ]
            }
        },
        production: {
            entry: {
                "main-front": './<%= config.source_ts %>/app-front/main-front.ts',
                "main-back": './<%= config.source_ts %>/app-back/main-back.ts'
            },
            output: {
                path: './<%= config.target_js %>',
                filename: '[name].js'
                //filename: './build/resources/main/static/js/main.js'
            },
            resolve: {
                extensions: ['', '.ts', '.tsx', '.js'],
                modulesDirectories: [
                    './node_modules',
                    './<%= config.js_resources %>',
                    './<%= config.source_ts %>'
                ],
                alias: {
                    'jquery': 'jquery/jquery-2.1.3.min',
                    'json': 'json/json2.min',
                    'underscore': 'underscore/underscore',
                    'backbone': 'backbone/backbone',
                    'react': 'react/react',
                    // unescape module name with \\
                    'react/addons': '\\react/react-with-addons',
                    'fileupload': 'fileupload/jquery.fileupload',
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
                webpackFailPlugin
            ],
            module: {
                loaders: [
                    { test: /\.ts(x?)$/, loader: 'ts-loader' }
                ]
            }
        }
    };
};
