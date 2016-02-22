var path = require('path');
var webpack = require("webpack");
var webpackDevConfig = require('./config/webpack.dev.config');
var webpackProdConfig = require('./config/webpack.prod.config');


module.exports = function (grunt) {
    'use strict';
    return {
        dev: webpackDevConfig, 
        prod: webpackProdConfig 
    };
};
