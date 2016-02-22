module.exports =  function (grunt) {
    'use strict';
    return {
        styles: {
            files: ['<%= config.resources %>/less/**/*.less'],
            tasks: ['less:development']
        }
    };
};
