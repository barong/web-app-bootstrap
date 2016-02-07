
module.exports = function (grunt) {
    'use strict';

    // developer task
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('webpack', ['webpack']);
    grunt.registerTask('concat', ['concat']);

    // production task
    grunt.registerTask('production', [
        'less:production', // compile app.less to build/resource/static/css/app.css
        'concat:js',
        'webpack:default'
    ]);
};
