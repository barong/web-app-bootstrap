var path = require("path");
var webpack = require("webpack");
var extend = require('extend');

var config = require('./webpack.base.config');

var prodConfig = {
    
};

module.exports = extend(true, config, prodConfig);
