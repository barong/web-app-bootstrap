module.exports = function(grunt) {
    'use strict';

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths
    var config = {
        "resources": "src/main/resources/static",
        "js_resources": "<%= config.resources %>/js/vendor",
        "build": "build",
        "build_static": "<%= config.build %>/resources/main/static",
        "typescript_root": "src/main/typescript",
        // location where TypeScript source files are located
        "source_ts": "<%= config.typescript_root %>/ts",
        "build_ts": "<%= config.build %>/<%= config.typescript_root %>/ts",
        "definitions_ts": "<%= config.typescript_root %>/defs",
        // location where TypeScript/Jasmine test files are located
        "source_test_ts": "src/test/typescript",
        // location to place compiled javascript files
        "target_js": "<%= config.build_static %>/js"
    };

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
            config: config
        }
    });

};
