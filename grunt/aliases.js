
module.exports = function (grunt) {
    'use strict';

    // developer task
    grunt.registerTask('default', ['production']);

    grunt.registerTask('webpack', ['webpack']);
    grunt.registerTask('concat', ['concat']);

    // production task
    grunt.registerTask('production', [
        'concat:js',
        'webpack:prod'
    ]);
};
