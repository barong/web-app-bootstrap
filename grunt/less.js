module.exports =  function (grunt) {
    'use strict';
    return {
        development: {
            options: {
                paths: ["<%= config.resources %>/less"], // Directory of input file. Specifies directories to scan for @import directives when parsing.
                sourceMap: true,
                outputSourceFiles: true,
                sourceMapFileInline: true
            },
            files: {
                "<%= config.build_static %>/css/app-front.css": "<%= config.resources %>/less/app/front.less",
                "<%= config.build_static %>/css/app-back.css": "<%= config.resources %>/less/app/back.less"
            }
        },
        production: {
            options: {
                paths: ["<%= config.resources %>/less"] // Directory of input file. Specifies directories to scan for @import directives when parsing.
            },
            files: {
                "<%= config.build_static %>/css/app-front.css": "<%= config.resources %>/less/app/front.less",
                "<%= config.build_static %>/css/app-back.css": "<%= config.resources %>/less/app/back.less"
            }
        }
    };
};
