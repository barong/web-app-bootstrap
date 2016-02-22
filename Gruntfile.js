var files = require('./grunt/config/files.path.config');

module.exports = function(grunt) {
    'use strict';

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt config
    require('load-grunt-config')(grunt, {
        init: true,

        // can optionally pass options to load-grunt-tasks.
        // If you set to false, it will disable auto loading tasks.
        loadGruntTasks: {

            pattern: ['grunt-*'],
            config: require('./package.json'),
            scope: 'devDependencies'
        },

        data: {
            /**
             * We read in our `package.json` file so we can access the package name and
             * version. It's already there, so we don't repeat ourselves here.
             */
            pkg: grunt.file.readJSON('package.json'),
            config: files
        }
    });

};
