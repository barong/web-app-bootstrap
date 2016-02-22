module.exports =  function (grunt) {
    'use strict';
    return {
        js: {
            options: {
                separator: ';'
            },
            files: {
                "<%= config.assets %>/libs-front.js": [
                    "<%= config.js_resources %>/jquery/jquery-2.1.3.min.js",
                    "<%= config.js_resources %>/json/json2.min.js",
                    "<%= config.js_resources %>/underscore/underscore.js",
                    "<%= config.js_resources %>/backbone/backbone.js",
                    "<%= config.js_resources %>/react/react.min.js",
                    "<%= config.js_resources %>/jquery/jquery.ui.widget.js",
                    "<%= config.js_resources %>/jquery/jquery.iframe-transport.js",
                    "<%= config.js_resources %>/fileupload/jquery.fileupload.js",
                    "<%= config.js_resources %>/log4javascript/log4javascript.js"
                ],
                "<%= config.assets %>/libs-back.js": [
                    "<%= config.js_resources %>/jquery/jquery-2.1.3.min.js",
                    "<%= config.js_resources %>/json/json2.min.js",
                    "<%= config.js_resources %>/underscore/underscore.js",
                    "<%= config.js_resources %>/backbone/backbone.js",
                    "<%= config.js_resources %>/react/react.min.js",
                    "<%= config.js_resources %>/jquery/jquery.ui.widget.js",
                    "<%= config.js_resources %>/jquery/jquery.iframe-transport.js",
                    "<%= config.js_resources %>/fileupload/jquery.fileupload.js",
                    "<%= config.js_resources %>/log4javascript/log4javascript.js"
                ]
            }
        }
    };
};
