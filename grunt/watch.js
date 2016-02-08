module.exports =  function (grunt) {
    'use strict';
    return {
        styles: {
            files: ['<%= config.resources %>/less/**/*.less'],
            tasks: ['less:development']
        },
        typescript: {
            files: ['<%= config.typescript_root %>/**/*.ts', '<%= config.typescript_root %>/**/*.tsx', '<%= config.resources %>/**/*.js'],
            tasks: ['webpack:development']
        }
    };
};
